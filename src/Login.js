import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import CreateAccountModal from './CreateAccount'; // Import the modal

const Login = () => {
  // State to manage the visibility of the Create Account modal
  const [isCreateAccountOpen, setCreateAccountOpen] = useState(false);

  const openCreateAccountModal = () => setCreateAccountOpen(true); // Open modal
  const closeCreateAccountModal = () => setCreateAccountOpen(false); // Close modal

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="login-left">
        <h1 className="welcome-text">Hello, welcome!</h1>

        {/* Login Form */}
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="name@mail.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" required />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </div>
          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>

        {/* Link for users without accounts */}
        <div className="create-account">
          <span>
            You don't have an account? 
            {/* Replace the Link with a button to open the modal */}
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
