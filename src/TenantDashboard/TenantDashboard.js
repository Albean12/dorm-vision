import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';

import './TenantDashboard.css';
import HomeTenant from './HomeTenant';
import RoomInfo from './RoomInfoTenant';
import Messages from './MessageTenant';
import Bills from './BillsTenant';
import Maintenance from './MaintenanceTenant';
import Map from './MapTenant';


const TenantDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchDashboardData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tenant/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setDashboardData(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);

                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                    navigate('/login');
                } else {
                    console.error('Failed to load dashboard data:', error);
                    setError('Failed to load dashboard data. Please try again later.');
                }
            }
        };

        fetchDashboardData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar Menu */}
            <div className="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/tenant/dashboard/home">Home</Link></li>
                    <li><Link to="/tenant/dashboard/room-info">Room Information</Link></li>
                    <li><Link to="/tenant/dashboard/messages">Messages</Link></li>
                    <li><Link to="/tenant/dashboard/bills">Bills and Payments</Link></li>
                    <li><Link to="/tenant/dashboard/maintenance">Maintenance Request</Link></li>
                    <li><Link to="/tenant/dashboard/map">Map</Link></li>
                </ul>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {/* Main Content */}
        <div className="main-content">
            <Routes>
                <Route path="/home" element={<HomeTenant />} />
                <Route path="/room-info" element={<RoomInfo />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/map" element={<Map />} />
                </Routes>
            </div>
        </div>
    );
};

export default TenantDashboard;
