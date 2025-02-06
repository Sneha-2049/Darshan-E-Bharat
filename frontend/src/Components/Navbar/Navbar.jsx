import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          Darshan-E-Bharat
        </a>
        <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/quiz">Quiz</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/marketplace">Marketplace</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn signup-btn">Sign Up</button>
          <button className="btn login-btn">Login</button>
        </div>
        <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
