// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar'; // Navbar component
import Home from './Home';
import Location from './Location';
import Gallery from './Gallery';
import Units from './Units';
import FAQs from './FAQs';
import ContactUs from './ContactUs';
import Login from './Login';
import CreateAccount from './CreateAccount';
import AdminDashboard from './AdminDashboard';
import TenantDashboard from './TenantDashboard';
import './App.css';

const App = () => {
  // Retrieve the user role from localStorage
  const role = localStorage.getItem('role'); // 'admin' or 'tenant'

  return (
    <Router>
      {/* Navbar is placed outside of Routes to make it persist across pages */}
      <Navbar />
      <div className="app-content">
        <Routes>
          {/* Home and general routes */}
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/units" element={<Units />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />

          {/* Admin-only route */}
          <Route
            path="/admin/dashboard"
            element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
          />

          {/* Tenant-only route */}
          <Route
            path="/tenant/dashboard"
            element={role === 'tenant' ? <TenantDashboard /> : <Navigate to="/login" />}
          />

          {/* Redirect any unknown routes to the Home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
