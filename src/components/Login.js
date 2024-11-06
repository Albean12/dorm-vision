import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import CreateAccountModal from './CreateAccount';
import authService from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [isCreateAccountOpen, setCreateAccountOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember me"

  const openCreateAccountModal = () => setCreateAccountOpen(true);
  const closeCreateAccountModal = () => setCreateAccountOpen(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Show loading spinner
    try {
      const response = await authService.login(email, password);

      // Check role and navigate accordingly
      if (response.role === 'admin') {
        navigate('/admin'); 
      } else if (response.role === 'tenant') {
        navigate('/tenant'); 
      }
    } catch (error) {
      console.error("Login error:", error);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="login-page">
      {/* Navbar Component could be added here if necessary */}

      {/* Left Section */}
      <div className="login-left">
        <h1 className="welcome-text">Hello, welcome!</h1>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin} aria-label="Login form">
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
            />
          </div>

          {/* Display error message with aria-live for screen readers */}
          {error && (
            <div className="error-message" aria-live="assertive">
              {error}
            </div>
          )}

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </div>
          <div className="button-group">
            <button
              type="submit"
              className="login-button"
              disabled={loading} // Disable button during loading
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>

        {/* Link for users without accounts */}
        <div className="create-account">
          <span>
            You don't have an account? 
            <span className="create-account-link" onClick={openCreateAccountModal}>
              Create now
            </span>
          </span>
        </div>

        <div className="social-links">
          <span>FOLLOW</span>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        {/* Background image will be applied in CSS */}
      </div>

      {/* Modal for Create Account */}
      <CreateAccountModal isOpen={isCreateAccountOpen} onClose={closeCreateAccountModal} />
    </div>
  );
};

export default Login;
