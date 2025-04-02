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

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p><strong>First Name:</strong> {userDetails.firstName}</p>
      <p><strong>Last Name:</strong> {userDetails.lastName}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
    </div>
  );
};

export default Profile;

