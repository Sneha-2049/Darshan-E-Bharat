const mongoose = require("mongoose");

/* ===========================
   LECTURE SCHEMA
=========================== */
const lectureSchema = new mongoose.Schema({
  lectureTitle: {
    type: String,
    required: true
  },

  lectureDescription: {
    type: String,
    default: ""
  },

  videoUrl: {
    type: String,
    required: true
  },

  thumbnail: {
    type: String,
    default: ""
  },

  duration: {
    type: String,
    default: ""
  },

  isPreview: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date
  }

}, { _id: true });


/* ===========================
   COURSE SCHEMA
=========================== */
const courseSchema = new mongoose.Schema({

  courseName: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  duration: {
    type: String,
    default: ""
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },

  description: {
    type: String,
    default: ""
  },

  learningPoints: [
    {
      type: String
    }
  ],

  thumbnail: {
    type: String,
    default: ""
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  lectures: [lectureSchema],

  isPublished: {
    type: Boolean,
    default: false
  },

  publishDate: {
    type: Date,
    default: null
  },

  accessDuration: {
    type: Number,
    default: 30
  },

  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],

  totalEnrollments: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

/* 🔥 ONLY CHANGE BELOW */
module.exports = mongoose.model("Course", courseSchema);