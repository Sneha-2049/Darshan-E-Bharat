const router = require("express").Router();
const Product = require("../models/product");
const auth = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

const uploadDir = path.join(__dirname, "../uploads/products");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ADD PRODUCT
router.post("/add", auth, upload.array("images", 5), async (req, res) => {
  try {
    const productData = {
      ...req.body,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      vendorId: req.user._id,
      images: req.files ? req.files.map((f) => `products/${f.filename}`) : [],
    };
    const product = new Product(productData);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// EDIT PRODUCT (Handles Text Updates & New Image Appends)
router.put("/edit/:id", auth, upload.array("images", 5), async (req, res) => {
  try {
    const updatedData = { ...req.body };
    if (updatedData.price) updatedData.price = Number(updatedData.price);
    if (updatedData.stock) updatedData.stock = Number(updatedData.stock);

    let existingProduct = await Product.findOne({ _id: req.params.id, vendorId: req.user._id });
    if (!existingProduct) return res.status(404).json({ success: false, error: "Product not found" });

    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((f) => `products/${f.filename}`);
      updatedData.images = [...existingProduct.images, ...newImages].slice(0, 5);
    }

    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, vendorId: req.user._id },
      updatedData,
      { new: true }
    );
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE SINGLE IMAGE
router.put("/delete-image/:id", auth, async (req, res) => {
  try {
    const { imagePath } = req.body; 
    const product = await Product.findOne({ _id: req.params.id, vendorId: req.user._id });
    if (!product) return res.status(404).json({ success: false, error: "Product not found" });

    const fullPath = path.join(__dirname, "../uploads", imagePath);
    if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);

    product.images = product.images.filter((img) => img !== imagePath);
    await product.save();
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE FULL PRODUCT
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ _id: req.params.id, vendorId: req.user._id });
    if (!deleted) return res.status(404).json({ success: false, error: "Product not found" });

    if (deleted.images) {
      deleted.images.forEach((img) => {
        const fullPath = path.join(__dirname, "../uploads", img);
        if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
      });
    }
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET ROUTES
router.get("/all", async (req, res) => {
  const products = await Product.find({ isAvailable: true }).sort({ createdAt: -1 });
  res.json({ success: true, products });
});

router.get("/my-products", auth, async (req, res) => {
  const products = await Product.find({ vendorId: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, products });
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ success: true, product });
  } catch (err) {
    res.status(404).json({ success: false, error: "Not found" });
  }
});

module.exports = router;