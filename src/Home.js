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
      {/* Features Section with Carousel */}
      <section className="features container py-5">
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <Carousel
              pause={hoveredFirst ? 'hover' : false}
              interval={hoveredFirst ? 2000 : null}
              onMouseEnter={() => setHoveredFirst(true)}
              onMouseLeave={() => setHoveredFirst(false)}
            >
              <Carousel.Item>
                <img src="/sample1.jpg" alt="Modern dormitory facilities with study areas" className="img-fluid mb-3" loading="lazy" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/sample2.jpg" alt="Spacious lounges and relaxation zones" className="img-fluid mb-3" loading="lazy" />
              </Carousel.Item>
            </Carousel>
            <h3>Modern Facilities</h3>
            <p>Experience state-of-the-art amenities and top-notch services.</p>
          </div>
          <div className="col-md-4 text-center">
            <Carousel
              pause={hoveredSecond ? 'hover' : false}
              interval={hoveredSecond ? 2000 : null}
              onMouseEnter={() => setHoveredSecond(true)}
              onMouseLeave={() => setHoveredSecond(false)}
            >
              <Carousel.Item>
                <img src="/feature2.jpeg" alt="Smart room controls for tech-savvy living" className="img-fluid mb-3" loading="lazy" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/feature2-slide2.jpeg" alt="High-speed internet and tech solutions" className="img-fluid mb-3" loading="lazy" />
              </Carousel.Item>
            </Carousel>
            <h3>Smart Technology</h3>
            <p>Smart room controls, high-speed internet, and more.</p>
          </div>
          <div className="col-md-4 text-center">
            <Carousel
              pause={hoveredThird ? 'hover' : false}
              interval={hoveredThird ? 2000 : null}
              onMouseEnter={() => setHoveredThird(true)}
              onMouseLeave={() => setHoveredThird(false)}
            >
              <Carousel.Item>
                <img src="/feature3.jpeg" alt="Prime location with access to public transport" className="img-fluid mb-3" loading="lazy" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/feature3-slide2.jpeg" alt="Nearby universities and facilities" className="img-fluid mb-3" loading="lazy" />
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

      {/* Hero Section - Now at the bottom */}
      <header className="hero-banner text-center bg-light py-5">
        <h1 className="display-4">Convenience Meets Technology</h1>
        <p className="lead">Discover modern living with our tech-enabled dormitories.</p>
        <Link to="/contactus" className="btn btn-primary btn-lg mt-3">Book a Tour</Link>
      </header>
    </div>
  );
};

export default Home;
