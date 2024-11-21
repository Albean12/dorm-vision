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
    <h2>Interested? Be With Us!</h2>
    <form className="contact-form">
      {/* First Row: Name and Check-in Time */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="checkin-time">Check-in Time/Date</label>
          <input id="checkin-time" type="datetime-local" required />
        </div>
      </div>

      {/* Second Row: Address and Duration */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" placeholder="Enter your address" required />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="text" placeholder="Enter duration" required />
        </div>
      </div>

      {/* Third Row: Contact Number and Reservation */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-number">Contact Number</label>
          <input
            id="contact-number"
            type="text"
            placeholder="Enter contact number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservation">Reservation</label>
          <input id="reservation" type="text" placeholder="Enter reservation details" required />
        </div>
      </div>

      {/* Fourth Row: Occupation/Rank */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="occupation-rank">Occupation/Rank</label>
          <input
            id="occupation-rank"
            type="text"
            placeholder="Enter occupation or rank"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="send-message-button">
        Send Message
      </button>
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
  <p className="intro-text">
    We’re here to assist you! Reach us through the following details.
  </p>

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

      {/* Feedback Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleModalClose}>
              &times;
            </button>
            <h2>Feedback Form</h2>
            <p>We value your feedback. Please let us know about your experience using our website.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your feedback!');
                handleModalClose();
              }}
            >
              {/* Name and Email */}
              <div className="form-group">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>

              {/* Question 1 */}
              <div className="form-question">
                <p>1. How easy was it to navigate the website?</p>
                <label>
                  <input type="radio" name="navigationEase" value="Very Easy" required /> Very Easy
                </label>
                <label>
                  <input type="radio" name="navigationEase" value="Easy" /> Easy
                </label>
                <label>
                  <input type="radio" name="navigationEase" value="Neutral" /> Neutral
                </label>
                <label>
                  <input type="radio" name="navigationEase" value="Difficult" /> Difficult
                </label>
              </div>

              {/* Question 2 */}
              <div className="form-question">
                <p>2. Did you find the information you were looking for?</p>
                <label>
                  <input type="radio" name="informationFindability" value="Yes, easily" required /> Yes, easily
                </label>
                <label>
                  <input type="radio" name="informationFindability" value="Yes, but it took time" /> Yes, but it took time
                </label>
                <label>
                  <input type="radio" name="informationFindability" value="No, I struggled" /> No, I struggled
                </label>
              </div>

              {/* Question 3 */}
              <div className="form-question">
                <p>3. How visually appealing did you find the website?</p>
                <label>
                  <input type="radio" name="visualAppeal" value="Very Appealing" required /> Very Appealing
                </label>
                <label>
                  <input type="radio" name="visualAppeal" value="Appealing" /> Appealing
                </label>
                <label>
                  <input type="radio" name="visualAppeal" value="Neutral" /> Neutral
                </label>
                <label>
                  <input type="radio" name="visualAppeal" value="Unappealing" /> Unappealing
                </label>
              </div>

              {/* Additional Feedback */}
              <textarea
                name="additionalFeedback"
                placeholder="Do you have any other suggestions or comments?"
                rows="4"
                required
              ></textarea>
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
