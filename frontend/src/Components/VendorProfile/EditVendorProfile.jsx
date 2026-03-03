import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditVendorProfile.css";

const EditVendorProfile = () => {
  const [form, setForm] = useState({
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
   const navigate = useNavigate(); // <-- initialize navigate

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
  }, []);

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

      setMsg("Profile updated successfully ✅");

      // Redirect to profile page after 1 second
        navigate("/vendor-profile"); // <-- redirect


    } catch {
      setMsg("Update failed ❌");
    }
  };

  if (loading) return <div className="edit-loading">Loading...</div>;

  return (
    <div className="edit-container">

      <h1>Edit Vendor Profile</h1>

      <form onSubmit={handleSubmit} className="edit-form">

        <label>Shop Name</label>
        <input name="shopName" value={form.shopName} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />

        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} />

        <label>City</label>
        <input name="city" value={form.city} onChange={handleChange} />

        <label>State</label>
        <input name="state" value={form.state} onChange={handleChange} />

        <label>Pincode</label>
        <input name="pincode" value={form.pincode} onChange={handleChange} />

        <button type="submit">Save Changes</button>

        {msg && <p className="msg">{msg}</p>}
      </form>
    </div>
  );
};

export default EditVendorProfile;