import React from 'react'
import {withScriptjs,withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap((props) => (
  <GoogleMap defaultZoom={18}
             defaultCenter={{
                  lat: 3.412656,
                  lng: -76.540461
             }}
    >
      <Marker position={{ lat: 3.412656, lng: -76.540461 }} />
   </GoogleMap> 
)))

export default Map




