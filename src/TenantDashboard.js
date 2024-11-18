import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TenantDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // New state to manage loading
    const navigate = useNavigate(); // Use useNavigate for redirection

    useEffect(() => {
        // Check if the token exists; if not, redirect to login
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        // Fetch the dashboard data for tenant
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tenant/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use the stored token
                    },
                });
                
                // Set the data and turn off the loading state
                setDashboardData(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false); // Stop loading indicator

                if (error.response && error.response.status === 401) {
                    // Unauthorized error - clear the token and redirect to login
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                    navigate('/login');
                } else {
                    console.error('Failed to load dashboard data:', error); // Log the full error
                    setError('Failed to load dashboard data. Please try again later.');
                }
            }
        };

        fetchDashboardData();
    }, [navigate]);

    // Render error message if there’s an error
    if (error) {
        return <p>{error}</p>;
    }

    // Render the loading message if the data is still being fetched
    if (loading) {
        return <p>Loading...</p>;
    }

    // Render the dashboard data
    return (
        <div>
            <h1>Tenant Dashboard</h1>
            {dashboardData ? (
                <div>
                    <p>Welcome to the Tenant Dashboard!</p>
                    <ul>
                        <li>Rent Due: {dashboardData.rentDue}</li>
                        <li>Current Room: {dashboardData.room}</li>
                        <li>Maintenance Requests: {dashboardData.maintenanceRequests}</li>
                        {/* Display other tenant-specific data here */}
                    </ul>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default TenantDashboard;
