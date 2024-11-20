import React, { useState } from "react";
import "./Units.css";

const Dormitory = () => {
  const units = [
    { id: 1, capacity: 1, price: 900, image: "Room1.jpg" },
    { id: 2, capacity: 2, price: 600, image: "Room2.jpg" },
    { id: 3, capacity: 4, price: 450, image: "Room3.jpg" },
    { id: 4, capacity: 6, price: 450, image: "Room4.jpg" },
    { id: 5, capacity: 8, price: 450, image: "Room5.jpg" },
    { id: 6, capacity: 10, price: 450, image: "Room3.jpg" },
    { id: 7, capacity: 12, price: 450, image: "Room2.jpg" },
    { id: 8, capacity: 14, price: 450, image: "Room1.jpg" },
  ];

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (unit) => {
    setSelectedUnit(unit);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUnit(null);
    setIsModalOpen(false);
  };

  return (
    <div className="dormitory">
      {/* Dormitory Header Section */}
      <div className="dormitory-header">
        <img
          src="RoomHeader.jpg"
          alt="Dormitory"
          className="dormitory-image"
        />
        <h1 className="title">Seagold Dormitories, Manila</h1>
        <p className="description">
          Seagold Dormitory offers comfort and convenience with a student-friendly
          environment. Explore our cozy and affordable units.
        </p>
      </div>

      {/* Filter Section */}
      <div className="filter-bar-oval">
        <h2 className="filter-title">Find Your Perfect Unit</h2>
        <input
          type="date"
          className="filter-input"
          placeholder="Check-in"
        />
        <input
          type="date"
          className="filter-input"
          placeholder="Check-out"
        />
        <select className="filter-select">
          <option value="">Group For</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="4">4 Persons</option>
          <option value="6">6 Persons</option>
          <option value="8">8 Persons</option>
          <option value="10">10 Persons</option>
          <option value="12">12 Persons</option>
          <option value="14">14 Persons</option>
        </select>
      </div>

      {/* Units Section */}
      <div className="units-container">
        {units.map((unit) => (
          <div key={unit.id} className="unit-card">
            <img src={unit.image} alt={`Unit ${unit.id}`} className="unit-image" />
            <h3 className="unit-title">Unit {unit.id}</h3>
            <p className="unit-capacity">Capacity for {unit.capacity} Person(s)</p>
            <p className="unit-price">From PHP {unit.price}</p>
            <button
              className="view-details"
              onClick={() => openModal(unit)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {isModalOpen && selectedUnit && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <img
                src={selectedUnit.image}
                alt={`Unit ${selectedUnit.id}`}
                className="modal-main-image"
              />
            </div>
            <div className="modal-info">
              <h1>Unit {selectedUnit.id} Room for {selectedUnit.capacity} Person(s)</h1>
              <h2>Seagold Dormitories, Manila</h2>
              <p className="modal-unit-price">
                Start at <span>₱{selectedUnit.price}</span> Daily
              </p>
              <p>Description: Experience a vibrant student community with modern amenities, unbeatable convenience, and a space designed for both living and learning!</p>
              <button className="modal-action" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dormitory;
