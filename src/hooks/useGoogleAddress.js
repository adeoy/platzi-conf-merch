import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw`;

  useEffect(async () => {
    const resp = await axios(API);
    if (resp.status === 200) {
      const { status, results } = resp.data;
      if (status !== 'ZERO_RESULTS') {
        setMap(results[0].geometry.location);
      } else {
        setMap({ lat: 22.801838, lng: -98.4070255 });
      }
    } else {
      setMap({ lat: 22.801838, lng: -98.4070255 });
    }
  }, []);

  return map;
};

export default useGoogleAddress;