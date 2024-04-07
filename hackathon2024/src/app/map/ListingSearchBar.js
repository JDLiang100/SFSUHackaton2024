"use client"

import React, {useRef, useEffect, useState} from 'react';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import { APIProvider, Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps';
import GoogleAutoComplete from './GoogleAutoComplete';
// const {AutocompleteService} = await google.maps.importLibrary("places");


const ListingSearchBar = () => {
  
  const handleAutoCompleteResult = (placeResult) => {
    console.log(placeResult);
  }

  return (
      <div className="listing-search">
        <div className="listing-search-input rounded-md px-4 py-2">
          <PiMagnifyingGlassDuotone className="icon purple-icon me-2 text-2xl" />
          <APIProvider apiKey="AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A">
            <GoogleAutoComplete onAutoCompleteResult={handleAutoCompleteResult} />
          </APIProvider>
          <PiSlidersHorizontalDuotone className="icon purple-icon ms-2 text-2xl" />
        </div>
      </div>
  );
};

export default ListingSearchBar;