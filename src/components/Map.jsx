import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
  const containerStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = location;

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
