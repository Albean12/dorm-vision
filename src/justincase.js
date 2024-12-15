import React, { useEffect, useState } from 'react';
import './Units.css';

const Units = () => {
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [filters, setFilters] = useState({ price: 'All', features: [] });

  const rentals = [
    { id: 1, title: "Solo Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 11000, availability: "1 Capacity", image: "unit1.jpg", tag: "Room 1", features: ["Aircon", "Wifi"] },
    { id: 2, title: "Duo Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 6000, availability: "2 Capacity", image: "unit2.jpg", tag: "Room 2", features: ["Wifi"] },
    { id: 3, title: "Quadro Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 5000, availability: "4 Capacity", image: "unit3.jpg", tag: "Room 3", features: ["Wifi", "Aircon"] },
    { id: 4, title: "Sixto Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 7000, availability: "6 Capacity", image: "unit1.jpg", tag: "Room 4", features: ["Wifi", "Aircon"] },
    { id: 5, title: "Otso Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 8000, availability: "8 Capacity", image: "unit2.jpg", tag: "Room 5", features: ["Wifi"] },
    { id: 6, title: "XL Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 4500, availability: "12 Capacity", image: "unit1.jpg", tag: "Room 6", features: ["Aircon","Wifi"] },
    { id: 7, title: "Large Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 3500, availability: "14 Capacity", image: "unit2.jpg", tag: "Room 7", features: ["Aircon","Wifi"] },
    { id: 8, title: "Mega Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 10000, availability: "10 Capacity", image: "unit3.jpg", tag: "Room 8", features: ["Wifi"] },
  ];

  const filterRentals = (type, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (type === 'price') {
        newFilters.price = prevFilters.price === value ? 'All' : value; // Toggle price filter
      } else if (type === 'features') {
        newFilters.features = prevFilters.features.includes(value)
          ? prevFilters.features.filter((feature) => feature !== value) // Undo feature filter
          : [...prevFilters.features, value]; // Add feature filter
      }
      return newFilters;
    });
  };

  useEffect(() => {
    const filtered = rentals.filter((rental) => {
      const matchesPrice =
        filters.price === 'All' ||
        (filters.price === 'Below ₱5,000' && rental.price < 5000) ||
        (filters.price === '₱6,000 - ₱8,000' && rental.price >= 6000 && rental.price <= 8000) ||
        (filters.price === '₱9,000 - ₱11,000' && rental.price >= 9000 && rental.price <= 11000);

      const matchesFeatures =
        filters.features.length === 0 ||
        filters.features.some((feature) => rental.features.includes(feature)); // Match ANY feature

      return matchesPrice && matchesFeatures;
    });
    setFilteredRentals(filtered);
  }, [filters]);

  return (
    <div className="Units">
      <div className="filter-section">
        <button onClick={() => filterRentals('price', 'Below ₱5,000')} className={filters.price === 'Below ₱5,000' ? 'active' : ''}>Below ₱5,000</button>
        <button onClick={() => filterRentals('price', '₱6,000 - ₱8,000')} className={filters.price === '₱6,000 - ₱8,000' ? 'active' : ''}>₱6,000 to ₱8,000</button>
        <button onClick={() => filterRentals('price', '₱9,000 - ₱11,000')} className={filters.price === '₱9,000 - ₱11,000' ? 'active' : ''}>₱9,000 to ₱11,000</button>
        <button onClick={() => filterRentals('features', 'Wifi')} className={filters.features.includes('Wifi') ? 'active' : ''}>Wifi / Internet</button>
        <button onClick={() => filterRentals('features', 'Aircon')} className={filters.features.includes('Aircon') ? 'active' : ''}>Air Conditioned</button>
      </div>
      <div id="rental-container">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="rental-card">
            <div className="rental-header">
              <span className="verified-badge">{rental.tag}</span>
            </div>
            <img src={rental.image} alt={rental.title} className="rental-image" />
            <div className="rental-content">
              <h3 className="rental-title">{rental.title}</h3>
              <p className="rental-inclusion">{`${rental.inclusion} and ${rental.inclusion2}`}</p>
              <p className="rental-price">Starts at <strong>₱{rental.price.toLocaleString()}</strong></p>
              <p className="rental-availability">{rental.availability}</p>
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Units;
