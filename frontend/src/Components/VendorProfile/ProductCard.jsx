import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      {/* Direct Cloudinary Link */}
      {product.images?.length > 0 ? (
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="product-img" 
        />
      ) : (
        <div className="no-image">No Image</div>
      )}

      <div className="product-title">{product.title}</div>
      <div className="product-description">
        {product.description || "No description provided"}
      </div>

      <div className="product-price-stock">
        <span className="product-price">₹{product.price}</span>
        <span className="product-stock">Stock: {product.stock}</span>
      </div>

      <div className="product-card-actions">
        <button className="card-btn delete-btn" onClick={() => onDelete(product._id)}>Delete</button>
        <Link to={`/product/${product._id}`} className="card-btn view-btn">View & Edit</Link>
      </div>
    </div>
  );
};

export default ProductCard;