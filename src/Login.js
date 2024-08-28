import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="login-options">
        <Link to="/login/client" className="login-link">Login as Client</Link>
        <Link to="/login/landlord" className="login-link">Login as Landlord</Link>
      </div>
      <div className="create-account">
        <Link to="/create-account" className="create-account-link">Create Account</Link>
      </div>
    </div>
  );
};

export default Login;
