import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import './Profile.css';

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
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");

    setUserDetails(prev => ({
      ...prev,
      firstName: localStorage.getItem("firstName") || "N/A",
      lastName: localStorage.getItem("lastName") || "N/A",
      email: localStorage.getItem("email") || "N/A",
    }));

    fetch("http://localhost:8080/api/users/me", {
      headers: { "x-auth-token": token }
    })
      .then(res => res.json())
      .then(data => {
        setUserDetails(data);
        setFormData({ firstName: data.firstName, lastName: data.lastName });
      })
      .catch(err => console.error(err));
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("token");
        const url = "http://localhost:8080/api/users/update"; 
        await axios.put(url, formData, { headers: { "x-auth-token": token } });
        
        setUserDetails({ ...userDetails, ...formData });
        localStorage.setItem("firstName", formData.firstName);
        localStorage.setItem("lastName", formData.lastName);
        
        enqueueSnackbar("Profile updated successfully!", { variant: "success" });
        setIsEditing(false);
    } catch (error) {
        enqueueSnackbar("Failed to update profile", { variant: "error" });
    }
  };

  return (
    <div className="profile-dashboard">
      <div className="profile-header-section">
        <h1>User Dashboard</h1>
        <button className="cart-btn-top" onClick={() => navigate("/cart")}>
           🛒 View My Cart
        </button>
      </div>

      <div className="profile-card">
        {!isEditing ? (
          <div className="view-container">
            <div className="details-list">
               <p><strong>First Name:</strong> {userDetails.firstName}</p>
               <p><strong>Last Name:</strong> {userDetails.lastName}</p>
               <p><strong>Email:</strong> {userDetails.email}</p>
            </div>
            <div className="action-right">
               <button className="edit-action-btn" onClick={() => setIsEditing(true)}>Edit Details</button>
            </div>
          </div>
        ) : (
          /* --- UPDATE: Modern White/Grey Form --- */
          <form onSubmit={handleUpdate} className="edit-form-container">
            <div className="input-vertical">
                <div className="form-group">
                    <label>First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter Last Name" />
                </div>
            </div>
            {/* --- UPDATE: Buttons in one line --- */}
            <div className="form-button-row">
                <button type="submit" className="save-btn">Save Changes</button>
                <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>

      <div className="dashboard-content">
        <div className="inventory-section">
          <div className="section-header">
            <h2>My Quiz</h2>
            <p className="coin-status">
              Total Coins: <span className="coin-wrapper">
                <i className="fas fa-coins coin-icon"></i> {userDetails.coins || 0}
              </span>
            </p>
          </div>
          
          <div className="inventory-table">
            <div className="table-header">
              <span>Topic</span>
              <span>Score</span>
              <span>Coins</span>
              <span>Date</span>
            </div>
            {userDetails.quizResults?.length > 0 ? (
              userDetails.quizResults.map((quiz, idx) => (
                <div className="table-row" key={idx}>
                  <span className="topic-name">{quiz.topic}</span>
                  <span>{quiz.score}</span>
                  <span className="coin-earned">
                    <i className="fas fa-coins coin-icon-sm"></i> {quiz.coins}
                  </span>
                  <span>{new Date(quiz.date).toLocaleDateString()}</span>
                </div>
              ))
            ) : (
              <p className="no-data">No quiz history available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;