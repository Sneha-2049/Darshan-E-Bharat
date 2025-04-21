// import React from 'react';

// const Profile = () => {
//   const firstName = localStorage.getItem('firstName');
//   const lastName = localStorage.getItem('lastName');
//   const email = localStorage.getItem('email');

//   return (
//     <div className="profile-container">
//       <h1>User Profile</h1>
//       <p><strong>First Name:</strong> {firstName}</p>
//       <p><strong>Last Name:</strong> {lastName}</p>
//       <p><strong>Email:</strong> {email}</p>
//       {/* You can add more details or editing options here */}
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import './Profile.css'; 

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Fetch the user details from localStorage
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");

    // Set user details in state
    setUserDetails({
      firstName: firstName || "N/A", // Default value in case it's not available
      lastName: lastName || "N/A",    // Default value
      email: email || "N/A",          // Default value
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    fetch("http://localhost:8080/api/users/me", {
      headers: {
        "x-auth-token": token
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserDetails(data);
      })
      .catch(err => console.error(err));
  }, []);
  

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p><strong>First Name:</strong> {userDetails.firstName}</p>
      <p><strong>Last Name:</strong> {userDetails.lastName}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>

        <div className="quiz-performance">
        <h2>Quiz Performance</h2>
        <p className="total-coins">
          <i className="fas fa-coins coin-icon"></i> {userDetails.coins || 0}
        </p>

        <div className="quiz-list">
          {userDetails.quizResults?.length > 0 ? (
            userDetails.quizResults.map((quiz, idx) => (
              <div className="quiz-card" key={idx}>
                <h3>{quiz.topic}</h3>
                <p>Score: <strong>{quiz.score}</strong></p>
                <p>
                  Coins: <strong>{quiz.coins}</strong> <i className="fas fa-coins coin-icon-sm"></i>
                </p>
                <p>Date: {new Date(quiz.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No quiz attempts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;