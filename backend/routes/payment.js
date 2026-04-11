const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const auth = require("../middleware/auth");
const User = require("../models/user").User;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// CREATE ORDER
router.post("/create-order", auth, async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
});

// VERIFY PAYMENT + SAVE PURCHASED PRODUCTS
router.post("/verify", auth, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cartItems,
      useCoins,         // ⭐ Frontend se aayega
      discountedPrice,  // ⭐ Frontend se aayega
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Verification failed" });
    }

    // ✅ cartItems safely handle kiye — undefined/null dono cases
    const items = Array.isArray(cartItems) ? cartItems : [];
    if (items.length > 0) {
      const productsToSave = items.map((item) => ({
        productId: item.id || item.productId || null,
        title: item.title || item.name || "Unknown",
        image: item.image || "",
        // ⭐ Agar coins use hue toh discounted price distribute karo
        price: useCoins ? (discountedPrice / items.length) : item.price,
        quantity: item.quantity || 1,
        paymentId: razorpay_payment_id,
        purchasedAt: new Date(),
      }));

      let updateData = {
        $push: { purchasedProducts: { $each: productsToSave } }
      };

      // ⭐ Agar checkbox tick tha toh coins 0 kar do
      if (useCoins) {
        updateData.$set = { coins: 0 };
      }

      await User.findByIdAndUpdate(req.user._id, updateData);
    }

    res.status(200).json({ success: true, message: "Payment verified successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;