import React, { useEffect, useState } from "react";
import "./RoomDetails.css";

const RoomDetails = () => {
  return (
    <div className="room-details-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span>🏠 &gt; Room 1</span>
      </div>

      {/* Room Details Header */}
      <div className="room-header">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src="Room1Main.jpg" alt="Main Room" />
          </div>
          <div className="side-images">
            <img src="unit1.jpg" alt="Side Image 1" />
            <img src="unit2.jpg" alt="Side Image 2" />
            <img src="unit3.jpg" alt="Side Image 3" />
            <img src="unit4.jpg" alt="Side Image 4" />
          </div>
        </div>

        {/* Room Information */}
        <div className="room-info">
          <h2 className="room-title">Room 1</h2>
          <h3>Unit 1 Room 1 Person(S)</h3>
          <p className="room-address">
            FERN (Amsir) Bldg, 827 P. Paredes Cor. S.H. Loyola Sts., Sampaloc, Manila
          </p>
          <p className="room-contact">
            <strong>Tel. #:</strong> (02) 8579-5709 / 0922-5927385
          </p>
          <p className="room-description">
            Experience a vibrant student community with modern amenities, unbeatable convenience,
            and a space designed for both living and learning.
          </p>

          {/* Room Offer */}
          <h4>ROOM OFFER:</h4>
          <ul className="room-offer">
            <li>❄️ Air Conditioner</li>
            <li>🛏️ Beddings</li>
            <li>🔒 Room Locker</li>
          </ul>

          {/* Amenities */}
          <h4>AMENITIES:</h4>
          <ul className="amenities">
            <li>📶 Wi-Fi</li>
            <li>📚 Study Hallway</li>
            <li>🍴 Canteen</li>
            <li>🖨️ Printer and Xerox Shop</li>
          </ul>

          {/* Payment Transaction */}
          <h4>Payment Transaction:</h4>
          <ul className="payment-methods">
            <li>💳 On-Site Transaction</li>
            <li>💻 Online Banking</li>
          </ul>
        </div>
      </div>

      {/* Payment Terms Section */}
      <div className="payment-terms">
        <h4>Payment Terms:</h4>
        <p>Monthly: <strong>₱11,000.00</strong></p>
        <p>Half Month (Strictly 15 Days): <strong>₱7,500.00</strong></p>
        <p>One Week (7 Days): <strong>₱5,000.00</strong></p>
        <p>Daily: <strong>₱900.00</strong></p>
      </div>

      {/* Notes Section */}
      <div className="room-notes">
        <h4>Notes:</h4>
        <p>
          <strong>Rules on EXCESS DAYS:</strong> In half month or monthly rents, it will be CHARGED
          BASED on Daily Basic Rate.
        </p>
        <p>For Capacity of 1-2 Persons Room: An Additional ₱3,500 applies.</p>
        <p>For OVERFLOW of 15 to 30 Days Stay Consideration: Half Month Basis WILL BE CHARGED.</p>
        <p><em>Room rates are subject to change without prior notice.</em></p>
      </div>
    </div>
  );
};

export default RoomDetails;
