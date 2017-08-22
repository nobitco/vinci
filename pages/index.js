import '../components/tap_events'
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton'

export default class extends React.Component {
  static async getInitialProps({req}) {
    return {
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
    }
  }
  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <FlatButton label="Iniciando vinci!" />
      </MuiThemeProvider>
    )
  }
}
