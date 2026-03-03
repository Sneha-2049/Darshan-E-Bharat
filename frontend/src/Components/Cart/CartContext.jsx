import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  const getHeaders = () => {
    const latestToken = localStorage.getItem("token");
    return {
      headers: { "x-auth-token": latestToken },
    };
  };

  const fetchCart = async () => {
    if (!localStorage.getItem("token")) {
      setCart([]);
      return;
    }
    try {
      const res = await axios.get("http://localhost:8080/api/cart", getHeaders());
      
      // ⭐ DATA CONSISTENCY CHECK
      // Filters out items that have been deleted or have corrupted paths
      const validCart = res.data.filter(item => 
        item.title && 
        item.image && 
        !item.image.includes("undefined")
      );

      setCart(validCart);
    } catch (err) { 
      console.error("Fetch cart error", err);
      setCart([]);
    }
  };

  useEffect(() => { fetchCart(); }, [token]);

  const addToCart = async (product) => {
    try {
      const res = await axios.post("http://localhost:8080/api/cart/add", { product }, getHeaders());
      setCart(res.data);
    } catch (err) { console.error("Add error", err); }
  };

  const removeFromCart = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/cart/remove/${id}`, getHeaders());
      setCart(res.data);
    } catch (err) { console.error("Remove error", err); }
  };

  const clearCart = async () => {
    try {
      const res = await axios.delete("http://localhost:8080/api/cart/clear", getHeaders());
      setCart(res.data);
    } catch (err) { console.error("Clear error", err); }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};