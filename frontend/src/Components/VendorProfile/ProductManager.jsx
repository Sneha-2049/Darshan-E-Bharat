import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./VendorProfile.css";

const ProductManager = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  
  // ⭐ State for Custom Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(null); 

  const [formData, setFormData] = useState({ 
    title: "", price: "", category: "", stock: 0, description: "", detailsUrl: "", images: [] 
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products/my-products", {
        headers: { "x-auth-token": token },
      });
      setProducts(res.data.products);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === "images") formData.images.forEach((img) => data.append("images", img));
      else data.append(key, formData[key]);
    }
    try {
      const res = await axios.post("http://localhost:8080/api/products/add", data, {
        headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
      });
      setProducts([res.data.product, ...products]);
      setFormData({ title: "", price: "", category: "", stock: 0, description: "", detailsUrl: "", images: [] });
      setImagePreviews([]);
      setShowAddForm(false);
    } catch (err) { alert("Failed to add product"); }
  };

  // ⭐ Logic to perform the actual deletion
  const confirmDelete = async () => {
    const id = showDeleteModal;
    try {
      await axios.delete(`http://localhost:8080/api/products/delete/${id}`, { 
        headers: { "x-auth-token": token } 
      });
      setProducts(products.filter((p) => p._id !== id));
      setShowDeleteModal(null);
    } catch (err) { 
      alert("Delete failed"); 
      setShowDeleteModal(null);
    }
  };

  if (loading) return <div className="status-msg">Loading...</div>;

  return (
    <div className="vendor-container">
      <div className="inventory-header">
        <h2 className="product-section-title">Your Inventory</h2>
        <button 
          className={`edit-btn-inline ${showAddForm ? "cancel-mode" : ""}`} 
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Cancel" : "Add New Product"}
        </button>
      </div>

      {showAddForm && (
        <div className="form-animation-wrapper">
          <form className="edit-form" onSubmit={handleAddProduct}>
            {/* ... Form inputs same as before ... */}
            <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
            <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
            <div className="form-preview-row">
                {imagePreviews.map((src, i) => <img key={i} src={src} alt="preview" className="form-preview-img" />)}
            </div>
            <button type="submit">Publish Product</button>
          </form>
        </div>
      )}

      {/* ⭐ CUSTOM DELETE MODAL JSX */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to remove this product? This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="cancel-modal-btn" onClick={() => setShowDeleteModal(null)}>Cancel</button>
              <button className="confirm-modal-btn" onClick={confirmDelete}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard 
            key={p._id} 
            product={p} 
            onDelete={(id) => setShowDeleteModal(id)} // Open modal instead of deleting
          />
        ))}
      </div>
    </div>
  );
};

export default ProductManager;