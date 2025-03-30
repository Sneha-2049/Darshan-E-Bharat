// src/components/Footer.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // For routing (assuming you are using react-router)
// import './Footer.css';


// const Footer = ({ isLoggedIn, onLogout }) => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-links">
//         <h4 className="footer-title">Quick Links</h4>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/quiz">Quiz</Link></li>
//             <li><Link to="/courses">Courses</Link></li>
//             <li><Link to="/marketplace">Marketplace</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>
//         <div className="footer-social-media">
//         <h4 className="footer-title">Follow Us</h4>
//           <ul>
//             <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
//             <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
//             <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
//             <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//           </ul>
//         </div>
//         <div className="footer-auth">
//         <h4 className="footer-title">Account</h4>
//           {isLoggedIn ? (
//             <button className="footer-logout-btn" onClick={onLogout}>Logout</button>
//           ) : (
//             <>
//               <Link to="/login" className="footer-auth-btn">Login</Link>
//               <Link to="/signup" className="footer-auth-btn">Signup</Link>
//             </>
//           )}
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2025 Darshan-E-Bharat. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // For routing
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social-media">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Darshan-E-Bharat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

