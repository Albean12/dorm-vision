import React, { useEffect } from 'react';
import './Units.css';

const Units = () => {
  useEffect(() => {
    const rentals = [
      { id: 1, title: "Male Bedspace for Rent in Quezon City", price: "3,500 monthly", image: "unit1.jpg" },
      { id: 2, title: "Room near UST", price: "4,000 monthly", image: "unit2.jpg" },
      { id: 3, title: "Condo Share w/ WiFi", price: "5,000 monthly", image: "unit3.jpg" },
      // Add more rental items here
    ];

    const renderRentals = () => {
      const rentalContainer = document.getElementById("rental-container");
      if (rentalContainer) {
        rentalContainer.innerHTML = ""; // Clear existing content
        rentals.forEach((rental) => {
          const rentalCard = document.createElement("div");
          rentalCard.classList.add("rental-card");
          rentalCard.innerHTML = `
            <img src="${rental.image}" alt="${rental.title}" class="rental-image" />
            <h3 class="rental-title">${rental.title}</h3>
            <p class="rental-price">${rental.price}</p>
            <button class="details-button">View Details</button>
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
