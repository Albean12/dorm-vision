import React, { useEffect, useState } from 'react';
import './Units.css';

const Units = () => {
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [filters, setFilters] = useState({ price: 'All', features: [] });

  const rentals = [
    { id: 1, title: "Solo Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 11000, features: ["Aircon", "Wifi"] },
    { id: 2, title: "Duo Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 6000, features: ["Aircon", "Wifi"] },
    { id: 3, title: "Quadro Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 5000, features: ["Wifi"] },
    { id: 4, title: "Sixto Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 7000, features: ["Wifi", "Aircon"] },
    { id: 5, title: "Otso Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 8000, features: ["Wifi"] },
    { id: 6, title: "XL Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 4500, features: ["Aircon"] },
    { id: 7, title: "Large Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 3500, features: ["Aircon"] },
    { id: 8, title: "Mega Room", inclusion: "Air Conditioned", inclusion2: "Wifi", price: 10000, features: ["Aircon", "Wifi"] },
  ];

  const filterRentals = (type, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (type === 'price') {
        newFilters.price = prevFilters.price === value ? 'All' : value;
      } else if (type === 'features') {
        newFilters.features = prevFilters.features.includes(value)
          ? prevFilters.features.filter((feature) => feature !== value)
          : [...prevFilters.features, value];
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
        filters.features.some((feature) => rental.features.includes(feature));

      return matchesPrice && matchesFeatures;
    });
    setFilteredRentals(filtered);
  }, [filters]);

  return (
    <div className="Units">
      <div className="filter-section">
        <button onClick={() => filterRentals('price', 'Below ₱5,000')} className={filters.price === 'Below ₱5,000' ? 'active' : ''}>
          <span className="icon peso-icon"></span> Below ₱5,000
        </button>
        <button onClick={() => filterRentals('price', '₱6,000 - ₱8,000')} className={filters.price === '₱6,000 - ₱8,000' ? 'active' : ''}>
          <span className="icon peso-icon"></span> ₱6,000 to ₱8,000
        </button>
        <button onClick={() => filterRentals('price', '₱9,000 - ₱11,000')} className={filters.price === '₱9,000 - ₱11,000' ? 'active' : ''}>
          <span className="icon peso-icon"></span> ₱9,000 to ₱11,000
        </button>
        <button onClick={() => filterRentals('features', 'Wifi')} className={filters.features.includes('Wifi') ? 'active' : ''}>
          <span className="icon wifi-icon"></span> Wifi / Internet
        </button>
        <button onClick={() => filterRentals('features', 'Aircon')} className={filters.features.includes('Aircon') ? 'active' : ''}>
          <span className="icon aircon-icon"></span> Aircon
        </button>
      </div>
      <div id="rental-container">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="rental-card">
            <div className="rental-header">
              <span className="verified-badge">{`Room ${rental.id}`}</span>
            </div>
            <img src={rental.image} alt={rental.title} className="rental-image" />
            <div className="rental-content">
              <h3 className="rental-title">{rental.title}</h3>
              <p className="rental-inclusion">{`${rental.inclusion} and ${rental.inclusion2}`}</p>
              <p className="rental-price">Starts at <strong>₱{rental.price.toLocaleString()}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Units;
