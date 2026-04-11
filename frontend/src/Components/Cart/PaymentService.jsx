import axios from "axios";

const getHeaders = () => ({
  headers: { "x-auth-token": localStorage.getItem("token") },
});

export const initiateRazorpayPayment = async ({
  amount,
  cartItems,
  useCoins = false,       // ⭐ Default false
  discountedPrice = 0,    // ⭐ Default 0
  onSuccess,
  onFailure,
}) => {
  try {
    // 1. Create order on backend
    const { data } = await axios.post(
      "http://localhost:8080/api/payment/create-order",
      { amount },
      getHeaders()
    );

    if (!data.success) {
      onFailure("Failed to initiate payment.");
      return;
    }

    // 2. Open Razorpay popup
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: "INR",
      name: "Darshan-e-Bharat",
      description: "Tribal Marketplace Purchase",
      order_id: data.order.id,
      handler: async function (response) {
        try {
         // 3. Verify payment on backend
          const verifyRes = await axios.post(
            "http://localhost:8080/api/payment/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              cartItems: cartItems,
              useCoins: useCoins,           // ⭐ Passing flag
              discountedPrice: discountedPrice, // ⭐ Passing discounted price
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
        ondismiss: function () { onFailure("Payment cancelled."); },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment initiation error:", err);
    onFailure("Something went wrong.");
  }
};