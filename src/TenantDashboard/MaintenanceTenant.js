// src/components/TenantDashboard/Maintenance.js
import React, { useState } from 'react';
import './MaintenanceTenant.css';

const Maintenance = () => {
    const [request, setRequest] = useState('');
    const [status, setStatus] = useState('pending');
    const [submittedRequests, setSubmittedRequests] = useState([]);

    const handleChange = (e) => {
        setRequest(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (request.trim()) {
            const newRequest = {
                id: Date.now(),
                description: request,
                status: status,
            };
            setSubmittedRequests([...submittedRequests, newRequest]);
            setRequest('');
        }
    };

    return (
        <div className="maintenance-container">
            <div className="maintenance-header">
                <h1>Maintenance Request</h1>
            </div>
            <div className="maintenance-description">
                <p>Submit or track your maintenance requests below. You can check the status of your previous requests here as well.</p>
            </div>

            {/* Maintenance Request Form */}
            <form className="maintenance-form" onSubmit={handleSubmit}>
                <label htmlFor="maintenance-request">Describe your issue:</label>
                <textarea
                    id="maintenance-request"
                    value={request}
                    onChange={handleChange}
                    placeholder="Describe the issue you're experiencing"
                    required
                ></textarea>
                
                <label htmlFor="status">Request Status:</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button type="submit">Submit Request</button>
            </form>

            {/* Submitted Requests */}
            <div className="maintenance-status">
                <h2 className="status-header">Your Maintenance Requests</h2>
                {submittedRequests.length === 0 ? (
                    <p>No requests submitted yet.</p>
                ) : (
                    <ul className="status-list">
                        {submittedRequests.map((req) => (
                            <li
                                key={req.id}
                                className={`status-item ${req.status}`}
                            >
                                <p><strong>Description:</strong> {req.description}</p>
                                <p><strong>Status:</strong> {req.status.charAt(0).toUpperCase() + req.status.slice(1)}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Maintenance;
