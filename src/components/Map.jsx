import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to update the map view when the center changes
function MapUpdater({ center }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, 13, {
        animate: true,
        duration: 1
      });
    }
  }, [center, map]);

  return null;
}

// ✅ Renamed the component to avoid conflicts
function HospitalMapComponent({ userLocation, hospitals }) {
  if (!userLocation) return <p className="text-center text-gray-500">Loading map...</p>;

  const center = userLocation ? [userLocation.lat, userLocation.lon] : [0, 0];

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="w-full h-[400px] rounded-lg shadow-lg"
    >
      <MapUpdater center={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* User Location Marker */}
      <Marker position={center}>
        <Popup>
          <div className="font-semibold">Your Location</div>
        </Popup>
      </Marker>

      {/* Hospital Markers */}
      {hospitals && hospitals.length > 0 &&
        hospitals.map((hospital) => (
          <Marker 
            key={hospital.id} 
            position={[hospital.lat, hospital.lon]}
          >
            <Popup>
              <div className="font-semibold">{hospital.name}</div>
              <div className="text-sm">{hospital.address}</div>
              <div className="text-sm text-gray-600">
                {(hospital.distance / 1000).toFixed(2)} km away
              </div>
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  );
}

export default HospitalMapComponent;
