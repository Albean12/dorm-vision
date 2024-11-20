import React, { useRef, useState } from "react";
import "./Unit.css";
const Dormitory = () => {

  const units = [
    { id: 1, capacity: 1, price: 900, image: "unit1.jpg" },
    { id: 2, capacity: 2, price: 600, image: "unit2.jpg" },
    { id: 3, capacity: 4, price: 450, image: "unit3.jpg" },
    { id: 4, capacity: 6, price: 450, image: "unit4.jpg" },
    { id: 5, capacity: 8, price: 450, image: "unit5.jpg" },
    { id: 6, capacity: 10, price: 450, image: "unit1.jpg" },
    { id: 7, capacity: 12, price: 450, image: "unit2.jpg" },
    { id: 8, capacity: 14, price: 450, image: "unit3.jpg" },
  ];

  const [filters, setFilters] = useState({ checkIn: "", checkOut: "", group: "" });

  const unitsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = unitsContainerRef.current;
    const scrollAmount = 300; // Adjust for desired scroll distance
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const filteredUnits = units.filter(
    (unit) => !filters.group || unit.capacity === Number(filters.group)
  );

  return (
    <div className="dormitory">
      {/* Dormitory Header */}
      <div className="dormitory-header">
        <img
          src="dormheader.jpg"
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
        <input
          type="date"
          className="filter-input"
          value={filters.checkIn}
          onChange={(e) => handleFilterChange("checkIn", e.target.value)}
          placeholder="Check-in"
        />
        <input
          type="date"
          className="filter-input"
          value={filters.checkOut}
          onChange={(e) => handleFilterChange("checkOut", e.target.value)}
          placeholder="Check-out"
        />
        <select
          className="filter-select"
          value={filters.group}
          onChange={(e) => handleFilterChange("group", e.target.value)}
        >
          <option value="">Group For</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="6">6 Persons</option>
          <option value="8">8 Persons</option>
          <option value="10">10 Persons</option>
          <option value="12">12 Persons</option>
          <option value="14">14 Persons</option>
        </select>
        <button className="find-button">Find Your Perfect Unit</button>
      </div>

      {/* Units Section with Navigation */}
      <div className="scroll-navigation">
        <div className="units-container" ref={unitsContainerRef}>
          {filteredUnits.map((unit) => (
            <div key={unit.id} className="unit-card">
              <img src={unit.image} alt={`Unit ${unit.id}`} className="unit-image" />
              <h3 className="unit-title">Unit {unit.id}</h3>
              <p className="unit-capacity">Capacity for {unit.capacity} Person(s)</p>
              <p className="unit-price">From PHP <span className="price">{unit.price}</span></p>
              <button className="view-details">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dormitory;
