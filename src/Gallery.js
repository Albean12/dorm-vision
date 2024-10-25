import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css'; // Import CSS for the lightbox

const images = [
  '/feature2-slide2.jpeg',
  '/feature2.jpeg',
  '/feature3-slide2.jpeg',
  // Add more image URLs
];

const GallerySection = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="gallery-section container py-5">
      <h2 className="text-center mb-5">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img
              src={image}
              alt={`Dorm ${index}`}
              className="img-fluid"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickability
            />
          </div>
        ))}
      </div>

      {/* Open the lightbox when an image is clicked */}
      {isOpen && (
        <Lightbox
          images={images} // Pass the array of images
          startIndex={photoIndex} // Start with the clicked image
          onClose={() => setIsOpen(false)} // Close lightbox when requested
        />
      )}
    </section>
  );
};

export default GallerySection;
