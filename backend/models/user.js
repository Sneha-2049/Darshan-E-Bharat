const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

/* ===========================
   QUIZ SCHEMA
=========================== */
const quizSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  score: { type: Number, required: true },
  coins: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

/* ===========================
   PURCHASED COURSE SCHEMA
=========================== */
const purchasedCourseSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // ✅ FIXED
      required: true,
    },
    enrolledAt: {
      type: Date,
      default: Date.now,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["card", "upi", "netbanking", "coins", "free"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false },
);

/* ===========================
   USER SCHEMA
=========================== */
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["user", "teacher", "vendor", "admin"],
      default: "user",
    },

    /* TEACHER */
    expertise: { type: String, default: "" },
    experience: { type: String, default: "" },

    /* ✅ NEW FIELD */
    bio: { type: String, default: "" },

    /* VENDOR + COMMON */
    shopName: String,
    phone: String, // ✅ already exists (used for both now)
    address: String,
    city: String,
    state: String,
    pincode: String,
    description: String,

    documentUrl: { type: String, default: "" }, // Cloudinary link save karne ke liye
    isVerified: { type: Boolean, default: false }, // Teacher/Vendor ke liye compulsory check
    isRejected: { type: Boolean, default: false }, // ⭐ New field

    /* WALLET */
    coins: { type: Number, default: 0 },

    /* QUIZ */
    quizResults: [quizSchema],

    /* LMS */
    purchasedCourses: [purchasedCourseSchema],
  },
  { timestamps: true },
);

/* ===========================
   TOKEN GENERATOR
=========================== */
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, role: this.role },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "7d" },
  );
};

/* ===========================
   VALIDATION
=========================== */
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),

    role: Joi.string().valid("user", "teacher", "vendor", "admin").optional(),

    expertise: Joi.string().allow(""),
    experience: Joi.string().allow(""),

    /* ✅ NEW FIELD */
    bio: Joi.string().allow(""),

    /* Vendor conditional */
    shopName: Joi.when("role", {
      is: "vendor",
      then: Joi.required(),
      otherwise: Joi.allow(""),
    }),

    /* ✅ UPDATED (now allowed for all) */
    phone: Joi.string().allow(""),
    documentUrl: Joi.string().allow("").label("Document URL"),

    address: Joi.string().allow(""),
    city: Joi.string().allow(""),
    state: Joi.string().allow(""),
    pincode: Joi.string().allow(""),
    description: Joi.string().allow(""),
  });

  return schema.validate(data);
};

const User = mongoose.model("user", userSchema);

module.exports = { User, validate };
