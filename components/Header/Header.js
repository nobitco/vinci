
import Link from 'next/link'
import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.propTypes.object.isRequired
    }
  }

  render() {
    return (
          <AppBar className='appBar' 
              showMenuIconButton={false} 
              title='Vinci' 
              iconElementRight={<UserMenu />} 
            />
    )}
}
