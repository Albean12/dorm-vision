import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './Gallery.css';

// Define the categories and images for the gallery
const imageCategories = [
  {
    category: "MEN'S RESTROOM AND SHOWER ROOM",
    images: ['/menscr1.jpg', '/menscr2.jpg', '/menscr3.jpg','/menscr4.jpg', '/menscr5.jpg','/menscr6.jpg', '/menscr7.jpg', '/menscr8.jpg'] // Replace with actual image paths
  },
  {
    category: "WOMEN'S DORMS",
    images: ['/womenscr1.jpg', '/womenscr2.jpg', '/womenscr3.jpg']
  },
  {
    category: "SHARED FACILITIES",
    images: ['/shared1.jpg', '/shared2.jpg', '/shared3.jpg']
  }
];

// Main Gallery component
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control lightbox visibility
  const [currentImages, setCurrentImages] = useState([]); // Images to display in the lightbox
  const [photoIndex, setPhotoIndex] = useState(0); // Index of the current image

  // Function to open the lightbox with specific images and index
  const openLightbox = (images, index) => {
    setCurrentImages(images); // Set the current category's images
    setPhotoIndex(index); // Set the starting index for the lightbox
    setIsOpen(true); // Open the lightbox
  };

  return (
    <section className="gallery-section">
      {/* Main header for the gallery */}
      <h2 className="gallery-header">GALLERY</h2>

      {/* Loop through each category to display category title and images */}
      {imageCategories.map((category, catIndex) => (
        <div key={catIndex} className="category-section">
          {/* Display the category title */}
          <h3 className="category-title">{category.category}</h3>

          {/* Horizontal container for the images within each category */}
          <div className="rooms-container">
            {category.images.map((image, index) => (
              <div key={index} className="room-card">
                {/* Display each image with an onClick to open the lightbox */}
                <img
                  src={image}
                  alt={`${category.category} ${index + 1}`}
                  className="room-image"
                  onClick={() => openLightbox(category.images, index)} // Open lightbox on image click
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Lightbox component */}
      {isOpen && (
        <Lightbox
          images={currentImages.map((img) => ({ url: img }))} // Pass images in the format required by Lightbox
          startIndex={photoIndex} // Set the starting index for the lightbox
          onClose={() => setIsOpen(false)} // Close the lightbox
        />
      )}
    </section>
  );
};

export default Gallery;
