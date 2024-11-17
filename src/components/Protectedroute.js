import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const userRole = localStorage.getItem('role');

    // Check if user has the correct role
    if (userRole !== role) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
