
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Marketplace.css";

const marketplaceItems = [
    {
      id: 1,
      name: "Tribal Necklace",
      description: "Handcrafted necklace from the tribes of Rajasthan.",
      price: 1200,
      image: "/assets/marketplace_imgs/necklace.png",  // Replace with actual image URL
    },
    {
      id: 2,
      name: "Tribal Wooden Mask",
      description: "Authentic tribal wooden mask from Assam.",
      price: 2000,
      image: "/assets/marketplace_imgs/wood-mask.jpg",  // Replace with actual image URL
    },
    {
      id: 3,
      name: "Tribal Handwoven Basket",
      description: "Handwoven basket made by local artisans from Odisha.",
      price: 800,
      image: "/assets/marketplace_imgs/basket.jpeg",  // Replace with actual image URL
    },
    {
      id: 4,
      name: "Tribal Cotton Shawl",
      description: "Traditional handwoven cotton shawl from the Bhil tribe of Madhya Pradesh.",
      price: 1500,
      image: "/assets/marketplace_imgs/shawl.jpg",  // Replace with actual image URL
    },
    {
      id: 5,
      name: "Tribal Silver Earrings",
      description: "Handcrafted silver earrings from the Garo tribe of Meghalaya.",
      price: 950,
      image: "/assets/marketplace_imgs/earrings2.jpg",  // Replace with actual image URL
    },
    {
      id: 6,
      name: "Tribal Wooden Spoon Set",
      description: "Set of wooden spoons crafted by the tribes of Andaman and Nicobar Islands.",
      price: 600,
      image: "/assets/marketplace_imgs/spoons.jpeg",  // Replace with actual image URL
    },
    {
      id: 7,
      name: "Tribal Bamboo Wall Hanging",
      description: "A beautiful bamboo wall hanging crafted by the tribes of Nagaland.",
      price: 2200,
      image: "/assets/marketplace_imgs/bamboo-wall-hanging.jpg",  // Replace with actual image URL
    },
    {
      id: 8,
      name: "Tribal Embroidered Pouch",
      description: "Hand-embroidered pouch from the tribal artisans of Gujarat.",
      price: 500,
      image: "/assets/marketplace_imgs/embroidered-pouch.jpg",  // Replace with actual image URL
    },
    {
      id: 9,
      name: "Tribal Painted Pottery",
      description: "Hand-painted pottery made by the Santhal tribe of West Bengal.",
      price: 1300,
      image: "/assets/marketplace_imgs/pottery1.jpg",  // Replace with actual image URL
    },
    {
      id: 10,
      name: "Tribal Leather Sandals",
      description: "Handmade leather sandals from the Kutch region in Gujarat.",
      price: 1500,
      image: "/assets/marketplace_imgs/sandals2.png",  // Replace with actual image URL
    },
    {
      id: 11,
      name: "Tribal Wood Carvings",
      description: "Intricate wood carvings from the tribes of Odisha.",
      price: 3000,
      image: "/assets/marketplace_imgs/wood-carvings.jpg",  // Replace with actual image URL
    },
    {
      id: 12,
      name: "Tribal Painted Textile",
      description: "Traditional painted textile from the Warli tribe of Maharashtra.",
      price: 1800,
      image: "/assets/marketplace_imgs/textile.jpg",  // Replace with actual image URL
    },
  ];

const Marketplace = ({ cart, addToCart }) => {

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token'); 

    
  
    const handleAddToCart = (item) => {
      if (!isLoggedIn) {
        // If not logged in, navigate to login page
        navigate("/login");
      } else {
        // If logged in, add item to cart
        addToCart(item);
      }
    };

    const handleBuyNow = (item) => {
        if (!isLoggedIn) {
          // Redirect user to login page if not logged in
          navigate("/login");
        } 
      };

  return (
    
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h2 className="marketplace-title">Tribal Marketplace</h2>
        {/* Conditionally render the "Go to Cart" button based on login status */}
      {isLoggedIn && (
        <div className="go-to-cart">
          <Link to="/cart">
            <button className="view-cart-btn">Go to Cart</button>
          </Link>
        </div>
      )}

      </div>
      <div className="items-container">
        {marketplaceItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-price">₹{item.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>

              <button className="buy-now-btn"
                onClick={() => handleBuyNow(item)}
              >
                  Buy Now
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
