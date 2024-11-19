import React, { useState, useCallback, useEffect } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './Gallery.css';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageCategories = [
    {
      category: "ROOMS",
      description: "Explore the various room configurations available.",
      subcategories: {
        "2 Beds": [
          '/images/2beds1.jpg',
          '/images/2beds2.jpg',
          '/images/2beds3.jpg',
        ],
        "4 Beds": [
          '/images/4beds1.jpg',
        ],
        "6 Beds": [
          '/images/6beds1.jpg',
          '/images/6beds2.jpg',
          '/images/6beds3.jpg',
          '/images/6beds4.jpg',
        ],
        "8 Beds": [
          '/images/8beds1.jpg',
          '/images/8beds2.jpg',
          '/images/8beds3.jpg',
        ],
        "10 Beds": [
          '/images/10beds.jpg',
          '/images/10beds1.jpg',
        ],
      },
    },
    {
      category: "HALLWAY",
      description: "Take a look at the spacious hallways.",
      images: [
        '/images/hallway1.jpg',
        '/images/hallway2.jpg',
        '/images/hallway3.jpg',
        '/images/hallway4.jpg',
        '/images/hallway5.jpg',
        '/images/hallway6.jpg',
        '/images/hallway8.jpg',
        '/images/hallway9.jpg',
      ],
    },
    {
      category: "CANTEEN",
      description: "Our cozy and well-equipped canteen.",
      images: [
        '/images/canteen1.jpg',
        '/images/canteen2.jpg',
        '/images/canteen3.jpg',
      ],
    },
    {
      category: "MEN'S RESTROOM AND SHOWER ROOM",
      description: "Facilities for the gentlemen.",
      images: [
        `${process.env.PUBLIC_URL}/images/menscr1.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr2.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr3.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr4.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr5.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr6.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr7.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr8.jpg`,
      ],
    },
    {
      category: "WOMENS' RESTROOM AND SHOWER ROOM",
      description: "Facilities for the ladies.",
      images: [
        `${process.env.PUBLIC_URL}/images/womenscr1.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr2.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr3.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr4.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr5.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr6.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr7.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr8.jpg`,
      ],
    },
  ];

  // Preload images to avoid flickering
  useEffect(() => {
    if (selectedCategory) {
      const imagesToPreload = selectedSubcategory
        ? selectedCategory.subcategories?.[selectedSubcategory]
        : selectedCategory.images || Object.values(selectedCategory.subcategories || {}).flat();
      imagesToPreload.forEach((img) => {
        const image = new Image();
        image.src = img;
      });
    }
  }, [selectedCategory, selectedSubcategory]);

  const openModal = useCallback((category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory selection
    setPhotoIndex(0);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  }, []);

  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-header">GALLERY</h2>

      {/* Main Category Grid */}
      <div className="category-grid">
        {imageCategories.map((category) => (
          <div
            key={category.category}
            className="category-card"
            onClick={() => openModal(category)}
          >
            <img
              src={
                category.images
                  ? category.images[0]
                  : Object.values(category.subcategories)[0][0]
              }
              alt={category.category}
              className="category-image"
            />
            <div className="category-label">{category.category}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3 className="popup-header">{selectedCategory.category}</h3>
            <p className="popup-subtitle">{selectedCategory.description}</p>

            {/* Subcategory Filters */}
            {selectedCategory.subcategories && (
              <div className="subcategory-filters">
                {Object.keys(selectedCategory.subcategories).map((subcat) => (
                  <button
                    key={subcat}
                    className={`subcategory-button ${
                      selectedSubcategory === subcat ? 'active' : ''
                    }`}
                    onClick={() => setSelectedSubcategory(subcat)}
                  >
                    {subcat}
                  </button>
                ))}
              </div>
            )}

            {/* Image Grid */}
            <div className="modal-images-scroll">
              {(selectedSubcategory
                ? selectedCategory.subcategories[selectedSubcategory]
                : selectedCategory.images ||
                  Object.values(selectedCategory.subcategories || {}).flat()
              ).map((image, index) => (
                <div
                  key={index}
                  className="modal-image-card"
                  onClick={() =>
                    openLightbox(
                      selectedSubcategory
                        ? selectedCategory.subcategories[selectedSubcategory]
                        : selectedCategory.images ||
                          Object.values(selectedCategory.subcategories || {}).flat(),
                      index
                    )
                  }
                >
                  <img src={image} alt={`Slide ${index + 1}: ${selectedCategory.category}`}
 />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
