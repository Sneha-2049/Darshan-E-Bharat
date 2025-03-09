import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css';
import { useSnackbar } from 'notistack';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    enqueueSnackbar('Logged out!', { variant: 'info' });
    navigate('/');
  };


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
            className='quiz-scroll'
          >Quiz</ScrollLink></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          {/* <button className="btn signup-btn">Sign Up</button>
          <button className="btn login-btn">Login</button> */}
          {!token ? (
            <>
             <Link to = "/signup">
              <button className="btn signup-btn">Sign Up</button>
             </Link>
              <Link to = "/login">
              <button className="btn login-btn">Login</button>
              </Link>
            </>
          ) : (
            <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
          )}
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