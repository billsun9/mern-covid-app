import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

require('dotenv').config();

const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};
 
function MapContainer(props) {
  const { donations, requests } = props
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MapContainer)