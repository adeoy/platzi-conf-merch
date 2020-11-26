import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 22.801838, lng: -98.4070255,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;
