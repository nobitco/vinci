
import Link from 'next/link'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'
import Filters from  '../Filters/Filters'
import {grey100, grey900} from 'material-ui/styles/colors'

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.propTypes.object.isRequired
    }
  }

  render() {
    return (
      <div>
          <AppBar className='appBar ' 
              showMenuIconButton={true} 
              title='Vinci' 
              iconElementRight={<UserMenu />} 
              iconElementLeft={<Filters />}
              style={{ backgroundColor:  grey100}}
              titleStyle={{color: grey900}}
            />
        </div>
    )}
}
