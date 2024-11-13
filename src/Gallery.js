import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './Gallery.css';

const imageCategories = [
  {
    category: "ROOMS",
    subcategories: [
      {
        type: "2 beds",
        images: ['/2beds1.jpg', '/2beds2.jpg', '/2beds3.jpg']
      },
      {
        type: "4 beds",
        images: ['/4beds1.jpg']
      },
      {
        type: "6 beds",
        images: ['/6beds1.jpg', '/6beds2.jpg', '/6beds3.jpg', '/6beds4.jpg']
      },
      {
        type: "8 beds",
        images: ['/8beds1.jpg', '/8beds2.jpg', '/8beds3.jpg']
      },
      {
        type: "10 beds",
        images: ['/10beds.jpg', '/10beds1.jpg']
      },
    ]
  },
  {
    category: "HALLWAY",
    images: ['/hallway1.jpg', '/hallway2.jpg', '/hallway3.jpg', '/hallway4.jpg', '/hallway5.jpg', '/hallway6.jpg', '/hallway8.jpg', '/hallway9.jpg']
  },
  {
    category: "CANTEEN",
    images: ['/canteen1.jpg', '/canteen2.jpg', '/canteen3.jpg']
  },
  {
    category: "MEN'S RESTROOM AND SHOWER ROOM",
    images: ['/menscr1.jpg', '/menscr2.jpg', '/menscr3.jpg']
  },
  {
    category: "WOMENS' RESTROOM AND SHOWER ROOM",
    images: ['/womenscr1.jpg', '/womenscr2.jpg', '/womenscr3.jpg']
  }
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when a new category is selected
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-header">GALLERY</h2>

      {/* Main Categories */}
      <div className="tabs">
        <button onClick={() => { setSelectedCategory(null); setSelectedSubcategory(null); }} className={!selectedCategory ? "tab active-tab" : "tab"}>
          ALL
        </button>
        {imageCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategorySelect(category)}
            className={selectedCategory === category ? "tab active-tab" : "tab"}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Subcategories for Rooms Only */}
      {selectedCategory && selectedCategory.subcategories && (
        <div className="tabs subcategory-tabs">
          {selectedCategory.subcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => handleSubcategorySelect(subcategory)}
              className={selectedSubcategory === subcategory ? "tab active-tab" : "tab"}
            >
              {subcategory.type}
            </button>
          ))}
        </div>
      )}

      {/* Display Images */}
      <div className="rooms-container">
        {/* Display subcategory images if subcategory is selected */}
        {selectedSubcategory && selectedSubcategory.images.map((image, index) => (
          <div key={index} className="room-card" onClick={() => openLightbox(selectedSubcategory.images, index)}>
            <img src={image} alt={`${selectedSubcategory.type} ${index + 1}`} className="room-image" />
            <div className="image-caption">View Image</div>
          </div>
        ))}

        {/* Display main category images directly if there are no subcategories */}
        {!selectedSubcategory && selectedCategory && !selectedCategory.subcategories && selectedCategory.images.map((image, index) => (
          <div key={index} className="room-card" onClick={() => openLightbox(selectedCategory.images, index)}>
            <img src={image} alt={`${selectedCategory.category} ${index + 1}`} className="room-image" />
            <div className="image-caption">View Image</div>
          </div>
        ))}

        {/* Display all images when "ALL" is selected */}
        {!selectedCategory && imageCategories.flatMap(category =>
          category.subcategories
            ? category.subcategories.flatMap(subcategory => subcategory.images) // Include all subcategories' images
            : category.images // Include main category images
        ).map((image, index) => (
          <div key={index} className="room-card" onClick={() => openLightbox(
            imageCategories.flatMap(category =>
              category.subcategories
                ? category.subcategories.flatMap(subcategory => subcategory.images)
                : category.images
            ),
            index
          )}>
            <img src={image} alt={`Image ${index + 1}`} className="room-image" />
            <div className="image-caption">View Image</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
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
