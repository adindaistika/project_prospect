import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

export default function LocationPicker(prop) {
  const {onLocationChange, location} = prop;
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setSelectedLocation({ lat, lng });
    onLocationChange({ lat, lng });
  };

  useEffect(() => {
    location(selectedLocation)
  },[selectedLocation])

  return (
    <LoadScript googleMapsApiKey="AIzaSyAnmM8OLUvMzuqkyv7Jjjai6kUkYtWMIjk">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: 0, lng: 0 }}
        zoom={12}
        onClick={handleMapClick}
      >
        {selectedLocation && (
          <Marker
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
