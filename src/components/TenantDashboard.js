import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TenantDashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tenant/dashboard', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);

    return <div>Tenant Dashboard - Data: {JSON.stringify(data)}</div>;
}

export default TenantDashboard;
