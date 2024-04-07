import { createContext, useContext, useEffect, useState } from 'react';

const sampleData = [
  {
    address: '400 Font Blvd',
    name: '400 Font Blvd',
    rating: 4.5,
    numRatings: 17,
    description: "Nice neighborhood where your car won't get jacked!!",
    price: 5,
    long: -122.478360,
    lat: 37.718690,
    listingID: 1,
    imgUrl: "https://th.bing.com/th/id/OIP.64LSVkMuGuCcFjvgR7U-JAHaE8?rs=1&pid=ImgDetMain",

  },
  {
    address: '136 Serrano Dr',
    name: '136 Serrano Dr',
    rating: 3,
    numRatings: 5,
    description: 'A little sketch, but well worth the price',
    price: 2.5,
    long: -122.477880,
    lat: 37.720140,
    listingID: 2,
  },
  {
    address: '42 Gregor Avenue',
    name: '42 Gregor Avenue',
    rating: 4.2,
    numRatings: 4,
    description: 'This place is okay',
    price: 4.2,
    long: 37.72908132864706,
    lat: -122.47844972767922,
    listingID: 3,
  },
  {
    address: '182 Middlefield Dr',
    name: '182 Middlefield Dr',
    rating: 3.9,
    numRatings: 45,
    description: 'Convinient parking',
    price: 3.2,
    long: -122.485980,
    lat: 37.731140,
    listingID: 4,
  },
  {
    address: '159 Riverton Dr',
    name: '159 Riverton Dr',
    rating: 2.3,
    numRatings: 15,
    description: 'Easy parking',
    price: 8,
    long: -122.487300,
    lat: 37.731420,
    listingID: 5,
  },
  {
    address: '128 Riverton Drive',
    name: '128 Riverton Drive',
    rating: 4.3,
    numRatings: 37,
    description: 'Secure parking',
    price: 3,
    long: -122.4870163,
    lat: 37.7317526,
    listingID: 6,
  },
  {
    address: '328 Riverton Drive',
    name: '328 Riverton Drive',
    rating: 4.7,
    numRatings: 8,
    description: 'convinient parking',
    price: 2,
    long: -122.487016,
    lat: 37.7317527,
    listingID: 7,
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
