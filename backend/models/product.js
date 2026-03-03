const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "vendor", required: true }, // make sure your vendor collection is correct
  title: { type: String, required: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true },
  category: { type: String, default: "" },
  images: [String], // array of image URLs
  stock: { type: Number, default: 0 },
  isAvailable: { type: Boolean, default: true },

  detailsUrl: {
      type: String,
      default: "",
    },

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);