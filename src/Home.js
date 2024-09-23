import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  // State to control whether the carousel should slide
  const [hovered, setHovered] = useState(false);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-banner text-center bg-light py-5">
        <h1 className="display-4">Convenience Meets Technology</h1>
        <p className="lead">Discover modern living with our tech-enabled dormitories.</p>
        <Link to="/contactus" className="btn btn-primary btn-lg mt-3">Book a Tour</Link>
      </section>

      {/* Features Section with Carousel */}
      <section className="features container py-5">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <Carousel
              pause={hovered ? 'hover' : false}
              interval={hovered ? 2000 : null}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Carousel.Item>
                <img src="/sample1.jpg" alt="Feature 1" className="img-fluid mb-3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/sample2.jpg" alt="Feature 1 - Slide 2" className="img-fluid mb-3" />
              </Carousel.Item>
            </Carousel>
            <h3>Modern Facilities</h3>
            <p>Experience state-of-the-art amenities and top-notch services.</p>
          </div>
          <div className="col-md-4 text-center">
            <Carousel
              pause={hovered ? 'hover' : false}
              interval={hovered ? 2000 : null}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Carousel.Item>
                <img src="/feature2.png" alt="Feature 2" className="img-fluid mb-3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/feature2-slide2.png" alt="Feature 2 - Slide 2" className="img-fluid mb-3" />
              </Carousel.Item>
            </Carousel>
            <h3>Smart Technology</h3>
            <p>Smart room controls, high-speed internet, and more.</p>
          </div>
          <div className="col-md-4 text-center">
            <Carousel
              pause={hovered ? 'hover' : false}
              interval={hovered ? 2000 : null}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Carousel.Item>
                <img src="/feature3.png" alt="Feature 3" className="img-fluid mb-3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/feature3-slide2.png" alt="Feature 3 - Slide 2" className="img-fluid mb-3" />
              </Carousel.Item>
            </Carousel>
            <h3>Prime Location</h3>
            <p>Located near top universities and public transportation.</p>
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
    </div>
  );
};

export default Home;
