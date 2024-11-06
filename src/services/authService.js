// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.role);
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};

const getUserRole = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await axios.get(`${API_URL}/user-role`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.role;
};

export default {
    login,
    logout,
    getUserRole,
};
