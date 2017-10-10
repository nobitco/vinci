import Link from 'next/link'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'
import Filters from  '../Filters/Filters'
import {grey100, grey900} from 'material-ui/styles/colors'
import SearchBar from  '../Filters/SearchBar'

export default class extends React.Component {
  
  constructor(props){
    super(props)
  }

  static propTypes() {
    return {
      session: React.propTypes.object.isRequired
    }
  }
  
  handleValuesChange = (obj) => { this.props.onValuesChange(obj) }
  
  handleAdminSettings = () => { this.props.onAdminSettings()  }
  
  render() {
    
    return (
      <div>
          <AppBar className='appBar row' 
              showMenuIconButton={true} 
              title='Vinci' 
              iconElementRight={<UserMenu onAdminSettings={this.handleAdminSettings}
                                          user={this.props.user}/>} 
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
