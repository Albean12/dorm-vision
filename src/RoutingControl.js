import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

function RoutingControl({ waypoints }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: waypoints.map((wp) => L.latLng(wp)),
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }],
      },
      createMarker: () => null, // Prevents default markers
      addWaypoints: false,      // Disables adding waypoints by dragging
      routeWhileDragging: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      show: false,              // Disable default instruction pane
    }).addTo(map);

    // Directly hide the routing container if it still appears
    const container = document.querySelector('.leaflet-routing-container');
    if (container) container.style.display = 'none';

    return () => {
      if (map && routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map, waypoints]);

  return null;
}

export default RoutingControl;