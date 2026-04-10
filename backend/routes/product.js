const router = require("express").Router();
const Product = require("../models/product");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload"); // Uses Cloudinary storage

const cloudinary = require('cloudinary').v2;

// Helper function: URL se Public ID nikalne ke liye
const getPublicId = (url) => {
  const parts = url.split('/');
  const fileName = parts[parts.length - 1].split('.')[0]; // e.g., "image123"
  return `darshan-e-bharat/products/${fileName}`;
};

// ADD PRODUCT
router.post("/add", auth, upload.array("images", 5), async (req, res) => {
  try {
    const productData = {
      ...req.body,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      vendorId: req.user._id,
      // ⭐ Cloudinary returns the full URL in file.path
      images: req.files ? req.files.map((f) => f.path) : [],
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
      const newImages = req.files.map((f) => f.path);
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

    // ⭐ Cloudinary se delete karein
    const publicId = getPublicId(imagePath);
    await cloudinary.uploader.destroy(publicId);

    // With Cloudinary, we just remove the URL from the DB array
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

    // ⭐ Saari images Cloudinary se delete karein
    if (deleted.images && deleted.images.length > 0) {
      const deletePromises = deleted.images.map(img => {
        const publicId = getPublicId(img);
        return cloudinary.uploader.destroy(publicId);
      });
      await Promise.all(deletePromises);
    }
    
    // No need for fs.unlink as files are not local anymore
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET ROUTES (Same as before)
router.get("/all", async (req, res) => {
    try {
        // ⭐ Yahan humne bataya ki vendorId field ko 'user' model se populate karein
        const products = await Product.find().populate({
            path: 'vendorId',
            model: 'user' // User model ka exact naam jo models/user.js mein hai
        });

        // ⭐ Filter logic update: p.vendorId use karenge p.vendor ki jagah
        const verifiedProducts = products.filter(p => {
            // Check karein ki vendorId exist karta hai aur wo verified hai
            return p.vendorId && p.vendorId.isVerified === true;
        });

        res.status(200).send({ products: verifiedProducts });
    } catch (error) {
        console.error("Marketplace Fetch Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
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