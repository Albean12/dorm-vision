import React from 'react';
import './Units.css';
const Units = () => {
  return (
    <div className="Units">
      <h1>Sampol</h1>
      <p>For any inquiries or further information, feel free to reach us on our Facebook page.</p>
      
      {/* Facebook link */}
      <a 
        href="https://www.facebook.com/profile.php?id=61551676772866" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="facebook-link"
      >
        Visit Our Facebook Page
      </a>
    </div>
  );
};

export default Units;