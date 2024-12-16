import React, { useEffect, useState } from "react";
import "./Units.css";

const Units = () => {
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [filters, setFilters] = useState({
    price: "All",
    availability: "All",
  });
  const [carouselIndices, setCarouselIndices] = useState({});
  const [selectedRental, setSelectedRental] = useState(null);

  // Sample data for six room units
  const rentals = [
    {
      id: 1,
      title: "Unit 1 - Single Room",
      description:
        "A vibrant student community with modern amenities and a space designed for both living and learning.",
      price: 11000,
      availability: "1",
      images: ["unit1.jpg", "unit2.jpg", "unit3.jpg"],
      amenities: ["Air Conditioner", "Beddings", "Room Locker"],
      paymentTerms: {
        monthly: "₱11,000.00",
        halfMonth: "₱7,500.00",
        weekly: "₱5,000.00",
        daily: "₱900.00",
      },
    },
    {
      id: 2,
      title: "Unit 2 - Shared Room",
      description:
        "Affordable shared room with all necessary amenities for a comfortable student life.",
      price: 7500,
      availability: "2",
      images: ["unit4.jpg", "unit3.jpg", "unit2.jpg"],
      amenities: ["WiFi", "Study Desk", "Beddings"],
      paymentTerms: {
        monthly: "₱7,500.00",
        halfMonth: "₱5,000.00",
        weekly: "₱3,500.00",
        daily: "₱700.00",
      },
    },
    {
      id: 3,
      title: "Unit 3 - Deluxe Room",
      description:
        "Deluxe room with spacious living space, modern furniture, and high-end amenities.",
      price: 15000,
      availability: "1",
      images: ["unit1.jpg", "unit2.jpg", "unit3.jpg"],
      amenities: ["Private Bathroom", "Air Conditioner", "WiFi", "Kitchenette"],
      paymentTerms: {
        monthly: "₱15,000.00",
        halfMonth: "₱10,000.00",
        weekly: "₱7,000.00",
        daily: "₱1,200.00",
      },
    },
    {
      id: 4,
      title: "Unit 4 - Double Shared Room",
      description:
        "A budget-friendly double shared room ideal for students looking to split costs.",
      price: 6000,
      availability: "2",
      images: ["unit4.jpg", "unit3.jpg", "unit2.jpg"],
      amenities: ["WiFi", "Shared Bathroom", "Study Table"],
      paymentTerms: {
        monthly: "₱6,000.00",
        halfMonth: "₱4,000.00",
        weekly: "₱3,000.00",
        daily: "₱600.00",
      },
    },
    {
      id: 5,
      title: "Unit 5 - Premium Suite",
      description:
        "A luxurious suite for students seeking privacy and top-tier living amenities.",
      price: 18000,
      availability: "1",
      images: ["unit1.jpg", "unit2.jpg", "unit3.jpg"],
      amenities: [
        "Private Bathroom",
        "Kitchenette",
        "Living Room",
        "High-Speed WiFi",
      ],
      paymentTerms: {
        monthly: "₱18,000.00",
        halfMonth: "₱12,000.00",
        weekly: "₱8,000.00",
        daily: "₱1,500.00",
      },
    },
    {
      id: 6,
      title: "Unit 6 - Budget Room",
      description:
        "Compact and cozy room perfect for students on a tight budget.",
      price: 5000,
      availability: "2",
      images: ["unit4.jpg", "unit3.jpg", "unit2.jpg"],
      amenities: ["WiFi", "Beddings", "Shared Bathroom"],
      paymentTerms: {
        monthly: "₱5,000.00",
        halfMonth: "₱3,500.00",
        weekly: "₱2,500.00",
        daily: "₱500.00",
      },
    },
  ];

  // Handle Filter Changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Apply filters to rentals list
  useEffect(() => {
    let filtered = rentals;

    if (filters.price !== "All") {
      const priceLimit = parseInt(filters.price, 10);
      filtered = filtered.filter((rental) => rental.price <= priceLimit);
    }

    if (filters.availability !== "All") {
      filtered = filtered.filter(
        (rental) => rental.availability === filters.availability
      );
    }

    setFilteredRentals(filtered);
  }, [filters]);

  // Handle image carousel navigation
  const handleCarousel = (rentalId, direction) => {
    setCarouselIndices((prev) => {
      const currentIndex = prev[rentalId] || 0;
      const totalImages = rentals.find((r) => r.id === rentalId).images.length;

      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return { ...prev, [rentalId]: newIndex };
    });
  };

  const openModal = (rental) => {
    setSelectedRental(rental);
  };

  const closeModal = () => {
    setSelectedRental(null);
  };

  return (
    <div className="Units">
      <h1 className="units-title">Available Rooms</h1>

      {/* Filters */}
      <div className="filters">
        <label>
          Price:
          <select
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="6000">Up to ₱6,000</option>
            <option value="8000">Up to ₱8,000</option>
            <option value="11000">Up to ₱11,000</option>
            <option value="15000">Up to ₱15,000</option>
          </select>
        </label>

        <label>
          Availability:
          <select
            name="availability"
            value={filters.availability}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="1">Single Available</option>
            <option value="2">Shared Available</option>
          </select>
        </label>
      </div>

      {/* Rentals List */}
      <div id="rental-container">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="rental-card">
            <h3>{rental.title}</h3>
            <p className="price">Monthly Price: ₱{rental.price}</p>
            <button className="details-button" onClick={() => openModal(rental)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRental && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="home-icon" onClick={closeModal}>
              🏠
            </button>

            <h2 className="modal-title">{selectedRental.title}</h2>

            {/* Image Carousel */}
            <div className="modal-carousel">
              <button
                className="carousel-btn prev"
                onClick={() => handleCarousel(selectedRental.id, "prev")}
              >
                ←
              </button>
              <img
                src={selectedRental.images[carouselIndices[selectedRental.id] || 0]}
                alt={selectedRental.title}
                className="modal-image"
              />
              <button
                className="carousel-btn next"
                onClick={() => handleCarousel(selectedRental.id, "next")}
              >
                →
              </button>
            </div>

            {/* Room Details */}
            <div className="room-details">
              <p>{selectedRental.description}</p>
              <div className="amenities">
                <h4>Room Amenities:</h4>
                <ul>
                  {selectedRental.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="payment-terms">
                <h4>Payment Terms:</h4>
                <ul>
                  <li>Monthly: {selectedRental.paymentTerms.monthly}</li>
                  <li>Half Month: {selectedRental.paymentTerms.halfMonth}</li>
                  <li>Weekly: {selectedRental.paymentTerms.weekly}</li>
                  <li>Daily: {selectedRental.paymentTerms.daily}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Units;
