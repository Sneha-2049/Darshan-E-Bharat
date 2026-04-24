const router = require("express").Router();
const mongoose = require("mongoose");
const Course = require("../models/course");
const { User } = require("../models/user");
const auth = require("../middleware/auth");

/*USE CLOUDINARY INSTEAD OF LOCAL MULTER */
const upload = require("../middleware/upload");

/* ===========================
   HELPER → Convert YouTube URL
=========================== */
const convertToEmbedUrl = (url) => {
  if (!url) return url;

  if (url.includes("watch?v="))
    return url.replace("watch?v=", "embed/");

  if (url.includes("youtu.be/"))
    return url.replace("youtu.be/", "youtube.com/embed/");

  return url;
};

/* ===========================
   HELPER → Calculate Expiry
=========================== */
const calculateExpiry = (durationText) => {
  const expiry = new Date();

  if (!durationText) {
    expiry.setMonth(expiry.getMonth() + 1);
    return expiry;
  }

  const lower = durationText.toLowerCase();
  const number = parseInt(lower);

  if (lower.includes("day"))
    expiry.setDate(expiry.getDate() + number);
  else if (lower.includes("week"))
    expiry.setDate(expiry.getDate() + number * 7);
  else if (lower.includes("month"))
    expiry.setMonth(expiry.getMonth() + number);
  else
    expiry.setMonth(expiry.getMonth() + 1);

  return expiry;
};

