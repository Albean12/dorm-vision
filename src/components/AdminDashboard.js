import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/dashboard', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);

    return <div>Admin Dashboard - Data: {JSON.stringify(data)}</div>;
}

export default AdminDashboard;
