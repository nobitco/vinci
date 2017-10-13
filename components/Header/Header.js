import Link from 'next/link'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'
import Filters from  '../Filters/Filters'
import {grey100, grey900} from 'material-ui/styles/colors'
import SearchBar from  '../Filters/SearchBar'
import MapBtn from 'material-ui/FlatButton'
import MapIcon from 'material-ui/svg-icons/maps/person-pin'
import muiThemeable from 'material-ui/styles/muiThemeable'
import {lightGreenA200, grey300} from 'material-ui/styles/colors'


class RightMenu extends React.Component{

  constructor(props){
    super(props)
    this.on = false
    this.state = { on: false }
  }
 
  toggle = () =>  {  
    this.setState((prevState) => ({ on: !prevState.on }));
    this.props.handleMapBtn()
  } 
  
  
  
  render(){
    
    
  return(
      <div id='rightMenu'>
      <div id='opts-set'>
        { this.state.on ? <MapBtn icon={<MapIcon/>} style={{color: this.props.activeColor}} backgroundColor={'#1c1a23'} label='Mapa' onClick={this.toggle} /> : <MapBtn icon={<MapIcon color={'#fff'}/>} style={{color: '#fff'} } label='Mapa' onClick={this.toggle} />  
        }
      </div>
      <UserMenu onAdminSettings={this.props.handleAdminSettings} 
                user={this.props.user}/>

      <style jsx>{`
                  #rightMenu{
                    display:flex;
                    align-items:center;
                  }
                  #opts-set{
                  margin-right:40px;
                  }
                `}
     </style>      
     </div>
  )  
}}


class Header extends React.Component {
  
  constructor(props){
    super(props)
  }

  static propTypes() {
    return {
      session: React.propTypes.object.isRequired
    }
  }
  
  handleValuesChange = (obj) => { this.props.onValuesChange(obj) }
  

  

  
  render() {
    const activeColor = this.props.muiTheme.palette.accent1Color

    return (
      <div style={{zIndex: 1000}}>
          <AppBar className='appBar row' 
              showMenuIconButton={true} 
              title='Vinci' 
              iconElementRight={<RightMenu handleAdminSettings={this.props.onAdminSettings}
                                            user={this.props.user}
                                            handleMapBtn={this.props.onMapBtn}
                                            activeColor={activeColor}
              />} 
              iconElementLeft={<SearchBar className='col s12 push-s1 push-m1 m11' 
                                          onChangeValues={this.handleValuesChange}
                                          value={this.props.searchText}/>} 
              iconStyleLeft={{order:2, marginLeft: 'auto'}}
              iconStyleRight={{order:3, marginTop:12}}
              style={{ marginBottom:0,
                       marginTop:0 }}
              titleStyle={{ color: '#FFF', 
                            flex:'initial', 
                            order:1}}
            />
         
        </div>
    )}
}


export default muiThemeable()(Header)