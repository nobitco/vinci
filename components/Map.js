import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel'
import SvgIcon from 'material-ui/FontIcon'

const DetailWindow = (props) => {
  return (
  <div id='container'>
      <div className='label'><h3>Nombre</h3><p>{props.name}</p></div>
      <div className='label'><h3>Funcion</h3><p>{props.funcion}</p></div>
      <style jsx>{`
            #container{
               padding: 10px;
               width: 150px;
            }

            .label{
               display:flex;
               flex-direction:row;
            }
         `}</style>
  </div>
  )
}


class MapPoint extends React.Component{
  constructor(props){
    super(props)
    this.id = this.props.user.id
    this.state = { selected: false }
  }
  
  handleClick = (mk) => {
    //this.setState((prevState) => { selected : !prevState.selected } )
    this.props.onSelection(this.id)
  }
  
  componentWillReceiveProps(nextProps){ this.setState({ selected: nextProps.selected}) }  
  
  render(){
    const labelStyle = {
      backgroundColor: 'white',
      fontSize: 14,
      padding: 20,
      boxShadow: '1px 1px 3px #000'
    }
    return(
    <MarkerWithLabel position={new google.maps.LatLng(this.props.user.ubicacion.lat, this.props.user.ubicacion.lng)}
            labelAnchor={new google.maps.Point(0,0)}
            labelStyle={labelStyle}
            onClick={this.handleClick} >
         <div>{this.state.selected && <DetailWindow name={this.props.user.name}
                                                    funcion={this.props.user.funcion} />}
        </div>
    </MarkerWithLabel>
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
  
  handleSelection = mkId => {
      let selected = this.state.selected
      let idIndex = selected.indexOf(mkId)
      idIndex === -1 ? selected.push(mkId) : selected.splice(idIndex, 1)
      this.setState({ selected : selected })
      this.props.onSelectedMarkers(this.state.selected)
      //console.log(this.state.selected);
  }
  
  isSelected = id => this.state.selected.indexOf(id) !== -1
  
  componentWillReceiveProps(nextProps){ this.setState({ selected: nextProps.selectedMarkers }) }
  
  
  render(){
    console.log
    var markers = []
    markers = this.props.items.map((user, index) => ( <MapPoint user={user} 
                                                                onSelection={this.handleSelection}
                                                                key={index}
                                                                selected={this.isSelected(user.id)} /> ))
     
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
                                                           onSelectedMarkers={props.onSelectedMarkers}
                                                           selectedMarkers={props.selectedMarkers} 
                                                           />))
