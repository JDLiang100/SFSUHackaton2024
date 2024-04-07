import { createContext, useContext, useEffect, useState } from 'react';

const sampleData = [
  {
    address: '123 Street by Hill',
    name: '123 Street by Hill',
    rating: 4.5,
    numRatings: 17,
    description: "Nice neighborhood where your car won't get jacked",
    price: 5,
    long: 37.72675636631657,
    lat: -122.48357839527878,
    listingID: 1,
  },
  {
    address: '4212 B Street',
    name: '4212 B Street by Park',
    rating: 4.9,
    numRatings: 5,
    description: 'A little sketch, but well worth the price for what you get',
    price: 2.5,
    long: 37.72701091489936,
    lat: -122.48220508755398,
    listingID: 2,
  },
  {
    address: '42 Gregor Avenue',
    name: '42 Gregor Avenue',
    rating: 4.2,
    numRatings: 4,
    description: 'This place is okay',
    price: 3.2,
    long: 37.72908132864706,
    lat: -122.47844972767922,
    listingID: 3,
  },
];

export const DrivewayMapContext = createContext(null);

export function DrivewayMap({ children }) {

  const [listings, setListings] = useState(sampleData);

  return (
    <DrivewayMapContext.Provider value={{
      listings: listings,
      setListings: setListings
    }}>
        {/* <DrivewayMapContext.Provider value={{ 
            containerStyle: containerStyle,
            mapCamera: mapCamera,
            setMapCamera: setMapCamera,
            apiKey: API_KEY
        }}>{children}</DrivewayMapContext.Provider> */}
        {children}
    </DrivewayMapContext.Provider>
  );
}

// How to use
// function SidebarNav() {
//   let { isOpen } = useContext(MapContext);

//   return (
//     <div>
//       <p>Home</p>

//       {isOpen && <Subnav />}
//     </div>
//   );
// }
