"use client"

import React, {useRef, useEffect, useState} from 'react';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import { APIProvider, Map, Marker, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import GoogleAutoComplete from './GoogleAutoComplete';
// const {AutocompleteService} = await google.maps.importLibrary("places");


const ListingSearchBar = () => {
  
  const map = useMap();

  // useEffect(() => {
  //   if (!map) return;

  //   // do something with the map instance
  //   map.setCenter()
  // }, [map]);

  const handleAutoCompleteResult = (placeResult) => {
    console.log(placeResult);
    if (!placeResult.hasOwnProperty('geometry')) {
      console.log("Not a valid result!");
    } else {
      const coordinates = placeResult.geometry.location;
      const latitutude = coordinates.lat();
      const longitude = coordinates.lng();

      map.setCenter({lat: latitutude, lng: longitude})

      console.log("Place results: lat ", latitutude, "long ", longitude);
    }
  }

  return (
      <div className="listing-search">
        <div className="listing-search-input rounded-md px-4 py-2">
          <PiMagnifyingGlassDuotone className="icon purple-icon me-2 text-2xl" />
            <GoogleAutoComplete onAutoCompleteResult={handleAutoCompleteResult} />
          <PiSlidersHorizontalDuotone className="icon purple-icon ms-2 text-2xl" />
        </div>
      </div>
  );
};

export default ListingSearchBar;
