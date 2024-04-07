import { createContext, useContext, useEffect, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const INITIAL_CAMERA = {
  center: {lat: 37.72649002075195, lng: -122.4822769165039},
  zoom: 18
};

const API_KEY = 'AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A';

const DrivewayMapContext = createContext();

export function DrivewayMap({ children }) {

  const [mapCamera, setMapCamera] = useState(INITIAL_CAMERA);

  return (
    <DrivewayMapContext.Provider value={{mapCamera}}>
      <APIProvider apiKey={API_KEY}>
        {/* <DrivewayMapContext.Provider value={{ 
            containerStyle: containerStyle,
            mapCamera: mapCamera,
            setMapCamera: setMapCamera,
            apiKey: API_KEY
        }}>{children}</DrivewayMapContext.Provider> */}
        {children}
      </APIProvider>
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
