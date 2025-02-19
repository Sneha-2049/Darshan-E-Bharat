import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Darshan-E-Bharat
        </Link>
        <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><ScrollLink
            to="/quiz"
            smooth="easeInOutQuad" // Smooth animation
            duration={800} // Adjust duration for better control
            offset={-50} // Adjust offset if header is fixed
            spy={true} // Active class when in view
            activeClass="active"
          >Quiz</ScrollLink></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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