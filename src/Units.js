import React, { useEffect, useState } from "react";
import "./Units.css";

const Units = () => {
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [selectedRental, setSelectedRental] = useState(null); // Modal state
  const [carouselIndices, setCarouselIndices] = useState({}); // Track carousel positions
  const [filters, setFilters] = useState({
    price: "All",
    features: [],
    availability: "",
  });

  const rentals = [
    { id: 1, title: "Solo Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 11000, availability: "1", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 1", features: ["Aircon", "Wifi"] },
    { id: 2, title: "Duo Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 6000, availability: "2", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 2", features: ["Aircon", "Wifi"] },
    { id: 3, title: "Quadro Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 5000, availability: "4", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 3", features: ["Aircon", "Wifi"] },
    { id: 4, title: "Sixto Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 7000, availability: "6", images: ["Room4.jpg", "Room5.jpg", "Room6.jpg"], tag: "Room 4", features: ["Aircon", "Wifi"] },
    { id: 5, title: "Otso Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 8000, availability: "8", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 5", features: ["Aircon", "Wifi"] },
    { id: 6, title: "XL Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 4500, availability: "12", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 6", features: ["Aircon", "Wifi"] },
    { id: 7, title: "Large Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 3500, availability: "14", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 7", features: ["Aircon", "Wifi"] },
    { id: 8, title: "Mega Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 10000, availability: "10", images: ["Room1.jpg", "Room2.jpg", "Room3.jpg"], tag: "Room 8", features: ["Aircon", "Wifi"] },
  ];

  useEffect(() => {
    setFilteredRentals(rentals);
  }, []);

  const handleCarousel = (rentalId, direction) => {
    setCarouselIndices((prev) => {
      const currentIndex = prev[rentalId] || 0;
      const totalImages = rentals.find((r) => r.id === rentalId).images.length;

      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return { ...prev, [rentalId]: newIndex };
    });
  };

  const openModal = (rental) => setSelectedRental(rental);
  const closeModal = () => setSelectedRental(null);

  return (
    <div className="Units">
      <div id="rental-container">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="rental-card">
            <div className="rental-header">
              <span className="verified-badge">{rental.tag}</span>
            </div>
            <div className="carousel-container">
              <button
                className="carousel-btn prev"
                onClick={() => handleCarousel(rental.id, "prev")}
              >
                &#8592;
              </button>
              <div
                className="carousel-images"
                style={{
                  transform: `translateX(-${
                    (carouselIndices[rental.id] || 0) * 100
                  }%)`,
                }}
              >
                {rental.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${rental.title} ${index}`}
                    className="rental-image"
                  />
                ))}
              </div>
              <button
                className="carousel-btn next"
                onClick={() => handleCarousel(rental.id, "next")}
              >
                &#8594;
              </button>
            </div>
            <div className="rental-content">
              <h3 className="rental-title">{rental.title}</h3>
              <p className="rental-inclusion">
                {rental.inclusion} and {rental.inclusion2}
              </p>
              <p className="rental-price">Starts at ₱{rental.price.toLocaleString()}</p>
              <p className="rental-availability">Capacity: {rental.availability}</p>
              <button className="details-button" onClick={() => openModal(rental)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedRental && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedRental.title}</h2>
            <img src={selectedRental.images[0]} alt={selectedRental.title} />
            <p>
              <strong>Inclusions:</strong> {selectedRental.inclusion} and{" "}
              {selectedRental.inclusion2}
            </p>
            <p>
              <strong>Price:</strong> ₱{selectedRental.price.toLocaleString()}
            </p>
            <p>
              <strong>Capacity:</strong> {selectedRental.availability}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Units;
