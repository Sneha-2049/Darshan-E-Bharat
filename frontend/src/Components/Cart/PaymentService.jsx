import axios from "axios";

const getHeaders = () => ({
  headers: { "x-auth-token": localStorage.getItem("token") },
});

// ==============================
// EXISTING (MARKETPLACE) - UNCHANGED
// ==============================
export const initiateRazorpayPayment = async ({
  amount,
  cartItems,
  useCoins = false,
  discountedPrice = 0,
  onSuccess,
  onFailure,
}) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/payment/create-order",
      { amount },
      getHeaders()
    );

    if (!data.success) {
      onFailure("Failed to initiate payment.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: "INR",
      name: "Darshan-e-Bharat",
      description: "Tribal Marketplace Purchase",
      order_id: data.order.id,
      handler: async function (response) {
        try {
          const verifyRes = await axios.post(
            "http://localhost:8080/api/payment/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              cartItems: cartItems,
              useCoins: useCoins,
              discountedPrice: discountedPrice,
            },
            getHeaders()
          );

          if (verifyRes.data.success) {
            onSuccess(response.razorpay_payment_id);
          } else {
            onFailure("Payment verification failed.");
          }
        } catch (err) {
          onFailure("Verification error.");
        }
      },
      prefill: {
        name: localStorage.getItem("userName") || "",
        email: localStorage.getItem("userEmail") || "",
      },
      theme: { color: "#27ae60" },
      modal: {
        ondismiss: function () {
          onFailure("Payment cancelled.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment initiation error:", err);
    onFailure("Something went wrong.");
  }
};

// ==============================
// ✅ COURSE PAYMENT FUNCTION (UPDATED)
// ==============================
export const initiateCoursePayment = async ({
  amount,
  courseId,
  coinsUsed = 0,
  onSuccess,
  onFailure,
}) => {
  try {
    // 1. Create order
    const { data } = await axios.post(
      "http://localhost:8080/api/payment/create-order",
      { amount },
      getHeaders()
    );

    if (!data.success) {
      onFailure("Failed to initiate payment.");
      return;
    }

    // 2. Razorpay popup
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: "INR",
      name: "Darshan-e-Bharat",
      description: "Course Enrollment Payment",
      order_id: data.order.id,

      handler: async function (response) {
        try {
          // 3. Verify COURSE payment
          const verifyRes = await axios.post(
            "http://localhost:8080/api/payment/verify-course",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              courseId: courseId,
              coinsUsed: coinsUsed,

              // ✅ IMPORTANT ADDITION
              amountPaid: amount,
            },
            getHeaders()
          );

          if (verifyRes.data.success) {
            onSuccess(response.razorpay_payment_id);
          } else {
            onFailure("Payment verification failed.");
          }
        } catch (err) {
          onFailure("Verification error.");
        }
      },

      prefill: {
        name: localStorage.getItem("userName") || "",
        email: localStorage.getItem("userEmail") || "",
      },

      theme: { color: "#27ae60" },

      modal: {
        ondismiss: function () {
          onFailure("Payment cancelled.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Course payment error:", err);
    onFailure("Something went wrong.");
  }
};