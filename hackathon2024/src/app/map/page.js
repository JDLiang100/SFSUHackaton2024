"use client"

import './styles.css';
import React from 'react';
import Navbar from '../component/navbar';
import GoogleMaps from './GoogleMaps';
import Sidebar from './Sidebar';
import { APIProvider, Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps';

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

const mapPage = () => {
  // const data = await getData();

  return (
    <>
      <Navbar />
      <main className="map-body">
        <Sidebar />

        <div className="map">
          <GoogleMaps />
        </div>
      </main>
    </>
  );
};

export default mapPage;
