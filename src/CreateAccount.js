import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="create-account-page">
      <h1>Create Account</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
