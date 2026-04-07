import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import axios from "axios";
import "./Marketplace.css";

const Marketplace = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const { addToCart } = useCart();

  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products/all");

      // ⭐ Backend data ko UI format mein convert kar rahe hain
      const formatted = res.data.products.map((p) => ({
        id: p._id,
        name: p.title,
        description: p.description,
        price: p.price,
        stock: Number(p.stock) || 0,
        // Cloudinary URL use ho raha hai
        image: p.images?.length ? p.images[0] : "/assets/no-image.png",
        // ⭐ detailsUrl yahan map hona zaroori hai
        detailsUrl: p.detailsUrl || null,
      }));

      setDbProducts(formatted);
    } catch (err) {
      console.error("Failed to load marketplace products", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      addToCart(item);
      // Optional: alert ya notification de sakte hain
    }
  };

  const handleBuyNow = (item) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      // Direct checkout ya cart mein add karke redirect
      addToCart(item);
      navigate("/cart");
    }
  };

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h2 className="marketplace-title">Tribal Marketplace</h2>
        {isLoggedIn && (
          <div className="go-to-cart">
            <Link to="/cart">
              <button className="view-cart-btn">Go to Cart</button>
            </Link>
          </div>
        )}
      </div>

      <div className="items-container">
        {loading ? (
          <p className="loading-msg">Fetching items from the cloud...</p>
        ) : dbProducts.length > 0 ? (
          dbProducts.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">₹{item.price}</p>

                {/* Stock Badge */}
                <div className="stock-badge">
                  {item.stock === 0 ? (
                    <span className="out">Out of Stock</span>
                  ) : item.stock < 5 ? (
                    <span className="few">Few Left</span>
                  ) : (
                    <span className="in">In Stock</span>
                  )}
                </div>

                {item.stock > 0 && (
                  <div className="action-btns">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>

                    {/* ⭐ Buy Now Button Wapas Add Kiya */}
                    <button
                      className="buy-now-btn"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                )}

                {/* ⭐ Know More link agar DB mein URL hai toh dikhega */}
                {item.detailsUrl && (
                  <div className="view-details">
                    <a
                      href={item.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-details-link"
                    >
                      Know more
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="empty-msg">No products available in the database yet.</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;