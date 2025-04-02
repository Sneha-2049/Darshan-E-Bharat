import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
import { useSnackbar } from 'notistack';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for toggling profile dropdown
  const [isPanelOpen, setIsPanelOpen] = useState(false); // State for sliding panel
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem('token');
  // const username = 'Demo t'; // Fetch or set the username from user data (or JWT if available)
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const username = firstName && lastName ? `${firstName} ${lastName}` : 'Demo t';


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    enqueueSnackbar('Logged out!', { variant: 'info' });
    navigate('/');
  };

  const handleNavigation = (event) => {
    console.log(event.target.className)
    if (location.pathname === "/") {
      const targetId = event.target.className;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight || 60;
        const extraOffset = 70;
        const yOffset = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;
        scroll.scrollTo(yOffset, {
          duration: 800,
          smooth: "easeInOutQuad",
        });
      }
    }
    else {
      if (event.target.className === 'quiz') {
        navigate("/quizcard");
      }
      if (event.target.className === 'cource') {
        navigate("/courses");
      }
      if (event.target.className === 'marketplace') {
        navigate("/marketplace");
      }
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleSlidingPanel = () => {
    setIsPanelOpen(!isPanelOpen);
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
            <button id='features-button' className='quiz' onClick={handleNavigation}>
              Quiz
            </button>
          </li>
          <li>
            <button id='features-button' className='cource' onClick={handleNavigation}>
              Cources
            </button>
          </li>
          <li>
            <button id='features-button' className='marketplace' onClick={handleNavigation}>
              Marketplace
            </button>
          </li>
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
            <div className="profile-section">
              <button className="profile-btn" onClick={toggleSlidingPanel}>
                {username} <span className="dropdown-arrow">&#9662;</span>
              </button>
              {isProfileOpen && (
                <div className="profile-dropdown">
                  <Link to="/profile" className="profile-link">My Profile</Link>
                  <button onClick={handleLogout} className="profile-link">Logout</button>
                </div>
              )}
            </div>


          )}
        </div>
        <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      
      {/* Sliding Panel */}
      {token && (
        <div className={`profile-panel ${isPanelOpen ? 'show' : ''}`}>
          <div className="panel-header">
            <button className="close-panel" onClick={toggleSlidingPanel}>&#10005;</button>
          </div>
          <div className="panel-content">
            <h2>Welcome, {username}</h2>
            <p>Manage your account and settings here.</p>
            <Link to="/profile" className="panel-link">My Profile</Link>
            <button onClick={handleLogout} className="panel-link">Logout</button>
          </div>
        </div>
      )}

    </nav>
  );
};


export default Navbar;
