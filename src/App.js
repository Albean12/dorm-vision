// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Homepage';
import AdminDashboard from './components/AdminDashboard';
import TenantDashboard from './components/TenantDashboard';
import LoginPage from './components/Login';
import authService from './services/authService';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const role = await authService.getUserRole();
        setUserRole(role);
      } catch (error) {
        console.error("Failed to fetch user role:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserRole();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
        
        {/* Route for Admin Dashboard */}
        <Route
          path="/admin"
          element={
            userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />
          }
        />
        
        {/* Route for Tenant Dashboard */}
        <Route
          path="/tenant"
          element={
            userRole === 'tenant' ? <TenantDashboard /> : <Navigate to="/login" />
          }
        />
        
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
