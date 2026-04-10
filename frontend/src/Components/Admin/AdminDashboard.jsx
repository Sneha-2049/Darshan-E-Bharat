import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FaUserCheck, FaStore, FaHourglassHalf, FaCheckCircle, FaTrashAlt, FaCalendarAlt, FaEye } from "react-icons/fa";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetchPendingVendors();
  }, []);

  const fetchPendingVendors = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/users/admin/pending-vendors");
      setVendors(res.data.vendors || []);
      setLoading(false);
    } catch (err) {
      enqueueSnackbar("Error loading dashboard", { variant: "error" });
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/users/admin/verify-vendor/${id}`);
      enqueueSnackbar("Approved Successfully!", { variant: "success" });
      fetchPendingVendors(); 
    } catch (err) {
      enqueueSnackbar("Approval failed", { variant: "error" });
    }
  };

  const handleReject = async (id) => {
    if (window.confirm("Are you sure you want to reject this request?")) {
        try {
            // ⭐ URL check karein: backend port 8080 hai na?
            const url = `http://localhost:8080/api/users/admin/reject-vendor/${id}`;
            
            // Method PUT use karein kyunki hum user delete nahi, update kar rahe hain
            await axios.put(url);
            
            enqueueSnackbar("Request Rejected!", { variant: "warning" });
            fetchPendingVendors(); // List refresh karne ke liye
        } catch (err) {
            console.error("Reject Error:", err);
            // Notistack fix taaki snackbar crash na ho
            const msg = err.response?.data?.message || "Failed to reject vendor";
            enqueueSnackbar(msg, { variant: "error" });
        }
    }
};

  if (loading) return <div className="admin-loader-container"><div className="spinner"></div></div>;

  return (
    <div className="admin-dashboard-wrapper">
      <header className="admin-dashboard-header">
        <div className="header-text">
          <h1>Admin Management</h1>
          <p>Verify vendors/teachers to maintain marketplace integrity.</p>
        </div>
        <div className="header-date">
          <FaCalendarAlt /> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card pending">
          <div className="stat-icon"><FaHourglassHalf /></div>
          <div className="stat-info">
            <h3>{vendors.length}</h3>
            <p>Pending Requests</p>
          </div>
        </div>
      </div>

      <div className="admin-table-section">
        <div className="table-header"><h2><FaUserCheck /> Onboarding Requests</h2></div>
        <div className="admin-table-responsive">
          <table className="modern-admin-table">
            <thead>
              <tr>
                <th>User Details</th>
                <th>Shop/Expertise</th>
                <th>Identity Proof</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.length > 0 ? vendors.map((v) => (
                <tr key={v._id}>
                  <td>
                    <div className="vendor-name-cell">
                      <div className="avatar-circle">{v.firstName.charAt(0)}</div>
                      <div>
                        <div className="full-name">{v.firstName} {v.lastName}</div>
                        <div className="sub-text">Role: {v.role}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="shop-pill">{v.shopName || v.expertise || "N/A"}</span></td>
                  <td>
                    {v.documentUrl ? (
                      <a href={v.documentUrl} target="_blank" rel="noopener noreferrer" className="view-doc-btn"><FaEye /> View</a>
                    ) : <span className="no-doc-tag">No Doc</span>}
                  </td>
                  <td>
                    <div className="action-btn-group">
                      <button className="btn-approve" onClick={() => handleApprove(v._id)}><FaCheckCircle /> Approve</button>
                      <button className="btn-reject" onClick={() => handleReject(v._id)}><FaTrashAlt /> Reject</button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="4" className="admin-empty-state">No pending requests! ✅</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;