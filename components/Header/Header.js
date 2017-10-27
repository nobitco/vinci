import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './userMenu'
import muiThemeable from 'material-ui/styles/muiThemeable'

class Header extends React.Component {

  static propTypes () {
    return {
      session: React.propTypes.object.isRequired
    }
  }

  render () {
    return (
      <div>
        <AppBar className='appBar row'
          showMenuIconButton={false}
          iconElementRight={<UserMenu onAdminSettings={this.props.onAdminSettings}
            user={this.props.user} />}
          iconStyleRight={{order: 3, marginTop: 12}}
          style={{ marginBottom: 0,
            marginTop: 0,
            backgroundColor: 'transparent',
            boxShadow: 'none'}}
            />
      </div>
    )
  }
}

export default muiThemeable()(Header)
