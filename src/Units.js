import React, { useState } from "react";
import "./Units.css";

// UnitCard Component: Displays a single unit's basic information.
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

// UnitModal Component: Displays detailed information about a unit in a modal.
const UnitModal = ({ unit, index, openModals, closeModal }) => {
  if (!openModals[index]) return null;

  return (
    <div className="modal-overlay" onClick={() => closeModal(index)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => closeModal(index)}>
          &times;
        </button>

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

        <div className="modal-info">
          <h1>UNIT {unit.id} ROOM FOR {unit.capacity} PERSON(S)</h1>
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

// Dormitory Component: Main Component displaying all units and applying filters.
const Dormitory = () => {
  const units = [
    {
      id: 1,
      capacity: 1,
      price: 900,
      image: "Room1.jpg",
      galleryImages: ["Room1.jpg", "Room2.jpg", "Room3.jpg"],
    },
    {
      id: 2,
      capacity: 2,
      price: 1500,
      image: "Room2.jpg",
      galleryImages: ["Room2.jpg", "Room3.jpg", "Room4.jpg"],
    },
    // Add more units here...
  ];

  const [filters, setFilters] = useState({
    group: "",
    checkIn: "",
    checkOut: "",
  });

  const [openModals, setOpenModals] = useState(Array(units.length).fill(false));

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const openModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = true;
    setOpenModals(updatedModals);
  };

  const closeModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = false;
    setOpenModals(updatedModals);
  };

  const filteredUnits = units.filter(
    (unit) =>
      (!filters.group || unit.capacity === Number(filters.group)) &&
      (!filters.checkIn || !filters.checkOut || true)
  );

  return (
    <div className="dormitory">
      <header className="dormitory-header">
        <div className="image-container">
          <img src="HOVER A.jpg" alt="Dormitory" className="dormitory-image" />
          <img src="HOVER B.jpg" alt="Dormitory" className="dormitory-image hidden" />
          <img src="HOVER C.jpg" alt="Dormitory" className="dormitory-image hidden" />
          <img src="HOVER D.jpg" alt="Dormitory" className="dormitory-image hidden" />
        </div>
        <h1 className="title">WELCOME TO OUR UNITS</h1>
        <p className="description">
          Seagold Dormitory offers comfort and convenience with a
          student-friendly environment. Explore our cozy and affordable units
          just for you.
        </p>
      </header>
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
