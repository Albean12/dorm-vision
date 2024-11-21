import React, { useState } from "react";
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
          {/* Main Image */}
          <div className="main-image">
            <img src={unit.image} alt={`Unit ${unit.id}`} />
          </div>

          {/* Thumbnails Gallery */}
          <div className="gallery-thumbnails">
            {unit.galleryImages.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setMainImage(image)} // Optional: Update main image on click
              />
            ))}
          </div>
        </div>

        {/* Modal Info Section */}
        <div className="modal-info">
          <h1>UNIT {unit.id} ROOM FOR {unit.capacity} PERSON(S)</h1>
          <h2>SEAGOLD DORMITORIES, MANILA</h2>

          {/* Room Features */}
          <div className="room-offer">
            <h3>ROOM TO OFFER:</h3>
            <div className="room-features">
              <span>🛏️ Air Conditioned</span>
              <span>🛋️ Foam/ Mattress</span>
              <span>🛌 Beddings</span>
            </div>
          </div>

          {/* Room Description */}
          <div className="description">
            <h3>DESCRIPTION:</h3>
            <p>
              Experience a vibrant student community with modern amenities, unbeatable convenience, and a space designed for both living and learning!
            </p>
          </div>

          {/* Amenities List */}
          <div className="amenities">
            <h3>AMENITIES:</h3>
            <ul>
              <li>📖 Study Hallway</li>
              <li>📄 Xerox Photocopy</li>
              <li>🍴 Canteen</li>
              <li>🏫 Lemar Review Hub</li>
            </ul>
          </div>

          {/* Payment Transaction Information */}
          <div className="payment-transaction">
            <h3>PAYMENT TRANSACTION:</h3>
            <ul>
              <li>💳 On-site transaction</li>
              <li>📱 G-CASH: MS SEAGOLD / 0999992020</li>
            </ul>
          </div>

          {/* Payment Terms Section */}
          <div className="payment-terms">
            <h3>PAYMENT TERMS:</h3>
            <h4>SOLO ROOM (CAPACITY FOR {unit.capacity} PERSON)</h4>
            <ul>
              <li>Monthly: ₱11,000.00</li>
              <li>Half Month (Strictly 15 Days): ₱7,500.00</li>
              <li>One Week (7 Days): ₱5,000.00</li>
              <li>Daily: ₱900.00</li>
            </ul>
            <div className="notes">
              <strong>NOTES:</strong>
              <ul>
                <li>Rules on EXCESS days in half-month & monthly basis apply and will be charged based on the daily rate.</li>
                <li>Room rates are subject to change without prior notice (effective 01-24).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//
// FilterBar Component: Displays filter options to refine unit search.
//
const FilterBar = ({ filters, handleFilterChange }) => (
  <div className="filter-bar-oval">
    <span className="filter-title">Find Your Perfect Unit</span>

    <div className="filter-date">
      <span className="filter-icon">📅</span>
      <input
        type="date"
        placeholder="Check In"
        value={filters.checkIn}
        onChange={(e) => handleFilterChange("checkIn", e.target.value)}
      />
    </div>

    <div className="filter-date">
      <span className="filter-icon">📅</span>
      <input
        type="date"
        placeholder="Check Out"
        value={filters.checkOut}
        onChange={(e) => handleFilterChange("checkOut", e.target.value)}
      />
    </div>

    <div className="filter-separator"></div>

    <div className="filter-select">
      <span className="filter-icon">👥</span>
      <select
        className="filter-select-dropdown"
        value={filters.group}
        onChange={(e) => handleFilterChange("group", e.target.value)}
      >
        <option value="">Group For</option>
        {[1, 2, 4, 6, 8, 10, 12, 14].map((group) => (
          <option key={group} value={group}>{group} Person(s)</option>
        ))}
      </select>
    </div>
  </div>
);

//
// Dormitory Component: Main Component displaying all units and applying filters.
//
const Dormitory = () => {
  // Sample units data
  const units = [
    { id: 1, capacity: 1, price: 900, image: "Room1.jpg", galleryImages: ["Room1.jpg", "Room2.jpg", "Room3.jpg"] },
    // Additional unit data...
  ];

  // State for filters and modals
  const [filters, setFilters] = useState({
    group: "",
    checkIn: "",
    checkOut: "",
  });

  const [openModals, setOpenModals] = useState(Array(units.length).fill(false));

  // Handle filter change
  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  // Open modal for a unit
  const openModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = true;
    setOpenModals(updatedModals);
  };

  // Close modal for a unit
  const closeModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = false;
    setOpenModals(updatedModals);
  };

  // Filter units based on selected criteria
  const filteredUnits = units.filter(
    (unit) =>
      (!filters.group || unit.capacity === Number(filters.group)) &&
      (!filters.checkIn || !filters.checkOut || true)
  );

  return (
    <div className="dormitory">
      {/* Header Section */}
      <header className="dormitory-header">
        <img src="RoomHeader.jpg" alt="Dormitory" className="dormitory-image" />
        <h1 className="title">WELCOME TO OUR UNITS</h1>
        <p className="description">
          Seagold Dormitory offers comfort and convenience with a student-friendly environment. Explore our cozy and affordable units just for you.
        </p>
      </header>

      {/* Filter Bar */}
      <FilterBar filters={filters} handleFilterChange={handleFilterChange} />

      {/* Units Container */}
      <div className="units-container">
        {filteredUnits.map((unit, index) => (
          <div key={unit.id}>
            <UnitCard unit={unit} index={index} openModal={openModal} />
            <UnitModal
              unit={unit}
              index={index}
              openModals={openModals}
              closeModal={closeModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dormitory;
