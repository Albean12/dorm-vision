import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role); // Save role in localStorage
    }

    return response.data;
};

// Define getUserRole to retrieve the user role from localStorage
const getUserRole = () => {
    return localStorage.getItem('role');
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};

export default {
    login,
    getUserRole,  // Make sure this is exported
    logout,
};
