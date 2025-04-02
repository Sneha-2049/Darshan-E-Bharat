
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Marketplace.css";

const marketplaceItems = [
    {
      id: 1,
      name: "Tribal Necklace",
      description: "Handcrafted necklace from the tribes of Rajasthan.",
      price: 1200,
      image: "/assets/marketplace_imgs/necklace.png",
      detailsUrl: "https://silvermerc.com/en-us/blogs/news/rajasthan-and-its-rich-heritage-of-jewellery-and-its-significance?srsltid=AfmBOooLRg-GfJUKXYHHVUrS_HrkArSNt7nGv8tSBqmm3tVX3sWf97JF",  // Real URL
    },
    {
      id: 2,
      name: "Tribal Wooden Mask",
      description: "Authentic tribal wooden mask from Assam.",
      price: 2000,
      image: "/assets/marketplace_imgs/wood-mask.jpg",
      detailsUrl: "https://en.wikipedia.org/wiki/Mask_Art_of_Assam",  // Real URL
    },
    {
      id: 3,
      name: "Tribal Handwoven Basket",
      description: "Handwoven basket made by local artisans from Odisha.",
      price: 800,
      image: "/assets/marketplace_imgs/basket.jpeg",
      detailsUrl: "https://www.orissatourism.org/odisha-handicrafts/",  // Real URL
    },
    {
      id: 4,
      name: "Tribal Cotton Shawl",
      description: "Traditional handwoven cotton shawl from the Bhil tribe of Madhya Pradesh.",
      price: 1500,
      image: "/assets/marketplace_imgs/shawl.jpg",
      detailsUrl: "https://www.tribesindia.com/product-category/clothing/women/shawls-mufflers/",  // Real URL
    },
    {
      id: 5,
      name: "Tribal Silver Earrings",
      description: "Handcrafted silver earrings from the Garo tribe of Meghalaya.",
      price: 950,
      image: "/assets/marketplace_imgs/earrings2.jpg",
      detailsUrl: "https://theindiantribal.com/2022/09/18/variety-tribes-northeast-india-meghalaya-the-land-of-vibrant-clothes-and-jewellery/",  // Real URL
    },
    {
      id: 6,
      name: "Tribal Wooden Spoon Set",
      description: "Set of wooden spoons crafted by the tribes of Andaman and Nicobar Islands.",
      price: 600,
      image: "/assets/marketplace_imgs/spoons.jpeg",
      detailsUrl: "https://www.mapsofindia.com/andaman-nicobar-islands/culture/art.html",  // Real URL
    },
    {
      id: 7,
      name: "Tribal Bamboo Wall Hanging",
      description: "A beautiful bamboo wall hanging crafted by the tribes of Nagaland.",
      price: 2200,
      image: "/assets/marketplace_imgs/bamboo-wall-hanging.jpg",
      detailsUrl: "https://en.wikipedia.org/wiki/Naga_tribes",  // Real URL
    },
    {
      id: 8,
      name: "Tribal Embroidered Pouch",
      description: "Hand-embroidered pouch from the tribal artisans of Gujarat.",
      price: 500,
      image: "/assets/marketplace_imgs/embroidered-pouch.jpg",
      detailsUrl: "https://gurjari.gujarat.gov.in/craft/embroidery-work",  // Real URL
    },
    {
      id: 9,
      name: "Tribal Painted Pottery",
      description: "Hand-painted pottery made by the Santhal tribe of West Bengal.",
      price: 1300,
      image: "/assets/marketplace_imgs/pottery1.jpg",
      detailsUrl: "https://www.getbengal.com/details/a-tribal-tale-folk-paintings-by-santhals-in-bengal",  // Real URL
    },
    {
      id: 10,
      name: "Tribal Leather Sandals",
      description: "Handmade leather sandals from the Kutch region in Gujarat.",
      price: 1500,
      image: "/assets/marketplace_imgs/sandals2.png",
      detailsUrl: "https://en.wikipedia.org/wiki/Kutch",  // Real URL
    },
    {
      id: 11,
      name: "Tribal Wood Carvings",
      description: "Intricate wood carvings from the tribes of Odisha.",
      price: 3000,
      image: "/assets/marketplace_imgs/wood-carvings.jpg",
      detailsUrl: "https://lunarsecstacy.com/2022/03/17/artistic-glory-of-odishas-wood-sculptors/",  // Real URL
    },
    {
      id: 12,
      name: "Tribal Painted Textile",
      description: "Traditional painted textile from the Warli tribe of Maharashtra.",
      price: 1800,
      image: "/assets/marketplace_imgs/textile.jpg",
      detailsUrl: "https://en.wikipedia.org/wiki/Warli_painting",  // Real URL
    },
];

const Marketplace = ({ cart, addToCart }) => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token'); 

    const handleAddToCart = (item) => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            addToCart(item);
        }
    };

    const handleBuyNow = (item) => {
        if (!isLoggedIn) {
            navigate("/login");
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

                            <button
                                className="buy-now-btn"
                                onClick={() => handleBuyNow(item)}
                            >
                                Buy Now
                            </button>

                            {/* View Details Button */}
                            {item.detailsUrl && (
                                <div className="view-details">
                                    <a href={item.detailsUrl} target="_blank" rel="noopener noreferrer" className="view-details-link">
                                        Know more
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
