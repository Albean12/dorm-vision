import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Homepage.css';
import Home from './Home';
import Location from './Location';
import Gallery from './Gallery';
import Units from './Units';
import FAQs from './FAQs';
import ContactUs from './ContactUs';
import Login from './Login';
import CreateAccount from './CreateAccount';

// Ito yung main component para sa homepage ng site
// Ginagamit ang React Router para mag-navigate sa iba't ibang pages ng website
const HomePage = () => {
  return (
    <Router>
      {/* Main container para sa buong homepage */}
      <div className="homepage">

        {/* Navbar section - dito yung navigation links */}
        <div className="homepage-navbar">

          {/* Logo container - dito pinapakita yung logo */}
          <div className="homepage-logo-container">
            <div className="homepage-logo">
              {/* Siguraduhing nasa public folder yung logo image */}
              <img src="/" alt="Seagold Dormitory Logo" />
            </div>
          </div>

          {/* Navigation container - para sa links na magagamit para mag-navigate sa ibang pages */}
          <div className="homepage-nav-container">
            <div className="homepage-nav-links">
              {/* Link na ginagamit para magpunta sa iba't ibang sections */}
              <Link to="/" className="homepage-nav-link">Home</Link>
              <Link to="/location" className="homepage-nav-link">Location</Link>
              <Link to="/gallery" className="homepage-nav-link">Gallery</Link>
              <Link to="/units" className="homepage-nav-link">Units</Link>
              <Link to="/faqs" className="homepage-nav-link">FAQs</Link>
              <Link to="/contactus" className="homepage-nav-link">Contact Us</Link>
            </div>
          </div>

          {/* Login section - dito yung button para makapunta sa login page */}
          <div className="homepage-login-container">
            <Link to="/login" className="homepage-login-button">
              <span className="homepage-login-text">Account</span>
              {/* Siguraduhin na nasa public folder din yung image para sa user icon */}
              <img src="/user.png" alt="loginlogo" className="homepage-login-image" />
            </Link>
          </div>
        </div>

        {/* Main content area - dito lumalabas ang ibang pages based sa link na pinili */}
        <div className="main-content">
          <Routes>
            {/* Routes na ginagamit para mag display ng iba't ibang components */}
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/location" element={<Location />} /> {/* Location page */}
            <Route path="/gallery" element={<Gallery />} /> {/* Gallery page */}
            <Route path="/units" element={<Units />} /> {/* Units page */}
            <Route path="/faqs" element={<FAQs />} /> {/* FAQs page */}
            <Route path="/contactus" element={<ContactUs />} /> {/* Contact Us page */}
            <Route path="/login" element={<Login />} /> {/* Login page */}
            <Route path="/create-account" element={<CreateAccount />} /> {/* Create Account page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
