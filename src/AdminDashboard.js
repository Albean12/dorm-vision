// src/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css'; // Import CSS for styling

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Dorm Management</h2>
                <nav>
                    <ul>
                        <li><a href="#manage-rooms">Manage Rooms</a></li>
                        <li><a href="#manage-tenants">Manage Tenants</a></li>
                        <li><a href="#maintenance-requests">Maintenance Requests</a></li>
                        <li><a href="#reports">Reports</a></li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="main-content">
                <h1>Admin Dashboard</h1>
                <section id="manage-rooms">
                    <h2>Manage Rooms</h2>
                    <p>Here you can add, update, or delete room information.</p>
                    {/* Add room management functionality here */}
                </section>

                <section id="manage-tenants">
                    <h2>Manage Tenants</h2>
                    <p>Here you can add, update, or remove tenant information.</p>
                    {/* Add tenant management functionality here */}
                </section>

                <section id="maintenance-requests">
                    <h2>Maintenance Requests</h2>
                    <p>View and manage maintenance requests from tenants.</p>
                    {/* Add maintenance request management functionality here */}
                </section>

                <section id="reports">
                    <h2>Reports</h2>
                    <p>Generate and view reports for dorm management.</p>
                    {/* Add reporting functionality here */}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
