const mongoose = require("mongoose");

/* ===========================
  REVIEW SCHEMA (NEW)
=========================== */
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  userName: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  comment: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

}, { _id: true });


/* ===========================
   PRODUCT SCHEMA
=========================== */
const productSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "vendor", required: true }, // existing
  title: { type: String, required: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true },
  category: { type: String, default: "" },
  images: [String],
  stock: { type: Number, default: 0 },
  isAvailable: { type: Boolean, default: true },

  detailsUrl: {
    type: String,
    default: "",
  },

  /* NEW: REVIEWS */
  reviews: [reviewSchema],

  /* NEW: AVERAGE RATING */
  averageRating: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);