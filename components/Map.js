import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import SvgIcon from 'material-ui/FontIcon'

//MapPoint  https://github.com/tomchentw/react-google-maps/issues/144

class Map extends React.Component {
  
  constructor(props){
    super(props)
    this.selectedMarkerIds = []
    this.selectedIndex = []
    this.state = {
      selected: []
    }
  }
  
    handleSelection = (e) => {
      /*let indexNumber = this.selectedIndex.indexOf(index)
      indexNumber !== -1 ? this.selectedIndex.splice(indexNumber,1) : this.selectedIndex.push(index)*/
      
      console.log(e.type);
  }
  

  
  render(){
    var markers = []
    markers = this.props.items.map((user, index) => (
     <Marker position={new google.maps.LatLng(user.ubicacion.lat, user.ubicacion.lng)}
      onClick={this.handleSelection}
      key={index}
      clickable={true}/>
    ))
    
    return (
        <GoogleMap defaultZoom={13}
          defaultCenter={{
            lat: 3.412656,
            lng: -76.540461
          }}>
          {markers}
        </GoogleMap>
    )}
}
    
const MapWrapper = withScriptjs(withGoogleMap( (props) => <Map items={props.users}/>))
                                
export default MapWrapper
