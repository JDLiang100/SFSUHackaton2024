'use client';

import { MapContext } from '@react-google-maps/api';
// Using the official api provided by google for the map
import { AdvancedMarker, APIProvider, Map, Marker, useMap } from '@vis.gl/react-google-maps';
import { useCallback, useContext, useState } from 'react';
// import { DrivewayMapContext } from './DrivewayMapContext';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const INITIAL_CAMERA = {
  center: { lat: 37.72649002075195, lng: -122.4822769165039 },
  zoom: 18,
};

function MapView() {
  const map = useMap();
  const [cameraProps, setCameraProps] = useState(INITIAL_CAMERA);
  const [currentMap, setCurrentMap] = useState(null);
  // const { mapCamera } = useContext(DrivewayMapContext);
  const handleCameraChange = useCallback((ev) => setCameraProps(ev.detail));


  return (
    <Map {...cameraProps} onCameraChanged={handleCameraChange} gestureHandling={'greedy'} mapId={'bfc8011594bf2b62'} libraries={['marker']}>
      <AdvancedMarker
          position={{lat: 37.72649002075195, lng: -122.4822769165039}}
          clickable={true}
          onClick={() => alert('marker was clicked!')}
          title={'clickable google.maps.Marker'}
      />
      {/* <AdvancedMarker position={cameraProps.center}/> */}
    </Map>
  );
}

export default MapView;
