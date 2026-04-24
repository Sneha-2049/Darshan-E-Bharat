import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isEditing, setIsEditing] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    coins: 0,
    quizResults: [],
    purchasedCourses: [],
    purchasedProducts: [],
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");

    setUserDetails((prev) => ({
      ...prev,
      firstName: localStorage.getItem("firstName") || "N/A",
      lastName: localStorage.getItem("lastName") || "N/A",
      email: localStorage.getItem("email") || "N/A",
    }));

    fetch("http://localhost:8080/api/users/me", {
      headers: { "x-auth-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
        setFormData({ firstName: data.firstName, lastName: data.lastName });
      })
      .catch((err) => console.error(err));
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:8080/api/users/update", formData, {
        headers: { "x-auth-token": token },
      });
      setUserDetails({ ...userDetails, ...formData });
      localStorage.setItem("firstName", formData.firstName);
      localStorage.setItem("lastName", formData.lastName);
      enqueueSnackbar("Profile updated successfully!", { variant: "success" });
      setIsEditing(false);
    } catch (error) {
      enqueueSnackbar("Failed to update profile", { variant: "error" });
    }
  };

  const totalCoins = userDetails.quizResults?.reduce(
    (sum, quiz) => sum + (quiz.coins || 0),
    0
  );

  return (
    <div className="profile-dashboard">
      {/* HEADER */}
      <div className="profile-header-section">
        <h1>User Dashboard</h1>
        <button className="cart-btn-top" onClick={() => navigate("/cart")}>
          🛒 View My Cart
        </button>
      </div>
    <div className="wallet-coin-content">
    <span className="wallet-coin-label">My Wallet Coins </span>
    <span className="wallet-coin-value">
      <i className="fas fa-coins"></i> {userDetails.coins || 0}
    </span>
  </div>


      {/* PROFILE CARD */}
      <div className="profile-card">
        {!isEditing ? (
          <div className="view-container">
            <div className="details-list">
              <p><strong>First Name:</strong> {userDetails.firstName}</p>
              <p><strong>Last Name:</strong> {userDetails.lastName}</p>
              <p><strong>Email:</strong> {userDetails.email}</p>
            </div>
            
            <div className="action-right">
              <button
                className="edit-action-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="edit-form-container">
            <div className="input-vertical">
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-button-row">
              <button type="submit" className="save-btn">
                Save Changes
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* COURSES */}
      <div className="profile-card">
        <h2>My Enrolled Courses</h2>
        <div className="inventory-table">
          <div className="table-header course-cols">
            <span>Course Name</span>
            <span>Date</span>
            <span>Expiry</span>
            <span>Status</span>
            <span>Payment ID</span> {/* Added */}
            <span>Action</span>
          </div>

          {userDetails.purchasedCourses?.length > 0 ? (
            userDetails.purchasedCourses.map((item, idx) => {
              const isExpired = new Date() > new Date(item.expiryDate);
              const isDeleted = !item.course;

              return (
                <div className="table-row course-cols" key={idx}>
                  
                  <span className="topic-name">
                    {isDeleted ? "Course Removed" : item.course?.courseName}
                  </span>

                  <span>{new Date(item.enrolledAt).toLocaleDateString()}</span>
                  <span>{new Date(item.expiryDate).toLocaleDateString()}</span>

                  <span
                    className={`profile-status ${
                      !isExpired && item.isActive && !isDeleted
                        ? "active"
                        : "expired"
                    }`}
                  >
                    {!isExpired && item.isActive && !isDeleted
                      ? "Active"
                      : "Expired"}
                  </span>

                  {/* Payment ID */}
                  <span className="table-payment-id">
                    {item.paymentId || "N/A"}
                  </span>

                  <button
                    className="table-view-btn"
                    onClick={() => navigate(`/course/${item.course?._id}`)}
                    disabled={isExpired || isDeleted}
                    style={{
                      opacity: isExpired || isDeleted ? 0.5 : 1,
                    }}
                  >
                    View
                  </button>
                </div>
              );
            })
          ) : (
            <p className="no-data-msg">No enrolled courses yet.</p>
          )}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="profile-card">
        <h2>Purchase History (Products)</h2>
        <div className="inventory-table">
          <div className="table-header product-cols">
            <span>Product</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Date</span>
            <span>Payment ID</span>
          </div>
          {userDetails.purchasedProducts?.length > 0 ? (
            userDetails.purchasedProducts.map((item, idx) => (
              <div className="table-row product-cols" key={idx}>
                <div className="product-cell-info">
                  <img src={item.image} alt="thumb" className="table-thumb" />
                  <span className="topic-name">{item.title}</span>
                </div>
                <span className="price-text">₹{item.price}</span>
                <span>{item.quantity}</span>
                <span>{new Date(item.purchasedAt).toLocaleDateString()}</span>
                <span className="table-payment-id">{item.paymentId}</span>
              </div>
            ))
          ) : (
            <p className="no-data-msg">No purchased products yet.</p>
          )}
        </div>
      </div>

      {/* QUIZ */}
      <div className="profile-card">
        <div className="section-header">
          <h2>My Quiz History</h2>
        </div>

        <div className="inventory-table">
          <div className="table-header quiz-cols">
            <span>Topic</span>
            <span>Score</span>
            <span>Coins</span>
            <span>Date</span>
          </div>
          {userDetails.quizResults?.length > 0 ? (
            userDetails.quizResults.map((quiz, idx) => (
              <div className="table-row quiz-cols" key={idx}>
                <span className="topic-name">{quiz.topic}</span>
                <span>{quiz.score}</span>
                <span className="coin-earned">
                  <i className="fas fa-coins coin-icon-sm"></i> {quiz.coins}
                </span>
                <span>{new Date(quiz.date).toLocaleDateString()}</span>
              </div>
            ))
          ) : (
            <p className="no-data-msg">No quiz history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;