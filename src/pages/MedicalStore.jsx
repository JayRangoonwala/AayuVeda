import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { MapPin, Loader2 } from 'lucide-react';
import { calculateDistance } from '../components/utils';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for user location
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LocationMarker({ onLocationChange }) {
  const map = useMapEvents({
    click(e) {
      onLocationChange(e.latlng.lat, e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return null;
}


const MedicalStore = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [medicalShops, setMedicalShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchMedicalShops = async (latitude, longitude) => {
      try {
        const query = `
          [out:json][timeout:25];
          (
            node["shop"="chemist"](around:5000,${latitude},${longitude});
            node["amenity"="pharmacy"](around:5000,${latitude},${longitude});
          );
          out body;
          >;
          out skel qt;
        `;
  
        const response = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          body: query,
        });
  
        const data = await response.json();
  
        const shops = data.elements.map((shop) => ({
          id: shop.id,
          lat: shop.lat,
          lon: shop.lon,
          name: shop.tags.name || 'Unnamed Medical Shop',
          address: shop.tags.address || shop.tags['addr:street'] || 'Address not available',
          distance: calculateDistance(latitude, longitude, shop.lat, shop.lon),
        }));
        console.log(shops);
        setMedicalShops(shops.sort((a, b) => a.distance - b.distance));
      } catch (err) {
        setError('Failed to fetch medical shops. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleLocationChange = (lat, lng) => {
      setUserLocation([lat, lng]);
      fetchMedicalShops(lat, lng);
    };
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleLocationChange(latitude, longitude);
        },
        () => {
          setError('Please enable location services to use this app.');
          setLoading(false);
        }
      );
    }, []);
  
    if (loading) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Finding medical shops near you...</p>
          </div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            Nearby Medical Shops
          </h1>
  
          <div className="text-sm text-gray-600 mb-4">
            Click anywhere on the map to change your location
          </div>
  
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 h-[600px]">
              {userLocation && (
                <MapContainer center={userLocation} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <LocationMarker onLocationChange={handleLocationChange} />
                  <Marker position={userLocation} icon={userIcon}>
                    <Popup>Your Location</Popup>
                  </Marker>
                  {medicalShops.map((shop) => (
                    <Marker key={shop.id} position={[shop.lat, shop.lon]}>
                      <Popup>
                        <strong>{shop.name}</strong>
                        <br />
                        Distance: {shop.distance.toFixed(2)} km
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              )}
            </div>
  
            <div className="bg-white rounded-lg shadow-lg p-4 overflow-auto max-h-[600px]">
              <h2 className="text-xl font-semibold mb-4">Medical Shops List</h2>
              <div className="space-y-4">
                {medicalShops.map((shop) => (
                  <div key={shop.id} className="border-b border-gray-200 last:border-0 pb-4">
                    <h3 className="font-medium text-lg">{shop.name}</h3>
                    <p className="text-gray-600">{shop.address}</p>
                    <p className="text-sm text-blue-600 font-medium">{shop.distance.toFixed(2)} km away</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default MedicalStore