/* ===========================
   GET TEACHER COURSES
=========================== */
router.get("/teacher", auth, async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const courses = await Course.find({ teacher: req.user._id });

    const updated = courses.map(course => ({
      ...course._doc,
      enrollmentCount: course.enrolledStudents?.length || 0,
      lectureCount: course.lectures?.length || 0
    }));

    res.send(updated);
  } catch (error) {
    console.error("Teacher Route Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   GET ALL PUBLISHED COURSES
=========================== */
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true })
      .populate("teacher", "-password"); //FIXED

    res.send(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   GET SINGLE COURSE
=========================== */
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send({ message: "Invalid Course ID" });

    const course = await Course.findById(req.params.id)
      .populate("teacher", "-password"); // FIXED

    if (!course)
      return res.status(404).send({ message: "Course not found" });

    res.send(course);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
/* ===========================
   CREATE COURSE (CLOUDINARY)
=========================== */
router.post("/create", auth, upload.single("thumbnail"), async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).send({ message: "Only teachers can create courses" });

    const {
      courseName,
      category,
      duration,
      price,
      description,
      learningPoints
    } = req.body;

    const course = new Course({
      courseName,
      category,
      duration,
      price,
      description,
      learningPoints: learningPoints
        ? learningPoints.split(",").map(p => p.trim())
        : [],
      thumbnail: req.file ? req.file.path : "", // CLOUDINARY URL
      teacher: req.user._id,
      isPublished: false,
      publishDate: null
    });

    await course.save();
    res.status(201).send({ message: "Course created", course });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   UPDATE COURSE (CLOUDINARY)
=========================== */
router.put("/:id", auth, upload.single("thumbnail"), async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send({ message: "Invalid Course ID" });

    const course = await Course.findById(req.params.id);

    if (!course)
      return res.status(404).send({ message: "Course not found" });

    if (course.teacher.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    const {
      courseName,
      category,
      duration,
      price,
      description,
      learningPoints
    } = req.body;

    if (courseName) course.courseName = courseName;
    if (category) course.category = category;
    if (duration) course.duration = duration;
    if (price !== undefined) course.price = price;
    if (description) course.description = description;

    if (learningPoints)
      course.learningPoints = learningPoints.split(",").map(p => p.trim());

    if (req.file)
      course.thumbnail = req.file.path; // CLOUDINARY

    await course.save();

    res.send({ message: "Course updated successfully", course });

  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   DELETE COURSE
=========================== */
router.delete("/:id", auth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).send({ message: "Invalid Course ID" });

    const course = await Course.findById(req.params.id);

    if (!course)
      return res.status(404).send({ message: "Course not found" });

    if (course.teacher.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    await course.deleteOne();

    res.send({ message: "Course deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   ADD LECTURE
=========================== */
router.post("/:id/add-lecture", auth, async (req, res) => {
  try {
    const { lectureTitle, lectureDescription, videoUrl } = req.body;

    const course = await Course.findById(req.params.id);
    if (!course)
      return res.status(404).send({ message: "Course not found" });

    if (course.teacher.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    course.lectures.push({
      lectureTitle,
      lectureDescription,
      videoUrl: convertToEmbedUrl(videoUrl)
    });

    await course.save();

    res.send({ message: "Lecture added", course });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   EDIT LECTURE
=========================== */
router.put("/:courseId/lecture/:lectureId", auth, async (req, res) => {
  try {
    const { lectureTitle, lectureDescription, videoUrl } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.courseId))
      return res.status(400).send({ message: "Invalid Course ID" });

    const course = await Course.findById(req.params.courseId);
    if (!course)
      return res.status(404).send({ message: "Course not found" });

    if (course.teacher.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    const lecture = course.lectures.id(req.params.lectureId);
    if (!lecture)
      return res.status(404).send({ message: "Lecture not found" });

    lecture.lectureTitle = lectureTitle || lecture.lectureTitle;
    lecture.lectureDescription = lectureDescription || lecture.lectureDescription;
    if (videoUrl) lecture.videoUrl = convertToEmbedUrl(videoUrl);

    await course.save();

    res.send({ message: "Lecture updated successfully", course });

  } catch (error) {
    console.error("Edit Lecture Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   DELETE LECTURE
=========================== */
router.delete("/:courseId/lecture/:lectureId", auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course)
      return res.status(404).send({ message: "Course not found" });

    if (course.teacher.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    course.lectures.pull(req.params.lectureId);

    await course.save();

    res.send({ message: "Lecture deleted successfully" });

  } catch (error) {
    console.error("Delete Lecture Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   ENROLL STUDENT
=========================== */
router.post("/:id/enroll", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    if (!user)
      return res.status(404).send({ message: "User not found" });

    const course = await Course.findById(req.params.id);

    if (!course || !course.isPublished)
      return res.status(400).send({ message: "Course not available" });

    if (!user.purchasedCourses)
      user.purchasedCourses = [];

    const alreadyEnrolled = user.purchasedCourses.some(
      c => c.course && c.course.toString() === course._id.toString()
    );

    if (alreadyEnrolled)
      return res.status(400).send({ message: "Already enrolled" });

    const coinsUsed = Math.min(user.coins || 0, course.price || 0);
    user.coins = Math.max(0, user.coins - coinsUsed);

    const expiryDate = calculateExpiry(course.duration);

    user.purchasedCourses.push({
      course: course._id,
      enrolledAt: new Date(),
      expiryDate,
      amountPaid: coinsUsed,
      paymentMethod: coinsUsed > 0 ? "coins" : "free",
      isActive: true
    });

    course.enrolledStudents.push(user._id);
    course.totalEnrollments = course.enrolledStudents.length;

    await user.save();
    await course.save();

    res.send({
      message: "Enrollment successful",
      expiryDate,
      remainingCoins: user.coins
    });

  } catch (error) {
    console.error("Enroll Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   ADD REVIEW
=========================== */
router.post("/:id/review", auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const user = await User.findById(req.user._id);
    if (!user)
      return res.status(404).send({ message: "User not found" });

    const course = await Course.findById(req.params.id);
    if (!course)
      return res.status(404).send({ message: "Course not found" });

    // 🚫 Prevent duplicate review
    const alreadyReviewed = course.reviews.find(
      (r) => r.user.toString() === req.user._id
    );

    if (alreadyReviewed)
      return res.status(400).send({ message: "You already reviewed this course" });

    //Add review
    course.reviews.push({
      user: req.user._id,
      userName: `${user.firstName} ${user.lastName}`,
      rating,
      comment
    });

    //Calculate average rating
    const totalRatings = course.reviews.reduce((sum, r) => sum + r.rating, 0);
    course.averageRating = totalRatings / course.reviews.length;

    await course.save();

    res.send({
      message: "Review added successfully",
      averageRating: course.averageRating,
      reviews: course.reviews
    });

  } catch (error) {
    console.error("Review Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   PUBLISH / UNPUBLISH
=========================== */
router.patch("/:id/publish", auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course)
      return res.status(404).send({ message: "Course not found" });

    if (course.teacher.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    course.isPublished = !course.isPublished;
    course.publishDate = course.isPublished ? new Date() : null;

    await course.save();

    res.send({
      message: "Publish status updated",
      isPublished: course.isPublished
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;