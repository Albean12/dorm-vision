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

  // Filters for group size and dates
  const [filters, setFilters] = useState({
    group: "",
    checkIn: "",
    checkOut: "",
  });

  // Track modal states for each unit
  const [openModals, setOpenModals] = useState(
    Array(units.length).fill(false) // Tracks whether each modal is open
  );

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  // Open a specific modal
  const openModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = true;
    setOpenModals(updatedModals);
  };

  // Close a specific modal
  const closeModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = false;
    setOpenModals(updatedModals);
  };

  // Apply filters to units based on group size
  const filteredUnits = units.filter(
    (unit) =>
      (!filters.group || unit.capacity === Number(filters.group)) &&
      (filters.checkIn === "" || filters.checkOut === "" || true) // Placeholder for date logic
  );

  return (
    <div className="dormitory">
      {/* Dormitory Header Section */}
      <div className="dormitory-header">
        <img src="RoomHeader.jpg" alt="Dormitory" className="dormitory-image" />
        <h1 className="title">WELCOME TO OUR UNITS</h1>
        <p className="description">
          Seagold Dormitory offers comfort and convenience with a student-friendly
          environment. Explore our cozy and affordable units just for you.
        </p>
      </div>

      {/* Filter Section */}
      <div className="filter-bar-oval">
        <span className="filter-title">Find Your Perfect Unit</span>

        {/* Check-In Date */}
        <div className="filter-date">
          <span className="filter-icon">📅</span>
          <input
            type="date"
            placeholder="Check In"
            value={filters.checkIn}
            onChange={(e) => handleFilterChange("checkIn", e.target.value)}
          />
        </div>

        {/* Check-Out Date */}
        <div className="filter-date">
          <span className="filter-icon">📅</span>
          <input
            type="date"
            placeholder="Check Out"
            value={filters.checkOut}
            onChange={(e) => handleFilterChange("checkOut", e.target.value)}
          />
        </div>

        {/* Separator */}
        <div className="filter-separator"></div>

        {/* Group Size Dropdown */}
        <div className="filter-select">
          <span className="filter-icon">👥</span>
          <select
            className="filter-select-dropdown"
            value={filters.group}
            onChange={(e) => handleFilterChange("group", e.target.value)}
          >
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
      </div>

      {/* Units Section */}
      <div className="units-container">
        {filteredUnits.map((unit, index) => (
          <div key={unit.id} className="unit-card">
            <img src={unit.image} alt={`Unit ${unit.id}`} className="unit-image" />
            <h3 className="unit-title">Unit {unit.id}</h3>
            <p className="unit-capacity">Capacity for {unit.capacity} Person(s)</p>
            <p className="unit-price">From PHP {unit.price}</p>
            <button className="view-details" onClick={() => openModal(index)}>
              View Details
            </button>

            {/* Individual Modal for Each Unit */}
            {openModals[index] && (
              <div className="modal-overlay" onClick={() => closeModal(index)}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button className="modal-close" onClick={() => closeModal(index)}>
                    &times;
                  </button>

                  {/* Modal Header with Main Image and Gallery */}
                  <div className="modal-header">
                    <img
                      src={unit.image}
                      alt={`Unit ${unit.id}`}
                      className="modal-main-image"
                    />
                    <div className="modal-gallery">
                      <img src="Room1.jpg" alt="Gallery 1" />
                      <img src="Room2.jpg" alt="Gallery 2" />
                      <img src="Room3.jpg" alt="Gallery 3" />
                      <img src="Room4.jpg" alt="Gallery 4" />
                    </div>
                  </div>

                  {/* Modal Information Section */}
                  <div className="modal-info">
                    <h1>
                      UNIT {unit.id} ROOM FOR {unit.capacity} PERSON(S)
                    </h1>
                    <h2>SEAGOLD DORMITORIES, MANILA</h2>

                    {/* Room to Offer Section */}
                    <div className="room-offer">
                      <h3>ROOM TO OFFER:</h3>
                      <div className="room-features">
                        <span>🛏️ Air Conditioned</span>
                        <span>🛋️ Foam/ Mattress</span>
                        <span>🛌 Beddings</span>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="description">
                      <h3>DESCRIPTION:</h3>
                      <p>
                        Experience a vibrant student community with modern
                        amenities, unbeatable convenience, and a space designed for
                        both living and learning!
                      </p>
                    </div>

                    {/* Amenities Section */}
                    <div className="amenities">
                      <h3>AMENITIES:</h3>
                      <ul>
                        <li>📖 Study Hallway</li>
                        <li>📄 Xerox Photocopy</li>
                        <li>🍴 Canteen</li>
                        <li>🏫 Lemar Review Hub</li>
                      </ul>
                    </div>

                    {/* Payment Transaction Section */}
                    <div className="payment-transaction">
                      <h3>PAYMENT TRANSACTION:</h3>
                      <ul>
                        <li>💳 On-site transaction</li>
                        <li>📱 G-CASH: MS SEAGOLD / 0999992020</li>
                      </ul>
                    </div>

                    {/* Payment Terms Section */}
                    <div className="payment-terms">
                      <h3>PAYMENT TERMS FOR:</h3>
                      <h4>SOLO ROOM (CAPACITY FOR {unit.capacity} PERSON)</h4>
                      <ul>
                        <li>Monthly: ₱11,000.00</li>
                        <li>Half Month (Strictly 15 Days): ₱7,500.00</li>
                        <li>One Week (7 Days): ₱5,000.00</li>
                        <li>Daily: ₱900.00</li>
                      </ul>
                      <p className="notes">
                        <strong>NOTES:</strong>
                        <ul>
                          <li>
                            Rules on EXCESS days in half month & monthly basis apply
                            and will be charged based on the daily rate.
                          </li>
                          <li>
                            Room rates are subject to change without prior notice
                            (effective 01-24).
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dormitory;
