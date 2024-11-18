import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Seagold Dormitory Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/location" className="navbar-link">Location</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/units" className="navbar-link">Units</Link>
          <Link to="/faqs" className="navbar-link">FAQs</Link>
          <Link to="/contactus" className="navbar-link">Contact Us</Link>
        </div>
        <div className="navbar-login">
          <Link to="/login" className="navbar-login-button">
            <span>Account</span>
            <img src="/user.png" alt="User Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
