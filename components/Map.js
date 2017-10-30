import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import SvgIcon from 'material-ui/FontIcon'


class MapPoint extends React.Component{
  constructor(props){
    super(props)
    this.id = this.props.user.id
    this.state = { selected: false }
  }
  
  handleClick = (mk) => {
    this.setState((prevState) => { selected : !prevState.selected } )
    this.props.onSelection(this.id)
  }
  
  render(){
    return(
    <Marker position={new google.maps.LatLng(this.props.user.ubicacion.lat, this.props.user.ubicacion.lng)}
            onClick={this.handleClick} />
    )
  }
}

class Map extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      selected: []  //stores users ids selected markers
    }
  }
  
    handleSelection = (mkId) => {
      let ids = this.state.selected
      let idIndex = ids.indexOf(mkId)
      idIndex === -1 ? ids.push(mkId) : ids.splice(idIndex, 1)
      this.setState({ selected : ids })
      this.props.onSelectedMarkers(this.state.selected)
      //console.log(this.state.selected);
  }
  

  
  render(){
    
    var markers = []
    markers = this.props.items.map((user, index) => ( <MapPoint user={user} 
                                                                onSelection={this.handleSelection}
                                                                key={index}/> ))
    
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
                               
export default withScriptjs(withGoogleMap( (props) => <Map items={props.users}
                                                           onSelectedMarkers={props.onSelectedMarkers} />))
