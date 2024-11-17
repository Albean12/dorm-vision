// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Homepage';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import TenantDashboard from './TenantDashboard';

function App() {
  // Retrieve the user role from localStorage
  const role = localStorage.getItem('role'); // 'admin' or 'tenant'

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page route */}
          <Route path="/" element={<HomePage />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

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
}

export default App;
