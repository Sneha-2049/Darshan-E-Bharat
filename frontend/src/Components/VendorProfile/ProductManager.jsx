import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./VendorProfile.css";

const ProductManager = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  // Initial state updated as per new Schema
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    originState: "",
    tribeName: "",
    materialUsed: "",
    heritageHistory: "",
    // Optional Specifications
    authenticity: "",
    artisanName: "",
    dimensions: "",
    weight: "",
    careInstructions: "",
    images: []
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products/my-products", {
        headers: { "x-auth-token": token },
      });
      setProducts(res.data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
      if (key === "images") {
        formData.images.forEach((img) => data.append("images", img));
      } else {
        data.append(key, formData[key]);
      }
    }
    try {
      const res = await axios.post("http://localhost:8080/api/products/add", data, {
        headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
      });
      setProducts([res.data.product, ...products]);
      
      // Reset form to original state
      setFormData({
        title: "", price: "", category: "", stock: "", description: "",
        originState: "", tribeName: "", materialUsed: "", heritageHistory: "",
        authenticity: "", artisanName: "", dimensions: "", weight: "", careInstructions: "",
        images: []
      });
      setImagePreviews([]);
      setShowAddForm(false);
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to add product";
      alert(errorMsg);
    }
  };

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
            {/* Basic Info */}
            <input type="text" placeholder="Product Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />

            <div className="form-row">
              <input type="number" placeholder="Price (₹)" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
              <input type="number" placeholder="Stock Quantity" min="0" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} required />
            </div>

            <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />

            {/* Heritage Data */}
            <div className="form-section-divider">Heritage Information</div>
            <div className="form-row">
              <input type="text" placeholder="Origin State (e.g. Bihar)" value={formData.originState} onChange={(e) => setFormData({ ...formData, originState: e.target.value })} required />
              <input type="text" placeholder="Tribe Name (e.g. Madhubani)" value={formData.tribeName} onChange={(e) => setFormData({ ...formData, tribeName: e.target.value })} required />
            </div>
            <input type="text" placeholder="Material Used" value={formData.materialUsed} onChange={(e) => setFormData({ ...formData, materialUsed: e.target.value })} required />
            <textarea placeholder="The Cultural History/Story or Heritage & Significance: Why buy this? Is there a spiritual/astrology benefit? How does it help the community?" value={formData.heritageHistory} onChange={(e) => setFormData({ ...formData, heritageHistory: e.target.value })} rows="3" required />

            {/* Specifications */}
            <div className="form-section-divider">Specifications (Optional)</div>
            <div className="form-row">
              <select value={formData.authenticity} onChange={(e) => setFormData({ ...formData, authenticity: e.target.value })}>
                <option value="">Select Authenticity</option>
                <option value="GI Tagged">GI Tagged</option>
                <option value="Handmade">100% Handmade</option>
                <option value="Tribal Cooperative">Tribal Cooperative</option>
              </select>
              <input type="text" placeholder="Artisan Name" value={formData.artisanName} onChange={(e) => setFormData({ ...formData, artisanName: e.target.value })} />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Dimensions" value={formData.dimensions} onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })} />
              <input type="text" placeholder="Weight" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
            </div>
            <input type="text" placeholder="Care Instructions" value={formData.careInstructions} onChange={(e) => setFormData({ ...formData, careInstructions: e.target.value })} />

            <textarea placeholder="General Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

            <div className="file-input-group">
              <label>Upload Product Images:</label>
              <input type="file" multiple accept="image/*" onChange={handleImageChange} />
            </div>

            <div className="form-preview-row">
              {imagePreviews.map((src, i) => <img key={i} src={src} alt="preview" className="form-preview-img" />)}
            </div>

            <button type="submit" className="publish-btn">Publish Product</button>
          </form>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to remove this product?</p>
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
            onDelete={(id) => setShowDeleteModal(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductManager;