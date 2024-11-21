import React, { useState } from "react";
import "./ContactUs.css"; // Ensure your CSS is updated

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false); // Controls the modal visibility
  const [selectedEmoji, setSelectedEmoji] = useState(null); // Stores the selected emoji

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="contact-page-container">
      {/* Left Section: Contact Form */}
      <div className="get-in-touch">
        <h2>Interested? Be With Us!</h2>
        <form className="contact-form">
          {/* Name and Check-in Time */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Check-in Time/Date</label>
              <input type="datetime-local" required />
            </div>
          </div>

          {/* Address and Duration */}
          <div className="form-row">
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="Enter your address" required />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input type="text" placeholder="Enter duration" required />
            </div>
          </div>

          {/* Contact Number and Reservation */}
          <div className="form-row">
            <div className="form-group">
              <label>Contact Number</label>
              <input type="text" placeholder="Enter contact number" required />
            </div>
            <div className="form-group">
              <label>Reservation</label>
              <input type="text" placeholder="Enter reservation details" required />
            </div>
          </div>

          {/* Occupation/Rank */}
          <div className="form-row">
            <div className="form-group">
              <label>Occupation/Rank</label>
              <input type="text" placeholder="Enter occupation or rank" required />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="send-message-button">
            Send Message
          </button>
        </form>

        {/* Feedback Form Button */}
        <button onClick={handleModalOpen} className="feedback-button">
          Feedback Form
        </button>
      </div>

      {/* Right Section: Contact Information */}
      <div className="contact-information">
        <h2>Contact Information</h2>
        <p className="intro-text">We’re here to assist you! Reach us through the following details.</p>
        <div className="info-section">
          <div className="info-block">
            <h3>Address</h3>
            <p>
              3/F Fern Building, 827 P. Paredes St.,<br />
              Cor. S.H. Loyola St., Sampaloc, Manila 1008, Philippines
            </p>
          </div>
          <div className="info-block">
            <h3>Phone</h3>
            <p>
              <a href="tel:+1235235598">+1235 2355 98</a>
            </p>
          </div>
          <div className="info-block">
            <h3>Facebook</h3>
            <p>
              <a
                href="https://www.facebook.com/profile.php?id=61551676772866"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Facebook Page
              </a>
            </p>
          </div>
        </div>
        <p className="description">
          Located in the heart of Manila, Seagold Dormitory provides a safe and clean
          space for students and professionals. Contact us today to learn more about
          our affordable accommodation options.
        </p>
      </div>

      {/* Modal Section: Feedback Form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>

            <h2>Feedback Form</h2>
            <p>We value your feedback. Share your experience with us!</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thank you for your feedback! Selected Emoji: ${selectedEmoji}`);
                handleModalClose();
              }}
            >
              {/* Name and Email */}
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              {/* Emoji Feedback */}
              <div className="emoji-feedback">
                <p>How was your experience?</p>
                <div className="emoji-options">
                  {["😠", "😟", "😐", "😊", "🤩"].map((emoji) => (
                    <button
                      type="button"
                      key={emoji}
                      className={`emoji-button ${selectedEmoji === emoji ? "selected" : ""}`}
                      onClick={() => handleEmojiClick(emoji)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Feedback */}
              <textarea
                placeholder="Let us know more..."
                rows="4"
                required
              ></textarea>

              {/* Submit Button */}
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
