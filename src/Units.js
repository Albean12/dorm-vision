import React, { useEffect } from 'react';
import './Units.css';

const Units = () => {
  useEffect(() => {
    const rentals = [
      { id: 1, title: "Male Bedspace for Rent in Quezon City at The Avenue Residences", location: "Talipapa, Quezon City", price: "3,500 monthly", availability: "2 Available", image: "unit1.jpg", verified: true, tag: "Dormy 474" },
      { id: 2, title: "Room near UST", location: "Sampaloc, Manila", price: "4,000 monthly", availability: "1 Available", image: "unit2.jpg", verified: false, tag: "Dormy 123" },
      { id: 3, title: "Condo Share w/ WiFi", location: "Taguig", price: "5,000 monthly", availability: "3 Available", image: "unit3.jpg", verified: true, tag: "Dormy 567" },
      { id: 4, title: "Condo Share w/ WiFi", location: "Taguig", price: "5,000 monthly", availability: "3 Available", image: "unit3.jpg", verified: true, tag: "Dormy 567" },
      { id: 5, title: "Condo Share w/ WiFi", location: "Taguig", price: "5,000 monthly", availability: "3 Available", image: "unit3.jpg", verified: true, tag: "Dormy 567" },
      
    ];

    const renderRentals = () => {
      const rentalContainer = document.getElementById("rental-container");
      if (rentalContainer) {
        rentalContainer.innerHTML = ""; // Clear existing content
        rentals.forEach((rental) => {
          const rentalCard = document.createElement("div");
          rentalCard.classList.add("rental-card");
          rentalCard.innerHTML = `
            <div class="rental-header">
              ${rental.verified ? '<span class="verified-badge">Verified</span>' : ''}
            </div>
            <img src="${rental.image}" alt="${rental.title}" class="rental-image" />
            <div class="rental-content">
              <span class="rental-tag">${rental.tag}</span>
              <h3 class="rental-title">${rental.title}</h3>
              <p class="rental-location">${rental.location}</p>
              <p class="rental-price">Starts at <strong>₱${rental.price}</strong></p>
              <p class="rental-availability">${rental.availability}</p>
              <button class="details-button">View Details</button>
            </div>
          `;
          rentalContainer.appendChild(rentalCard);
        });
      }
    };

    renderRentals();
  }, []);

  return (
    <div className="Units">
      <div id="rental-container"></div>
    </div>
  );
};

export default Units;
