import React from "react";
import "./RoomDetails.css";

const RoomDetails = () => {
  return (
    <div className="room-details-container">
  <div className="breadcrumb">🏠 {">"} Room 1</div>
  <div className="room-header">
    <div className="image-gallery">
      <div className="main-image">
        <img src="RoomMain.jpg" alt="Main Room" />
      </div>
      <div className="side-images">
        <img src="Room1.jpg" alt="Side 1" />
        <img src="Room2.jpg" alt="Side 2" />
        <img src="Room3.jpg" alt="Side 3" />
        <img src="Room4.jpg" alt="Side 4" />
      </div>
    </div>
    <div className="room-info">
      <h1 className="room-title">Room 1</h1>
      <h3>Unit 1 Room 1 Person(s)</h3>
      <p className="room-address">
        FERN (Amsir) Bldg, 827 P. Paredes Cor. S.H. Loyola Sts., Sampaloc, Manila
      </p>
      <p className="room-contact">
        <strong>Tel. #:</strong> (02) 8579-5709 / 0922-5927385
      </p>
      <p className="room-description">
        Experience a vibrant student community with modern amenities and unbeatable convenience.
      </p>
      <h4>Room Offer:</h4>
      <ul>
        <li>❄️ Air Conditioner</li>
        <li>🛏️ Beddings</li>
        <li>🔒 Room Locker</li>
      </ul>
      <h4>Amenities:</h4>
      <ul>
        <li>📶 Wi-Fi</li>
        <li>📚 Study Hallway</li>
        <li>🍴 Canteen</li>
        <li>🖨️ Printer and Xerox Shop</li>
      </ul>
    </div>
  </div>
  <div className="payment-terms">
    <h4>Payment Terms:</h4>
    <p>Monthly: <strong>₱11,000.00</strong></p>
    <p>Half Month: <strong>₱7,500.00</strong></p>
    <p>One Week: <strong>₱5,000.00</strong></p>
    <p>Daily: <strong>₱900.00</strong></p>
  </div>
  <div className="room-notes">
    <h4>Notes:</h4>
    <p><strong>Rules on Excess Days:</strong> Charges apply on a daily basis.</p>
    <p><strong>Capacity:</strong> Additional ₱3,500 for 1-2 Persons Room.</p>
  </div>
</div>
  );
};

export default RoomDetails;
