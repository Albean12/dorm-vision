import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [hoveredFirst, setHoveredFirst] = useState(false);
  const [hoveredSecond, setHoveredSecond] = useState(false);
  const [hoveredThird, setHoveredThird] = useState(false);

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="hero-overlay">
          <h1>Welcome to Seagold Dormitory</h1>
          <p className="lead">Your home away from home with modern facilities and a prime location.</p>
          <div className="button-group">
            <Link to="/Gallery" className="btn btn-primary">Explore Rooms</Link>
            <Link to="/contactus" className="btn btn-outline-light">Book a Tour</Link>
          </div>
        </div>
      </section>
      
      {/* Facilities Overview Section */}
      <section className="facilities-section container py-5">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 text-center feature-card">
            <img src="/sample1.jpg" alt="Modern dormitory facilities" className="img-fluid mb-3" loading="lazy" />
            <h3>Modern Facilities</h3>
            <p>Experience state-of-the-art amenities and top-notch services.</p>
          </div>
          <div className="col-md-4 text-center feature-card">
            <img src="/feature2.jpeg" alt="Smart technology" className="img-fluid mb-3" loading="lazy" />
            <h3>Smart Technology</h3>
            <p>Smart room controls, high-speed internet, and more.</p>
          </div>
          <div className="col-md-4 text-center feature-card">
            <img src="/feature3.jpeg" alt="Prime location" className="img-fluid mb-3" loading="lazy" />
            <h3>Prime Location</h3>
            <p>Located near top universities and public transportation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Residents Say</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">"Seagold Dormitory provides everything I need for comfortable student living!"</p>
                <footer className="blockquote-footer">John D., Engineering Student</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">"The smart room controls and high-speed internet are game-changers for my studies."</p>
                <footer className="blockquote-footer">Jane M., IT Major</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">"Being so close to my university has made my life easier. Highly recommend it!"</p>
                <footer className="blockquote-footer">Alex P., Medical Student</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section container py-5">
        <h2 className="text-center mb-5">Gallery</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src="/gallery1.jpg" alt="Dorm interior" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="/gallery2.jpg" alt="Common lounge" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="/gallery3.jpg" alt="Study areas" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>What amenities are included?</h4>
              <p>Seagold Dormitory provides high-speed internet, smart room controls, 24/7 security, study areas, and more.</p>
            </div>
            <div className="col-md-6">
              <h4>How close is it to local universities?</h4>
              <p>We are located within walking distance of top universities, with convenient access to public transportation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h2 className="mb-4">Ready to Move In?</h2>
          <p>Contact us today to schedule a tour or to get more information.</p>
          <Link to="/contactus" className="btn btn-success btn-lg mt-3">Contact Us</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/contactus">Contact Us</a>
            </div>

            <div className="col-md-6 mb-3 footer-social text-md-right">
              <a href="https://facebook.com"><img src="/facebook-icon.png" alt="Facebook" /></a>
              <a href="https://instagram.com"><img src="/instagram-icon.png" alt="Instagram" /></a>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 Seagold Dormitory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
