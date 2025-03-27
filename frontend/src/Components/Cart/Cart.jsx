import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{totalAmount}</h3>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
        {cart.length > 0 && (
            <button className="cart-buy-now-btn">
              Buy Now
            </button>
          )}
      </div>
    </div>
  );
};

export default Cart;
