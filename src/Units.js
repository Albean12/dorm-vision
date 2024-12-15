import React from 'react';
import './Units.css';

const Units = () => {
  return (
    <div className="Units">
      
    </div>
  );
};

export default Units;

const rentals = [
  { id: 1, title: "Male Bedspace for Rent in Quezon City", price: "3,500 monthly", image: "image1.jpg" },
  { id: 2, title: "Room near UST", price: "4,000 monthly", image: "image2.jpg" },
  { id: 3, title: "Condo Share w/ WiFi", price: "5,000 monthly", image: "image3.jpg" },
  // Add more rental items here
];

// Function to render rental cards dynamically
function renderRentals() {
  const rentalContainer = document.getElementById("rental-container");
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

document.addEventListener("DOMContentLoaded", renderRentals);
