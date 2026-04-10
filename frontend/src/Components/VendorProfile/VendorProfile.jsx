import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VendorProfile.css";
import axios from "axios";
import ProductManager from "./ProductManager";

const VendorProfile = () => {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchVendor = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/marketplace/vendor/me", {
        headers: { "x-auth-token": token },
      });
      setVendor(res.data);
    } catch (err) {
      console.error(err);
      // Agar backend se 404 aaye (delete ho gaya) ya auth fail ho jaye
      if (err.response && err.response.status === 404) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setError("Failed to load vendor profile");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchVendor();
    }
  }, []);

  if (loading) return <div className="status-msg">Loading vendor profile...</div>;
  if (error) return <div className="status-msg error">{error}</div>;
  if (!vendor) return null;

  // ⭐ CASE 1: AGAR REJECT HO GAYA HAI
  if (vendor.isRejected) {
    return (
      <div className="vendor-container">
        <div className="rejected-card">
          <h1>❌ Application Rejected</h1>
          <p>We are sorry, but your vendor application has been rejected by the administrator.</p>
          <p className="reject-note">This usually happens due to unclear documents or incorrect shop details.</p>
          <div className="rejected-actions">
            <button 
  className="reapply-btn" 
  onClick={() => {
    localStorage.removeItem("token"); // Token clear karein
    navigate("/signup"); // Seedha signup page par
  }}
>
  Update Details & Re-apply
</button>
            <Link to="/" className="home-link">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  // ⭐ CASE 2: NORMAL FLOW (PENDING YA VERIFIED)
  return (
    <div className="vendor-container">
      <h1 className="vendor-title">Vendor Dashboard</h1>

      {/* Vendor Info Card */}
      <div className="vendor-card">
        <div className="card-header">
  {/* Shop Name aur Badge ka combo */}
  <div className="shop-identity">
    <h1 className="shop-name">{vendor.shopName || "Tribal Shop"}</h1>
    <span className={`badge-tick ${vendor.isVerified ? "verified" : "pending"}`}>
      {vendor.isVerified ? "✅" : "⏳"}
    </span>
  </div>
  
  <Link to="/vendor/edit">
    <button className="edit-btn-inline">Edit Profile</button>
  </Link>
</div>

        <p className="vendor-desc">{vendor.description || "No description provided."}</p>

        <div className="contact-title">Contact Info</div>
        <div className="contact-grid">
            <p className="contact-info">📞 {vendor.phone || "-"}</p>
            <p className="contact-info">📍 {vendor.address || "-"}</p>
            <p className="contact-info">
            🏢 {vendor.city || "-"}, {vendor.state || "-"} - {vendor.pincode || "-"}
            </p>
        </div>
      </div>

      {/* Security Block: Only show ProductManager if Verified */}
      {!vendor.isVerified ? (
        <div className="verification-notice">
           <div className="notice-icon">⏳</div>
           <h3>Account Under Review</h3>
           <p>Your shop details and documents are currently being verified by our admin team.</p>
           <p>You will be able to add and manage your products as soon as your account is approved.</p>
        </div>
      ) : (
        <ProductManager token={token} />
      )}
    </div>
  );
};

export default VendorProfile;