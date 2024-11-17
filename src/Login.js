import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './Login.css';
import HomePage from './Homepage';
import CreateAccountModal from './CreateAccount'; // Import the modal

const Login = () => {
  // State to manage the visibility of the Create Account modal
  const [isCreateAccountOpen, setCreateAccountOpen] = useState(false);
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  // Function to open the Create Account modal
  const openCreateAccountModal = () => setCreateAccountOpen(true);
  
  // Function to close the Create Account modal
  const closeCreateAccountModal = () => setCreateAccountOpen(false);

  // Async function to handle the login process
  const login = async (email, password) => {
    try {
      // Attempt to make a POST request to the login endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });

      // Extract the access token and role from the response
      const { access_token, role } = response.data;

      // Store the token and role in localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('role', role);

      return role; // Return role for redirection
    } catch (error) {
      // Handle error and set an error message
      if (error.response) {
        // Server responded with a status other than 200 range
        setErrorMessage(error.response.data.message || 'Login failed. Please check your credentials.');
      } else if (error.request) {
        // Request was made, but no response was received
        setErrorMessage('No response from the server. Please try again later.');
      } else {
        // Other errors
        setErrorMessage('An unexpected error occurred.');
      }
      throw error; // Re-throw the error so handleLogin can handle it too
    }
  };

  // Function to handle the login and redirection based on role
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setErrorMessage(''); // Clear any previous error messages

    try {
      const role = await login(email, password); // Call the login function

      // Redirect based on user role
      if (role === 'admin') {
        window.location.href = '/admin/dashboard';
      } else if (role === 'tenant') {
        window.location.href = '/tenant/dashboard';
      }
    } catch (error) {
      console.error('Login failed:', error); // Log any errors
      // The error message is already set in the login function
    }
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="login-left">
        <h1 className="welcome-text">Hello, welcome!</h1>

        {/* Error Message Display */}
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin}> {/* Call handleLogin on form submission */}
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="name@mail.com" 
              required 
              value={email} // Bind email state to the input
              onChange={(e) => setEmail(e.target.value)} // Update email state
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
              value={password} // Bind password state to the input
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </div>
          <div className="button-group">
            <button type="submit" className="login-button">Login</button> {/* Submit button */}
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
