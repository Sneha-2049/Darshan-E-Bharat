import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
import { useSnackbar } from 'notistack';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    enqueueSnackbar('Logged out!', { variant: 'info' });
    navigate('/');
  };

  const handleQuizNavigation = () => {
    if (location.pathname === "/") {
      scroll.scrollTo(document.getElementById("features").offsetTop - 50, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    } else {
      navigate("/quizcard");
    }
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
          <li>
            <button className='quiz-menu' onClick={handleQuizNavigation}>
              Quiz
            </button>
          </li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          {!token ? (
            <>
              <Link to="/signup">
                <button className="btn signup-btn">Sign Up</button>
              </Link>
              <Link to="/login">
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
