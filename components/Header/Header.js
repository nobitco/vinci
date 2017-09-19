import Link from 'next/link'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'
import Filters from  '../Filters/Filters'
import {grey100, grey900} from 'material-ui/styles/colors'
import SearchBar from  '../Filters/SearchBar'

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.propTypes.object.isRequired
    }
  }

  render() {
    
    return (
      <div>
          <AppBar className='appBar' 
              showMenuIconButton={true} 
              title='Vinci' 
              iconElementRight={<UserMenu />} 
              iconElementLeft={<SearchBar />} 
              iconStyleLeft={{order:2}}
              iconStyleRight={{order:3}}
              style={{  backgroundColor:grey100, 
                        display:'flex', 
                        flexDirection:'row' }}
              titleStyle={{ color: grey900, 
                            flex:'initial', 
                            order:1}}
            />
         
        </div>
    )}
}
