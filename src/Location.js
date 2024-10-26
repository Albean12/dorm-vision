import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import RoutingControl from './RoutingControl';
import customMarkerIcon from './seagoldlogo.jpg';

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
  { id: 1, name: "Technological University of the Philippines (TUP Manila)", position: [14.5869, 120.9870], icon: TUPIcon },
  { id: 2, name: "University of Santo Tomas (UST)", position: [14.6096, 120.9893], icon: USTIcon },
  { id: 3, name: "Far Eastern University (FEU)", position: [14.6004, 120.9903], icon: FEUIcon },
];

function LocationPage() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <div className="location-page">
      <h1>Our Locations</h1>
      <MapContainer center={dormPosition} zoom={14} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Dorm Marker */}
        <Marker position={dormPosition} icon={dormIcon}>
          <Popup>Fern Building</Popup>
        </Marker>

        {/* Custom markers for each university */}
        {universities.map((uni) => (
          <Marker
            key={uni.id}
            position={uni.position}
            icon={uni.icon}
            eventHandlers={{
              click: () => {
                setSelectedUniversity(uni.id); // Set the selected university on click
              },
            }}
          >
            <Popup>{uni.name}</Popup>
          </Marker>
        ))}

        {/* Conditional RoutingControl based on selected university */}
        {selectedUniversity && (
          <RoutingControl
            waypoints={[
              universities.find((uni) => uni.id === selectedUniversity).position,
              dormPosition,
            ]}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default LocationPage;
