import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

export default class AppBarMain extends React.Component {
  render () {
    return (
      <div>
        <AppBar
          title='Vinci'
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
      </div>
    )
  }
}
