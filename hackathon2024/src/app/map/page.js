'use client';

import './styles.css';
import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Sidebar from './Sidebar';
import { APIProvider, Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps';
import { MapContext } from '@react-google-maps/api';
import MapView from './MapView';

// Fetch data based on previous page load
// If there is no query, just load the default map

// async function getData() {
//   const res = await fetch('localhost:3000/driveway', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       lat: 37.72649002075195,
//       long: -122.4822769165039,
//       radius: 2.0,
//       address: "sample address",
//     })
//   })

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }


// Stuff to do
/*
  Procedure
    When user first visits map, set default location to their location
    Fetch data from default coordinates

    When user enters into the search bar,
      Google autocomplete kicks in
      When user selects, it changes location, else it gives an error
    
    Send request for location to api with radius
    Response comes back with listings

    User can choose to reserve
*/


// Move Google Context Here
// Move Listing Context Here
const API_KEY = 'AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A';
const mapPage = () => {
  // const data = await getData();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('/api/profile-data')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  return (
    <>
      <Navbar />
      {/* <MapContext.Provider> */}
      <APIProvider apiKey={"AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A"}>
        <main className="map-body">
          <Sidebar />
          <div className="map">
            <MapView />
          </div>
        </main>
      </APIProvider>

      {/* </MapContext.Provider> */}
    </>
  );
};

export default mapPage;
