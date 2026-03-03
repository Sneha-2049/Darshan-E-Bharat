// import React, { useEffect, useState } from "react";
// import "./VendorProfile.css";
// import { Link } from "react-router-dom";

// const VendorProfile = () => {
//   const [vendor, setVendor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("token");

//   const fetchVendor = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:8080/api/marketplace/vendor/me",
//         {
//           headers: { "x-auth-token": token }
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Unauthorized or vendor not found");
//       }

//       const data = await res.json();
//       setVendor(data);

//     } catch (err) {
//       console.error(err);
//       setError("Failed to load vendor profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVendor();
//   }, []);

//   if (loading)
//     return <div className="status-msg">Loading vendor profile...</div>;

//   if (error)
//     return <div className="status-msg error">{error}</div>;

//   if (!vendor)
//     return <div className="status-msg">Vendor not found</div>;

//   return (
//     <div className="vendor-container">

//       {/* HEADER */}
//       <h1 className="vendor-title">Vendor Dashboard</h1>

//       {/* SHOP CARD */}
//       <div className="vendor-card">

//         <div className="shop-name">
//           {vendor.shopName || "No shop name added"}
//         </div>

//         <p className="vendor-desc">
//           {vendor.description || "No description added"}
//         </p>

//         <div className="contact-title">Contact Info</div>

//         <p className="contact-info">
//           📞 {vendor.phone || "Not provided"}
//         </p>

//         <p className="contact-info">
//           📍 {vendor.address || "No address"}
//         </p>

//         <p className="contact-info">
//           {vendor.city || "-"}, {vendor.state || "-"} - {vendor.pincode || "-"}
//         </p>

//       </div>

//       {/* ✅ EDIT BUTTON */}
//       <Link to="/vendor/edit">
//         <button className="edit-btn">Edit Profile</button>
//       </Link>

//       {/* PRODUCTS */}
//       <div className="product-section-title">Your Products</div>

//       {vendor.products?.length === 0 ? (
//         <div className="no-products">
//           No products added yet
//         </div>
//       ) : (
//         <div className="products-grid">

//           {vendor.products.map((p) => (
//             <div className="product-card" key={p._id}>

//               {p.images?.length > 0 ? (
//                 <img
//                   src={`http://localhost:8080/${p.images[0]}`}
//                   alt="product"
//                   className="product-img"
//                 />
//               ) : (
//                 <div className="no-image">No Image</div>
//               )}

//               <div className="product-title">{p.title}</div>

//               <div className="product-price">₹{p.price}</div>

//               {p.stock !== undefined && (
//                 <div className="product-stock">
//                   Stock: {p.stock}
//                 </div>
//               )}

//             </div>
//           ))}

//         </div>
//       )}
//     </div>
//   );
// };

// export default VendorProfile;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VendorProfile.css";
import axios from "axios";
import ProductManager from "./ProductManager"; // NEW import

const VendorProfile = () => {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchVendor = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/marketplace/vendor/me", {
        headers: { "x-auth-token": token },
      });
      setVendor(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load vendor profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendor();
  }, []);

  if (loading) return <div className="status-msg">Loading vendor profile...</div>;
  if (error) return <div className="status-msg error">{error}</div>;
  if (!vendor) return <div className="status-msg">Vendor not found</div>;

  return (
    <div className="vendor-container">
      <h1 className="vendor-title">Vendor Dashboard</h1>

      {/* Vendor Info Card */}
      <div className="vendor-card">
        <div className="card-header">
          <div className="shop-name">{vendor.shopName || "No shop name"}</div>
          <Link to="/vendor/edit">
            <button className="edit-btn-inline">Edit Profile</button>
          </Link>
        </div>

        <p className="vendor-desc">{vendor.description || "No description"}</p>

        <div className="contact-title">Contact Info</div>
        <p className="contact-info">📞 {vendor.phone || "-"}</p>
        <p className="contact-info">📍 {vendor.address || "-"}</p>
        <p className="contact-info">
          {vendor.city || "-"}, {vendor.state || "-"} - {vendor.pincode || "-"}
        </p>
      </div>

      {/* Product Manager Component */}
      <ProductManager token={token} />
    </div>
  );
};

export default VendorProfile;