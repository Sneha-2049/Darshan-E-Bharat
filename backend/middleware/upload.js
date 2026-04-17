const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

/* ===========================
   CLOUDINARY CONFIG
=========================== */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

/* DEBUG (REMOVE LATER) */
console.log("Cloudinary Config Loaded:",
  process.env.CLOUDINARY_CLOUD_NAME ? "YES" : "NO"
);

/* ===========================
   STORAGE CONFIG
=========================== */
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    try {
      let folder = "darshan-e-bharat/products";

      /* ✅ Detect route properly */
      if (req.originalUrl.includes("course")) {
        folder = "darshan-e-bharat/courses";
      }

      return {
        folder,
        allowed_formats: ["jpg", "png", "jpeg", "webp"], // ✅ FIXED
        public_id: Date.now() + "-" + file.originalname, // ✅ unique name
      };
    } catch (err) {
      console.error("Cloudinary Param Error:", err);
      throw err;
    }
  },
});

/* ===========================
   MULTER INSTANCE
=========================== */
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // ✅ 5MB limit
  },
});

/* ===========================
   DEBUG MIDDLEWARE (OPTIONAL)
=========================== */
upload.singleFileDebug = (fieldName) => (req, res, next) => {
  upload.single(fieldName)(req, res, function (err) {
    if (err) {
      console.error("Upload Error:", err);
      return res.status(500).send({ message: err.message });
    }

    console.log("Uploaded File:", req.file); // 🔥 important debug

    next();
  });
};

module.exports = upload;
