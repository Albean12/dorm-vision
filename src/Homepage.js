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

const HomePage = () => {
  return (
    <Router>
      <div className="homepage">
        <div className="navbar">
          <div className="logo-container">
            <div className="logo">
              <img src="/dormvisionlog.png" alt="DORMVISION Logo" />
            </div>
          </div>
          <div className="nav-container">
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/location" className="nav-link">Location</Link>
              <Link to="/gallery" className="nav-link">Gallery</Link>
              <Link to="/units" className="nav-link">Units</Link>
              <Link to="/faqs" className="nav-link">FAQs</Link>
              <Link to="/contactus" className="nav-link">Contact Us</Link>
            </div>
          </div>
          <div className="login-container">
            <Link to="/login" className="login-button">
              <img src="/user.png" alt="loginlogo" className="login-image" />
            </Link>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/units" element={<Units />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
