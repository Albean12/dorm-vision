import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <h1>Convenience Meets Technology</h1>
        <p>Discover modern living with our tech-enabled dormitories.</p>
        <Link to="/contactus" className="cta-button">Book a Tour</Link>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature">
            <img src="/feature1.png" alt="Feature 1" />
            <h3>Modern Facilities</h3>
            <p>Experience state-of-the-art amenities and top-notch services.</p>
          </div>
          <div className="feature">
            <img src="/feature2.png" alt="Feature 2" />
            <h3>Smart Technology</h3>
            <p>Smart room controls, high-speed internet, and more.</p>
          </div>
          <div className="feature">
            <img src="/feature3.png" alt="Feature 3" />
            <h3>Prime Location</h3>
            <p>Located near top universities and public transportation.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Residents Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"The best living experience I've ever had. Highly recommend!"</p>
            <h4>- Alex P.</h4>
          </div>
          <div className="testimonial">
            <p>"Amazing facilities and super convenient location!"</p>
            <h4>- Jamie L.</h4>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Move In?</h2>
        <p>Contact us today to schedule a tour or to get more information.</p>
        <Link to="/contactus" className="cta-button">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;
