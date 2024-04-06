'use client';

import Listing from './listing';
import './styles.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import { useState } from 'react';
import Navbar from '../component/navbar';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const mapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A',
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

const MemoMap = React.memo(mapComponent);

const mapPage = () => {
  return (
    <>
      <Navbar />
      <main className="map-body">
        <div className="listing">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
        <div className="map">
          <MemoMap />
        </div>
      </main>
    </>
  );
};

export default mapPage;
