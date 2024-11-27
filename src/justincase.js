import React, { useState, useEffect } from "react";
import "./Units.css";

//
// UnitCard Component: Displays a single unit's basic information.
//
const UnitCard = ({ unit, index, openModal }) => (
  <div key={unit.id} className="unit-card">
    <img src={unit.image} alt={`Unit ${unit.id}`} className="unit-image" />
    <h3 className="unit-title">Unit {unit.id}</h3>
    <p className="unit-capacity">Capacity for {unit.capacity} Person(s)</p>
    <p className="unit-price">From PHP {unit.price}</p>
    <button className="view-details" onClick={() => openModal(index)}>
      View Details
    </button>
  </div>
);

//
// UnitModal Component: Displays detailed information about a unit in a modal.
//
const UnitModal = ({ unit, index, openModals, closeModal }) => {
  if (!openModals[index]) return null;

  return (
    <div className="modal-overlay" onClick={() => closeModal(index)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={() => closeModal(index)}>
          &times;
        </button>

        {/* Gallery Section */}
        <div className="gallery-container">
          <div className="main-image">
            <img src={unit.image} alt={`Unit ${unit.id}`} />
          </div>
          <div className="gallery-thumbnails">
            {unit.galleryImages.map((image, i) => (
              <img key={i} src={image} alt={`Thumbnail ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Modal Info Section */}
        <div className="modal-info">
          <h1>
            UNIT {unit.id} ROOM FOR {unit.capacity} PERSON(S)
          </h1>
          <h2>SEAGOLD DORMITORIES, MANILA</h2>

          <div className="room-offer">
            <h3>ROOM TO OFFER:</h3>
            <div className="room-features">
              <span>🛏️ Air Conditioned</span>
              <span>🛋️ Foam/ Mattress</span>
              <span>🛌 Beddings</span>
            </div>
          </div>

          <div className="description">
            <h3>DESCRIPTION:</h3>
            <p>
              Experience a vibrant student community with modern amenities,
              unbeatable convenience, and a space designed for both living and
              learning!
            </p>
          </div>

          <div className="amenities">
            <h3>AMENITIES:</h3>
            <ul>
              <li>📖 Study Hallway</li>
              <li>📄 Xerox Photocopy</li>
              <li>🍴 Canteen</li>
              <li>🏫 Lemar Review Hub</li>
            </ul>
          </div>

          <div className="payment-transaction">
            <h3>PAYMENT TRANSACTION:</h3>
            <ul>
              <li>💳 On-site transaction</li>
              <li>📱 G-CASH: MS SEAGOLD / 0999992020</li>
            </ul>
          </div>

          <div className="payment-terms">
            <h3>PAYMENT TERMS:</h3>
            <h4>SOLO ROOM (CAPACITY FOR {unit.capacity} PERSON)</h4>
            <ul>
              <li>Monthly: ₱{(unit.price * 12) / 1000},000.00</li>
              <li>Half Month: ₱{Math.ceil(unit.price * 0.75)}.00</li>
              <li>One Week: ₱{Math.ceil(unit.price * 0.5)}.00</li>
              <li>Daily: ₱{Math.ceil(unit.price / 30)}.00</li>
            </ul>
            <div className="notes">
              <strong>NOTES:</strong>
              <ul>
                <li>
                  Rules on EXCESS days in half-month & monthly basis apply and
                  will be charged based on the daily rate.
                </li>
                <li>
                  Room rates are subject to change without prior notice
                  (effective 01-24).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//
// Dormitory Component: Main Component displaying all units and applying filters.
//
const Dormitory = () => {
  const headerImages = [
    "HOVERA.jpg",
    "HOVERB.jpg",
    "HOVERC.jpg",
  ]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically switch images in the header carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === headerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [headerImages.length]);

  const units = [
    { id: 1, capacity: 1, price: 900, image: "Room1.jpg", galleryImages: ["Room1.jpg", "Room2.jpg", "Room3.jpg"] },
    { id: 2, capacity: 2, price: 1500, image: "Room2.jpg", galleryImages: ["Room2.jpg", "Room3.jpg", "Room4.jpg"] },
    { id: 3, capacity: 4, price: 2500, image: "Room3.jpg", galleryImages: ["Room3.jpg", "Room4.jpg", "Room5.jpg"] },
    { id: 4, capacity: 6, price: 3500, image: "Room4.jpg", galleryImages: ["Room4.jpg", "Room5.jpg", "Room5.jpg"] },
    { id: 5, capacity: 8, price: 4500, image: "Room5.jpg", galleryImages: ["Room5.jpg", "Room1.jpg", "Room4.jpg"] },
    { id: 6, capacity: 10, price: 5500, image: "Room3.jpg", galleryImages: ["Room3.jpg", "Room2.jpg", "Room3.jpg"] },
    { id: 7, capacity: 12, price: 6500, image: "Room2.jpg", galleryImages: ["Room2.jpg", "Room3.jpg", "Room2.jpg"] },
    { id: 8, capacity: 14, price: 7500, image: "Room1.jpg", galleryImages: ["Room1.jpg", "Room4.jpg", "Room1.jpg"] },
  ];

  const [filters, setFilters] = useState({
    group: "",
  });

  const filteredUnits = units.filter(
    (unit) => !filters.group || unit.capacity === Number(filters.group)
  );

  return (
    <div className="dormitory">
      {/* Header Carousel */}
      <header className="dormitory-header">
        <img
          src={headerImages[currentImageIndex]}
          alt="Dormitory Header"
          className="dormitory-image"
        />
        <h1 className="title">WELCOME TO OUR UNITS</h1>
        <p className="description">
          Seagold Dormitory offers comfort and convenience with a
          student-friendly environment. Explore our cozy and affordable units
          just for you.
        </p>
      </header>

      {/* Filter Section */}
      <div className="filter-section">
        <label htmlFor="group">Group Size:</label>
        <select
          id="group"
          value={filters.group}
          onChange={(e) => setFilters({ ...filters, group: e.target.value })}
        >
          <option value="">All</option>
          {[1, 2, 4, 6, 8, 10, 12, 14].map((size) => (
            <option key={size} value={size}>
              {size} Person(s)
            </option>
          ))}
        </select>
      </div>

      <div className="units-container">
        {filteredUnits.map((unit, index) => (
          <div key={unit.id}>
            <UnitCard unit={unit} index={index} openModal={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dormitory;