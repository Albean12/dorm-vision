import React, { useState } from "react";
import "./Units.css";

const Dormitory = () => {
  // List of units with their properties
  const units = [
    { id: 1, capacity: 1, price: 900, image: "/src/unitimage/unit1.jpg" },
    { id: 2, capacity: 2, price: 600, image: "/src/unitimage/unit2.jpg" },
    { id: 3, capacity: 4, price: 450, image: "/src/unitimage/unit3.jpg" },
    { id: 4, capacity: 6, price: 450, image:"/src/unitimage/unit4.jpg" },
    { id: 5, capacity: 8, price: 450, image: "/src/unitimage/unit5.jpg" },
    { id: 6, capacity: 10, price: 450, image: "/src/unitimage/unit3.jpg" },
    { id: 7, capacity: 12, price: 450, image: "/src/unitimage/unit2.jpg" },
    { id: 8, capacity: 14, price: 450, image: "/src/unitimage/unit4.jpg" },
  ];

  // Filters for check-in, check-out, and group size
  const [filters, setFilters] = useState({ checkIn: "", checkOut: "", group: "" });

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  // Apply filters on units based on selected group
  const filteredUnits = units.filter(
    (unit) => !filters.group || unit.capacity === Number(filters.group)
  );

  return (
    <div className="dormitory">
      {/* Dormitory Header Section */}
      <div className="dormitory-header">
        <img
          src="dormitory.jpg"  // Ensure this image path is correct
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
        <h2 className="filter-title">Find Your Perfect Unit</h2> {/* Filter Title */}
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
      </div>

      {/* Units Section */}
      <div className="units-container">
        {filteredUnits.map((unit) => (
          <div key={unit.id} className="unit-card">
            <img src={unit.image} alt={`Unit ${unit.id}`} className="unit-image" />
            <h3 className="unit-title">Unit {unit.id}</h3>
            <p className="unit-capacity">Capacity for {unit.capacity} Person(s)</p>
            <p className="unit-price">From PHP {unit.price}</p>
            <button className="view-details" onClick={() => window.location.href = `/unit/${unit.id}`}>View Details</button> {/* Redirect to Unit Details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dormitory;
