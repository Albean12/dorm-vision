import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './Gallery.css';

// Define the categories and images for the gallery
const imageCategories = [
  {
    category: "CANTEEN",
    images: ['/canteen1.jpg', '/canteen2.jpg', '/canteen3.jpg']
  },
  {
    category: "GENTLEMEN'S RESTROOM AND SHOWER ROOM",
    images: ['/menscr1.jpg', '/menscr2.jpg', '/menscr3.jpg', '/menscr4.jpg', '/menscr5.jpg', '/menscr6.jpg', '/menscr7.jpg', '/menscr8.jpg']
  },
  {
    category: "LADIES' RESTROOM AND SHOWER ROOM",
    images: ['/womenscr1.jpg', '/womenscr2.jpg', '/womenscr3.jpg', '/womenscr4.jpg', '/womenscr5.jpg', '/womenscr6.jpg', '/womenscr7.jpg', '/womenscr8.jpg']
  }
];

// Main Gallery component
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const filteredCategories = selectedCategory === "All"
    ? imageCategories
    : imageCategories.filter(category => category.category === selectedCategory);

  return (
    <section className="gallery-section">
      <h2 className="gallery-header">GALLERY</h2>

      {/* Tabs for filtering categories */}
      <div className="tabs">
        <button onClick={() => setSelectedCategory("All")} className={selectedCategory === "All" ? "tab active-tab" : "tab"}>All</button>
        {imageCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.category)}
            className={selectedCategory === category.category ? "tab active-tab" : "tab"}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Display filtered categories */}
      {filteredCategories.map((category, catIndex) => (
        <div key={catIndex} className="category-section">
          <h3 className="category-title">{category.category}</h3>
          <div className="rooms-container">
            {category.images.map((image, index) => (
              <div key={index} className="room-card" onClick={() => openLightbox(category.images, index)}>
                <img src={image} alt={`${category.category} ${index + 1}`} className="room-image" />
                <div className="image-caption">View Image</div> {/* Updated text here */}
              </div>
            ))}
          </div>
        </div>
      ))}

      {isOpen && (
        <Lightbox
          images={currentImages.map((img) => ({ url: img }))}
          startIndex={photoIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default Gallery;
