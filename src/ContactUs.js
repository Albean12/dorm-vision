import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setShowModal(false);
  };

  return (
    <div className="contact-page">
      {/* GET IN TOUCH FORM */}
      <div className="get-in-touch">
        <h2>GET IN TOUCH</h2>
        <p>Read, Understand. & shall observe the house rules</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Check-in Time/Date" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Duration" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Contact Number" required />
            <input type="text" placeholder="Reservation" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Occupation/Rank" required />
          </div>
          <button type="submit" className="send-button">SEND</button>
        </form>
      </div>

      {/* Footer with Social Icons and Location */}
      <div className="footer-section">
        <div className="footer-icons">
          <a 
            href="https://www.facebook.com/profile.php?id=61551676772866" 
            target="_blank" 
            rel="noopener noreferrer"
            className="facebook-link"
          >
            <i className="fa fa-facebook"></i> Visit Our Facebook Page
          </a>
          <button onClick={handleModalOpen} className="feedback-button">
            <i className="fa fa-comments"></i> Feedback Form
          </button>
        </div>

        {/* Location Information */}
        <div className="location">
          <p>
            <strong>Seagold Dormitory</strong><br />
            3/F Fern Building, 827 P. Paredes St.,<br />
            Cor. S.H. Loyola St., Sampaloc, Manila 1008, Philippines
          </p>
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>
            <h2>Feedback Form</h2>
            <form onSubmit={handleFeedbackSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <p>Rate your experience:</p>
                <div className="rating">
                  ★ ★ ★ ★ ★
                </div>
              </div>
              <div>
                <label htmlFor="comments">Suggestions or Comments:</label>
                <textarea id="comments" name="comments" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

<div className="get-in-touch">
  <h2>GET IN TOUCH</h2>
  <p>Form should appear here</p>
</div>


export default ContactUs;
