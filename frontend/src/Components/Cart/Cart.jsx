import React from "react";
import "./Cart.css";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.productId} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <div className="price-qty-row">
                  <span className="item-price">₹{item.price}</span>
                  <span className="item-qty">x {item.quantity}</span>
                </div>
              </div>
              {/* Button is a direct child of cart-item */}
              <button className="remove-btn" onClick={() => removeFromCart(item.productId)}>
                {item.quantity > 1 ? "Reduce" : "Remove"}
              </button>
            </div>
          ))
        ) : (
          <p className="empty-msg">Your cart is empty.</p>
        )}
      </div>
      <div className="cart-total">
        <h3 className="total-text">Total Amount: <span>₹{totalAmount}</span></h3>
        <div className="cart-actions">
          <button className="cart-buy-now-btn">Buy Now</button>
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;