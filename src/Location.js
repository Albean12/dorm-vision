import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import RoutingControl from './RoutingControl';
import customMarkerIcon from './seagoldlogo.jpg';
import './Location.css';

// Custom icons for universities
import TUPIconImg from './Technological_University_of_the_Philippines_Seal.svg.png';
import USTIconImg from './UST-Seal.jpg';
import FEUIconImg from './Far_Easter_University.svg.png';

const dormIcon = new L.Icon({
  iconUrl: customMarkerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const TUPIcon = new L.Icon({
  iconUrl: TUPIconImg,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const USTIcon = new L.Icon({
  iconUrl: USTIconImg,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const FEUIcon = new L.Icon({
  iconUrl: FEUIconImg,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const dormPosition = [14.6036, 120.9889]; // Fern Building coordinates

const universities = [
  { id: 1, name: "Technological University of the Philippines (TUP Manila)", position: [14.5872, 120.9842], icon: TUPIcon },
  { id: 2, name: "University of Santo Tomas (UST)", position: [14.6096, 120.9893], icon: USTIcon },
  { id: 3, name: "Far Eastern University (FEU)", position: [14.6036, 120.9861], icon: FEUIcon },
];

// Component for centering the map on new coordinates
const PanToLocation = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, 14);
  }
  return null;
};

function LocationPage() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [showRouting, setShowRouting] = useState(false);
  const [userPosition, setUserPosition] = useState(null);
  const [panCoords, setPanCoords] = useState(null);

  const handleShowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [position.coords.latitude, position.coords.longitude];
          setUserPosition(coords);
          setSelectedUniversity(null);
          setShowRouting(true);
          setPanCoords(coords);
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve location. Please check your location settings.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleClearRoute = () => {
    setSelectedUniversity(null);
    setShowRouting(false);
    setUserPosition(null);
    setPanCoords(null);
  };

  const handleLegendClick = (position) => {
    setPanCoords(position);
    setSelectedUniversity(null);
    setShowRouting(false);
  };

  return (
    <div className="location-page">
      <h1>Our Locations</h1>
      <div className="map-and-legend-container">
        <MapContainer center={dormPosition} zoom={14} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* Dorm Marker */}
          <Marker position={dormPosition} icon={dormIcon}>
            <Popup>Fern Building (Dormitory)</Popup>
          </Marker>

          {/* University Markers */}
          {universities.map((uni) => (
            <Marker
              key={uni.id}
              position={uni.position}
              icon={uni.icon}
              eventHandlers={{
                click: () => {
                  setSelectedUniversity(uni.id);
                  setShowRouting(true);
                },
              }}
            >
              <Popup>{uni.name}</Popup>
            </Marker>
          ))}

          {/* User's Current Location Marker */}
          {userPosition && (
            <Marker
              position={userPosition}
              icon={new L.Icon({
                iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
              })}
            >
              <Popup>Your Current Location</Popup>
            </Marker>
          )}

          {/* Conditional RoutingControl */}
          {showRouting && (
            <RoutingControl
              waypoints={[
                userPosition || universities.find((uni) => uni.id === selectedUniversity).position,
                dormPosition,
              ]}
            />
          )}

          {/* Center map on new coordinates */}
          <PanToLocation coords={panCoords} />
        </MapContainer>

        {/* Map Legend */}
        <div className="map-legend">
          <h3>Map Legend</h3>
          <div onClick={() => handleLegendClick(dormPosition)} className="legend-item">
            <img src={customMarkerIcon} alt="Dormitory Icon" className="legend-icon" />
            Dormitory
          </div>
          {universities.map((uni) => (
            <div
              key={uni.id}
              onClick={() => handleLegendClick(uni.position)}
              className="legend-item"
            >
              <img src={uni.icon.options.iconUrl} alt={`${uni.name} Icon`} className="legend-icon" />
              {uni.name}
            </div>
          ))}
          <button onClick={handleShowLocation} className="location-btn-primary mt-3">
            Locate Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
