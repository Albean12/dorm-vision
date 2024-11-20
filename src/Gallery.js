import React, { useState, useCallback, useEffect } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './Gallery.css';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]); // Track selected images
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageCategories = [
    {
      category: "ROOMS",
      subcategories: {
        "2 Beds": [
          '/images/2beds1.jpg',
          '/images/2beds2.jpg',
          '/images/2beds3.jpg',
        ],
        "4 Beds": ['/images/4beds1.jpg'],
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
      images: [
        '/images/canteen1.jpg',
        '/images/canteen2.jpg',
        '/images/canteen3.jpg',
      ],
    },
    {
      category: "MEN'S BATHROOM",
      images: [
        `${process.env.PUBLIC_URL}/images/menscr1.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr2.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr3.jpg`,
        `${process.env.PUBLIC_URL}/images/menscr4.jpg`,
      ],
    },
    {
      category: "WOMENS' BATHROOM ",
      images: [
        `${process.env.PUBLIC_URL}/images/womenscr1.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr2.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr3.jpg`,
        `${process.env.PUBLIC_URL}/images/womenscr4.jpg`,
      ],
    },
  ];

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
    setSelectedSubcategory(null);
    setPhotoIndex(0);
    setModalOpen(true);
    setSelectedImages([]); // Clear selected images when opening a new modal
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedImages([]); // Reset selected images on close
  }, []);

  const openLightbox = (images, index) => {
    setCurrentImages(images.map((img) => ({ url: img })));
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Toggle image selection
  const toggleImageSelection = (image) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(image)
        ? prevSelected.filter((img) => img !== image)
        : [...prevSelected, image]
    );
  };

  // Download selected images
  const downloadSelectedImages = () => {
    selectedImages.forEach((image) => {
      const link = document.createElement('a');
      link.href = image;
      link.download = image.split('/').pop(); // Use the filename from the URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <section className="gallery-section">
    <div className="gallery-header-container">
      <h2 className="gallery-header">GALLERY</h2>
      <p className="gallery-description">Welcome! Take a moment to see the comfort we provide.</p>
    </div>

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
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={closeModal}>
        &times;
      </button>
      <div className="modal-header">
        <h3>{selectedCategory.category}</h3>
        <p>{selectedCategory.description}</p>
      </div>

      {/* Subcategory Filters */}
      {selectedCategory.subcategories && (
        <div className="subcategory-filters">
          {Object.keys(selectedCategory.subcategories).map((subcat) => (
            <button
              key={subcat}
              className={`subcategory-button ${
                selectedSubcategory === subcat ? "active" : ""
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
          <div key={index} className="modal-image-card">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="modal-image"
              onClick={() =>
                openLightbox(
                  selectedSubcategory
                    ? selectedCategory.subcategories[selectedSubcategory]
                    : selectedCategory.images ||
                      Object.values(selectedCategory.subcategories || {}).flat(),
                  index
                )
              }
            />
            <div className="image-checkbox-wrapper">
              <input
                type="checkbox"
                className="image-select-checkbox"
                checked={selectedImages.includes(image)}
                onChange={() => toggleImageSelection(image)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Download Button */}
      {selectedImages.length > 0 && (
        <div className="download-button-wrapper">
          <button
            className="download-selected-button"
            onClick={downloadSelectedImages}
          >
            Download Selected ({selectedImages.length})
          </button>
        </div>
      )}
    </div>
  </div>
)}

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          images={currentImages}
          startIndex={photoIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default Gallery;
