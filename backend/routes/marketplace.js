const router = require("express").Router();
const { User } = require("../models/user");
const Product = require("../models/product");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const fs = require("fs");

/* =========================
   GET MY VENDOR PROFILE
========================= */
router.get("/vendor/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user || user.role !== "vendor")
      return res.status(404).send({ message: "Vendor not found" });

    const products = await Product.find({ vendorId: user._id });

    res.send({
      ...user._doc,
      products
    });

  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});


/* =========================
   UPDATE VENDOR PROFILE
========================= */
router.put("/vendor/update", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user || user.role !== "vendor")
      return res.status(404).send({ message: "Vendor not found" });

    Object.assign(user, req.body);
    await user.save();

    res.send(user);

  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});


/* =========================
   ADD PRODUCT
========================= */
router.post("/product/add", auth, upload.array("images", 5), async (req, res) => {
  try {
    if (req.user.role !== "vendor")
      return res.status(403).send({ message: "Only vendors allowed" });

    if (!req.body.title || !req.body.price)
      return res.status(400).send({ message: "Missing fields" });

    if (req.body.price < 0)
      return res.status(400).send({ message: "Invalid price" });

    const images = req.files ? req.files.map(file => file.path) : [];

    const product = new Product({
      vendorId: req.user._id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      images
    });

    await product.save();
    res.send(product);

  } catch (err) {
    res.status(500).send({ message: "Error adding product" });
  }
});


/* =========================
   GET ALL PRODUCTS (PUBLIC)
========================= */
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({ isAvailable: true })
      .populate("vendorId", "shopName");

    res.send(products);

  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});


/* =========================
   GET SINGLE PRODUCT
========================= */
router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("vendorId", "shopName");

    if (!product)
      return res.status(404).send({ message: "Product not found" });

    res.send(product);

  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});


/* =========================
   EDIT PRODUCT
========================= */
router.put("/product/:id", auth, upload.array("images", 5), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).send({ message: "Product not found" });

    if (product.vendorId.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    if (req.files && req.files.length > 0) {
      product.images.forEach(img => {
        if (fs.existsSync(img)) fs.unlinkSync(img);
      });

      product.images = req.files.map(file => file.path);
    }

    Object.assign(product, req.body);
    await product.save();

    res.send(product);

  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});


/* =========================
   DELETE PRODUCT
========================= */
router.delete("/product/:id", auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).send({ message: "Product not found" });

    if (product.vendorId.toString() !== req.user._id)
      return res.status(403).send({ message: "Unauthorized" });

    product.images.forEach(img => {
      if (fs.existsSync(img)) fs.unlinkSync(img);
    });

    await product.deleteOne();

    res.send({ message: "Deleted successfully" });

  } catch (err) {
    res.status(500).send({ message: "Server error" });
  }
});


module.exports = router;