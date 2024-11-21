import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  // Open feedback modal
  const handleModalOpen = () => {
    setShowModal(true);
  };

  // Close feedback modal
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-page-container">
      {/* Left Section: Get in Touch Form */}
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          {/* First Row: Name and Check-in Time */}
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Check-in Time/Date" required />
          </div>
          {/* Second Row: Address and Duration */}
          <div className="form-row">
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Duration" required />
          </div>
          {/* Third Row: Contact Number and Reservation */}
          <div className="form-row">
            <input type="text" placeholder="Contact Number" required />
            <input type="text" placeholder="Reservation" required />
          </div>
          {/* Fourth Row: Occupation/Rank */}
          <div className="form-row">
            <input type="text" placeholder="Occupation/Rank" required />
          </div>
          {/* Submit Button */}
          <button type="submit" className="send-message-button">Send Message</button>
        </form>

        {/* Buttons: Visit Facebook and Feedback Form */}
        <div className="button-group">
          <a
            href="https://www.facebook.com/profile.php?id=61551676772866"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-button"
          >
            Visit Our Facebook Page
          </a>
          <button onClick={handleModalOpen} className="feedback-button">
            Feedback Form
          </button>
        </div>
      </div>

      {/* Right Section: Contact Information */}
      <div className="contact-information">
        <h2>Contact Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          <i className="fa fa-map-marker"></i> 3/F Fern Building, 827 P. Paredes St.,
          Cor. S.H. Loyola St., Sampaloc, Manila 1008, Philippines
        </p>
        <p>
          <i className="fa fa-phone"></i> +1235 2355 98
        </p>
        <p>
          <i className="fa fa-envelope"></i> info@yourdormitory.com
        </p>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>
            <h2>Feedback Form</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Your Feedback" rows="4" required></textarea>
              <button type="submit" className="submit-feedback-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
