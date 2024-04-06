'use client';

import Listing from './listing';
import './styles.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import { useState } from 'react';
import Navbar from '../component/navbar';
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.72649002075195,
  lng: -122.4822769165039
};

const mapComponent = () => {
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

const MemoMap = React.memo(mapComponent);

const mapPage = () => {
  return (
    <>
      <Navbar />
      <main className="map-body">
        <div className='listing-search'>
          <div className='listing-search-input rounded-md px-4 py-2'>
            <PiMagnifyingGlassDuotone className="icon purple-icon me-2 text-2xl" />
            <input placeholder='Street Address'/>
            <PiSlidersHorizontalDuotone className="icon purple-icon m2-2 text-2xl"/>
          </div>
        </div>
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
