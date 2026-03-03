import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditVendorProfile.css";

const EditVendorProfile = () => {
  const [form, setForm] = useState({
    firstName: "", // ⭐ Added
    lastName: "",  // ⭐ Added
    shopName: "",
    description: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  /* FETCH EXISTING DATA */
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await fetch(
          "http://localhost:8080/api/marketplace/vendor/me",
          { headers: { "x-auth-token": token } }
        );

        const data = await res.json();

        setForm({
          firstName: data.firstName || "", // ⭐ Added
          lastName: data.lastName || "",   // ⭐ Added
          shopName: data.shopName || "",
          description: data.description || "",
          phone: data.phone || "",
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          pincode: data.pincode || ""
        });

      } catch {
        setMsg("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [token]);

  /* HANDLE CHANGE */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* SUBMIT UPDATE */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Updating...");

    try {
      const res = await fetch(
        "http://localhost:8080/api/marketplace/vendor/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token
          },
          body: JSON.stringify(form)
        }
      );

      if (!res.ok) throw new Error();

      // ⭐ VERY IMPORTANT: Update localStorage so Navbar changes immediately
      localStorage.setItem("firstName", form.firstName);
      localStorage.setItem("lastName", form.lastName);

      setMsg("Profile updated successfully ✅");

      // Redirect after 1.5 seconds to show success message
      setTimeout(() => {
        navigate("/vendor-profile");
      }, 1500);

    } catch {
      setMsg("Update failed ❌");
    }
  };

  if (loading) return <div className="edit-loading">Loading...</div>;

  return (
    <div className="edit-container">
      <h1>Edit Vendor Profile</h1>

      <form onSubmit={handleSubmit} className="edit-form">
        
        {/* ⭐ Name Row for better UI */}
        <div className="name-row">
          <div className="input-group">
            <label>First Name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
        </div>

        <label>Shop Name</label>
        <input name="shopName" value={form.shopName} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />

        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} />

        <div className="location-row">
          <div className="input-group">
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>State</label>
            <input name="state" value={form.state} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Pincode</label>
            <input name="pincode" value={form.pincode} onChange={handleChange} />
          </div>
        </div>

        <button type="submit">Save Changes</button>

        {msg && <p className="msg">{msg}</p>}
      </form>
    </div>
  );
};

export default EditVendorProfile;