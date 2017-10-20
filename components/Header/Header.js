import Link from 'next/link'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'
import Filters from  '../Filters/Filters'
import {grey100, grey900} from 'material-ui/styles/colors'
import SearchBar from  '../Filters/SearchBar'
import muiThemeable from 'material-ui/styles/muiThemeable'
import {lightGreenA200, grey300} from 'material-ui/styles/colors'





class Header extends React.Component {
  
  constructor(props){
    super(props)
  }

  static propTypes() {
    return {
      session: React.propTypes.object.isRequired
    }
  }
  
  
  render() {
    const activeColor = this.props.muiTheme.palette.accent1Color

    return (
      <div >
          <AppBar className='appBar row' 
              showMenuIconButton={false} 
              iconElementRight={<UserMenu onAdminSettings={this.props.onAdminSettings} 
                                          user={this.props.user}/>}  
              iconStyleRight={{order:3, marginTop:12}}
              style={{ marginBottom:0,
                       marginTop:0,
                      backgroundColor: 'transparent',
                      boxShadow:'none'}}
            />
         
        </div>
    )}
}


export default muiThemeable()(Header)