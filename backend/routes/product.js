const router = require("express").Router();
const Product = require("../models/product");
const User = require("../models/user"); // NEW
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const cloudinary = require('cloudinary').v2;

/* ===========================
   HELPER
=========================== */
const getPublicId = (url) => {
  const parts = url.split('/');
  const fileName = parts[parts.length - 1].split('.')[0];
  return `darshan-e-bharat/products/${fileName}`;
};

/* ===========================
   ADD PRODUCT
=========================== */
router.post("/add", auth, upload.array("images", 5), async (req, res) => {
  try {
    const productData = {
      ...req.body,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      vendorId: req.user._id,
      images: req.files ? req.files.map((f) => f.path) : [],
    };
    const product = new Product(productData);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ===========================
   ADD REVIEW
=========================== */
router.post("/:id/review", auth, async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const user = await User.findById(req.user._id || req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Duplicate check
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id
    );

    if (alreadyReviewed)
      return res.status(400).json({ message: "You already reviewed this product" });

    // Add review
    product.reviews.push({
      user: req.user._id,
      userName: `${user.firstName} ${user.lastName}`,
      rating,
      comment
    });

    // Calculate average
    const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
    product.averageRating = total / product.reviews.length;

    await product.save();

    res.json({
      message: "Review added successfully",
      reviews: product.reviews,
      averageRating: product.averageRating
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/edit/:id", auth, upload.array("images", 5), async (req, res) => {
  try {
    const existingProduct = await Product.findOne({ 
      _id: req.params.id, 
      vendorId: req.user._id 
    });

    if (!existingProduct) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    // Build update object manually - simple and clear
    const updatedData = {};

    if (req.body.title) updatedData.title = req.body.title;
    if (req.body.description !== undefined) updatedData.description = req.body.description;
    if (req.body.price !== undefined) updatedData.price = Number(req.body.price);
    if (req.body.stock !== undefined) updatedData.stock = Number(req.body.stock);
    if (req.body.category !== undefined) updatedData.category = req.body.category;

    // Heritage fields
    if (req.body.originState) updatedData.originState = req.body.originState;
    if (req.body.tribeName) updatedData.tribeName = req.body.tribeName;
    if (req.body.materialUsed) updatedData.materialUsed = req.body.materialUsed;
    if (req.body.heritageHistory !== undefined) updatedData.heritageHistory = req.body.heritageHistory;

    // Optional specs
    if (req.body.authenticity !== undefined) updatedData.authenticity = req.body.authenticity;
    if (req.body.artisanName !== undefined) updatedData.artisanName = req.body.artisanName;
    if (req.body.dimensions !== undefined) updatedData.dimensions = req.body.dimensions;
    if (req.body.weight !== undefined) updatedData.weight = req.body.weight;
    if (req.body.careInstructions !== undefined) updatedData.careInstructions = req.body.careInstructions;

    // Only update images if new files were uploaded
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((f) => f.path);
      updatedData.images = [...existingProduct.images, ...newImages].slice(0, 5);
    }

    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, vendorId: req.user._id },
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    res.json({ success: true, product });

  } catch (err) {
    console.error("Edit error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ===========================
   DELETE IMAGE
=========================== */
router.put("/delete-image/:id", auth, async (req, res) => {
  try {
    const { imagePath } = req.body;
    const product = await Product.findOne({ _id: req.params.id, vendorId: req.user._id });
    if (!product) return res.status(404).json({ success: false, error: "Product not found" });

    const publicId = getPublicId(imagePath);
    await cloudinary.uploader.destroy(publicId);

    product.images = product.images.filter((img) => img !== imagePath);
    await product.save();

    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ===========================
   DELETE PRODUCT
=========================== */
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ _id: req.params.id, vendorId: req.user._id });
    if (!deleted) return res.status(404).json({ success: false, error: "Product not found" });

    if (deleted.images && deleted.images.length > 0) {
      const deletePromises = deleted.images.map(img => {
        const publicId = getPublicId(img);
        return cloudinary.uploader.destroy(publicId);
      });
      await Promise.all(deletePromises);
    }

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ===========================
   GET ALL PRODUCTS
=========================== */
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find().populate({
      path: 'vendorId',
      model: 'user'
    });

    const verifiedProducts = products.filter(p => {
      return p.vendorId && p.vendorId.isVerified === true;
    });

    res.status(200).send({ products: verifiedProducts });
  } catch (error) {
    console.error("Marketplace Fetch Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

/* ===========================
   GET MY PRODUCTS
=========================== */
router.get("/my-products", auth, async (req, res) => {
  const products = await Product.find({ vendorId: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, products });
});

/* ===========================
   GET SINGLE PRODUCT
=========================== */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ success: true, product });
  } catch (err) {
    res.status(404).json({ success: false, error: "Not found" });
  }
});

/* ===========================
   PUBLIC: GET SINGLE PRODUCT (For ProductView Page)
=========================== */
// We use /public/:id to distinguish it from vendor-specific routes
router.get("/public/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({
        path: 'vendorId',
        model:'user',
        select: 'shopName city state isVerified' // Only get what we need for the UI
      });

    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (err) {
    console.error("Public Fetch Error:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;