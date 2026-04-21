const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const auth = require("../middleware/auth");
const User = require("../models/user").User;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ============================
// CREATE ORDER (COMMON)
// ============================
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

// ============================
// VERIFY PAYMENT (MARKETPLACE - UNCHANGED)
// ============================
router.post("/verify", auth, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cartItems,
      useCoins,
      discountedPrice,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Verification failed",
      });
    }

    const items = Array.isArray(cartItems) ? cartItems : [];

    if (items.length > 0) {
      const productsToSave = items.map((item) => ({
        productId: item.id || item.productId || null,
        title: item.title || item.name || "Unknown",
        image: item.image || "",
        price: useCoins
          ? discountedPrice / items.length
          : item.price,
        quantity: item.quantity || 1,
        paymentId: razorpay_payment_id,
        purchasedAt: new Date(),
      }));

      let updateData = {
        $push: { purchasedProducts: { $each: productsToSave } },
      };

      if (useCoins) {
        updateData.$set = { coins: 0 };
      }

      await User.findByIdAndUpdate(req.user._id, updateData);
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ============================
// VERIFY COURSE PAYMENT (UPDATED)
// ============================
router.post("/verify-course", auth, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseId,
      coinsUsed,
      amountPaid, // NEW from frontend
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // FREE CASE HANDLE
    const isFree = razorpay_payment_id === "FREE";

    if (!isFree && expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Verification failed",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ============================
    // DETERMINE PAYMENT METHOD
    // ============================
    let paymentMethod = "card";

    if (isFree) {
      paymentMethod = "free";
    } else if (coinsUsed > 0 && amountPaid === 0) {
      paymentMethod = "coins";
    } else if (coinsUsed > 0) {
      paymentMethod = "card"; // mix case
    }

    // ============================
    // SAVE COURSE
    // ============================
    const courseData = {
      course: courseId,
      enrolledAt: new Date(),
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      amountPaid: amountPaid || 0,
      paymentMethod: paymentMethod,
      paymentId: isFree ? "FREE" : razorpay_payment_id,
      isActive: true,
    };

    let updateData = {
      $push: { purchasedCourses: courseData },
    };

    // ============================
    // COINS DEDUCTION
    // ============================
    if (coinsUsed && coinsUsed > 0) {
      updateData.$inc = { coins: -coinsUsed };
    }

    await User.findByIdAndUpdate(req.user._id, updateData);

    res.status(200).json({
      success: true,
      message: "Course payment verified & enrolled",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;