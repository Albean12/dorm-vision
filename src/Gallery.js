import React, { useState, useCallback, useEffect } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './Gallery.css';

const imageCategories = [
  {
    category: "ROOMS",
    description: "Explore the various room configurations available.",
    images: [
      '/images/2beds1.jpg',
      '/images/2beds2.jpg',
      '/images/2beds3.jpg',
      '/images/4beds1.jpg',
      '/images/6beds1.jpg',
      '/images/6beds2.jpg',
      '/images/6beds3.jpg',
      '/images/6beds4.jpg',
      '/images/8beds1.jpg',
      '/images/8beds2.jpg',
      '/images/8beds3.jpg',
      '/images/10beds.jpg',
      '/images/10beds1.jpg'
    ]
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
      '/images/hallway9.jpg'
    ]
  },
  {
    category: "CANTEEN",
    description: "Our cozy and well-equipped canteen.",
    images: [
      '/images/canteen1.jpg',
      '/images/canteen2.jpg',
      '/images/canteen3.jpg'
    ]
  },
  {
    category: "MEN'S RESTROOM AND SHOWER ROOM",
    description: "Facilities for the gentlemen.",
    images: [
      '/images/menscr1.jpg',
      '/images/menscr2.jpg',
      '/images/menscr3.jpg',
      '/images/menscr4.jpg',
      '/images/menscr5.jpg',
      '/images/menscr6.jpg',
      '/images/menscr7.jpg',
      '/images/menscr8.jpg'
    ]
  },
  {
    category: "WOMENS' RESTROOM AND SHOWER ROOM",
    description: "Facilities for the ladies.",
    images: [
      '/images/womenscr1.jpg',
      '/images/womenscr2.jpg',
      '/images/womenscr3.jpg',
      '/images/womenscr4.jpg',
      '/images/womenscr5.jpg',
      '/images/womenscr6.jpg',
      '/images/womenscr7.jpg',
      '/images/womenscr8.jpg'
    ]
  }
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Preload images to avoid flickering
  useEffect(() => {
    if (selectedCategory?.images) {
      selectedCategory.images.forEach((img) => {
        const image = new Image();
        image.src = img;
      });
    }
  }, [selectedCategory]);

  const openModal = useCallback((category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedCategory(null);
  }, []);

  const openLightbox = useCallback((images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-header">GALLERY</h2>

      {/* Main Category Grid */}
      <div className="category-grid">
        {imageCategories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => openModal(category)}
          >
            <img
              src={category.images[0]}
              alt={category.category}
              className="category-image"
              onError={(e) => (e.target.src = '/images/fallback.jpg')}
            />
            <div className="category-label">{category.category}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h3>{selectedCategory.category}</h3>
            <p>{selectedCategory.description}</p>
            <div className="modal-images-grid">
              {selectedCategory.images.map((image, index) => (
                <div
                  key={index}
                  className="modal-image-card"
                  onClick={() => openLightbox(selectedCategory.images, index)}
                >
                  <img
                    src={image}
                    alt={`${selectedCategory.category} ${index + 1}`}
                    className="modal-image"
                    onError={(e) => (e.target.src = '/images/fallback.jpg')}
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