import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherProfile.css";

const TeacherProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [teacherDetails, setTeacherDetails] = useState({});
  const [courses, setCourses] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    expertise: "",
    experience: "",
    phone: "",
    bio: ""
  });

  const fetchData = async () => {
    try {
      const userRes = await fetch("http://localhost:8080/api/users/me", {
        headers: { "x-auth-token": token }
      });
      const userData = await userRes.json();

      setTeacherDetails(userData || {});
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        expertise: userData.expertise || "",
        experience: userData.experience || "",
        phone: userData.phone || "",
        bio: userData.bio || ""
      });

      const courseRes = await fetch(
        "http://localhost:8080/api/courses/teacher",
        {
          headers: { "x-auth-token": token }
        }
      );
      const courseData = await courseRes.json();

      setCourses(
        Array.isArray(courseData)
          ? courseData
          : courseData?.courses || []
      );

    } catch (err) {
      console.error(err);
      setCourses([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8080/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        },
        body: JSON.stringify(formData)
      });

      setIsEditing(false);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:8080/api/courses/${id}`, {
        method: "DELETE",
        headers: { "x-auth-token": token }
      });

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePublish = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/courses/${id}/publish`, {
        method: "PATCH",
        headers: { "x-auth-token": token }
      });

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  /* ✅ FIX: IMAGE HANDLER */
  const getImageUrl = (thumbnail) => {
    if (!thumbnail) return "/default.png";

    // Cloudinary
    if (thumbnail.startsWith("http")) {
      return thumbnail;
    }

    // Local storage
    return `http://localhost:8080/${thumbnail}`;
  };

  return (
    <div className="teacher-dashboard">

      <div className="dashboard-header">

        {!isEditing ? (
          <>
            <div>
              <h1>
                {teacherDetails?.firstName} {teacherDetails?.lastName}
              </h1>

              <p className="expertise">
                {teacherDetails?.expertise} | {teacherDetails?.experience}
              </p>

              <p>{teacherDetails?.email}</p>

              {/* ✅ FIXED DISPLAY */}
              <p>📞 {teacherDetails?.phone || "Not added"}</p>
              <p className="teacher-bio">
                {teacherDetails?.bio || "No bio available"}
              </p>
            </div>

            <div className="teacher-profile-actions">
              <button
                className="teacher-edit-btn"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit Profile
              </button>

              <button
                className="create-course-btn"
                onClick={() => navigate("/create-course")}
              >
                + Create Classroom
              </button>
            </div>
          </>
        ) : (
          <form className="teacher-edit-form" onSubmit={handleUpdate}>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            <input name="expertise" value={formData.expertise} onChange={handleChange} placeholder="Expertise" />
            <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="About Yourself"
              rows="3"
            />

            <div className="teacher-form-buttons">
              <button type="submit" className="teacher-save-btn">Save</button>
              <button type="button" className="teacher-cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        )}

      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h3>Coins</h3>
          <p>💰 {teacherDetails?.coins || 0}</p>
        </div>

        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>{Array.isArray(courses) ? courses.length : 0}</p>
        </div>

        <div className="stat-card">
          <h3>Total Enrollments</h3>
          <p>
            {Array.isArray(courses)
              ? courses.reduce(
                  (sum, c) => sum + (c.enrollmentCount || 0),
                  0
                )
              : 0}
          </p>
        </div>
      </div>

      <div className="teacher-course-grid">
        {!Array.isArray(courses) || courses.length === 0 ? (
          <p>No courses created yet.</p>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="teacher-course-card">

              {/* ✅ FIXED IMAGE */}
              <img
                src={getImageUrl(course.thumbnail)}
                alt="thumbnail"
              />

              <h3>{course.courseName}</h3>
              <p>{course.description}</p>

              <div className="course-meta">
                <span className="price">₹ {course.price}</span>
                <span>👥 {course.enrollmentCount || 0} Students</span>
                <span
                  className={`status ${
                    course.isPublished ? "published" : "draft"
                  }`}
                >
                  {course.isPublished ? "Published" : "Draft"}
                </span>
              </div>

              {course.publishDate && (
                <p className="publish-date">
                  📅 Published on:{" "}
                  {new Date(course.publishDate).toLocaleDateString()}
                </p>
              )}

              <div className="teacher-course-actions">

                <div className="action-row">
                  <button
                    className="manage-btn"
                    onClick={() =>
                      navigate(`/manage-course/${course._id}`)
                    }
                  >
                    Manage
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/edit-course/${course._id}`)
                    }
                  >
                    Edit
                  </button>
                </div>

                <div className="action-row">
                  <button
                    className="publish-btn"
                    onClick={() => handlePublish(course._id)}
                  >
                    {course.isPublished ? "Unpublish" : "Publish"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </button>
                </div>

              </div>

            </div>
          ))
        )}
      </div>

      <div className="quiz-section">
        <h2>Quiz Performance</h2>
        {teacherDetails?.quizResults?.length > 0 ? (
          teacherDetails.quizResults.map((quiz, idx) => (
            <div key={idx} className="quiz-card">
              <h4>{quiz.topic}</h4>
              <p>Score: {quiz.score}</p>
              <p>Coins: {quiz.coins}</p>
            </div>
          ))
        ) : (
          <p>No quiz attempts yet.</p>
        )}
      </div>

    </div>
  );
};

export default TeacherProfile;