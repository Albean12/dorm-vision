import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

function RoutingControl({ waypoints }) {
  const map = useMap();

  useEffect(() => {
    // Check if the map and waypoints with at least two points are available
    if (!map || waypoints.length < 2) return;

    // Initialize routing control only if map and waypoints are ready
    let routingControl = L.Routing.control({
      waypoints: waypoints.map((wp) => L.latLng(wp)),
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }],
      },
      createMarker: () => null, // Prevents default markers
      addWaypoints: false,      // Disables adding waypoints by dragging
      routeWhileDragging: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,  // Automatically fits the map to the route
      show: false,              // Disable the instruction pane
    }).addTo(map);

    // Directly hide the routing control container if it appears
    const container = document.querySelector('.leaflet-routing-container');
    if (container) container.style.display = 'none';

    // Cleanup function to safely remove routing control
    return () => {
      if (routingControl && map) {
        try {
          map.removeControl(routingControl);
          routingControl = null; // Explicitly set to null after removal
        } catch (error) {
          console.warn("Failed to remove routing control:", error);
        }
      }
    };
  }, [map, waypoints]);

  return null;
}

export default RoutingControl;
