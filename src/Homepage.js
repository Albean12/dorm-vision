import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="navbar">
        <div className="logo-container">
          <div className="logo">
            <img src="/dormvisionlog.png" alt="DORMVISION Logo" />
          </div>
        </div>
        <div className="nav-container">
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Location</a>
            <a href="#" className="nav-link">Gallery</a>
            <a href="#" className="nav-link">Units</a>
            <a href="#" className="nav-link">FAQs</a>
            <a href="#" className="nav-link">Contact Us</a>
          </div>
        </div>
        <div className="login-container">
          <button className="login-button">
            <img src="/user.png" alt="loginlogo" className="login-image" />
          </button>
        </div>
      </div>
      <div className="main-content">
        <h1>Convenience Meets Technology</h1>
      </div>
    </div>
  );
};

export default HomePage;
