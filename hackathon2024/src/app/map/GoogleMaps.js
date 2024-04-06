"use client"

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.72649002075195,
  lng: -122.4822769165039,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A',
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(18);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap 
      mapContainerStyle={containerStyle} 
      center={center} 
      zoom={5} 
      onLoad={onLoad} 
      onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMaps);
