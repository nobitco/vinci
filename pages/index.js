import '../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import CardHome from '../components/cardhome'
import vincitheme from '../theme/vinci-theme'

export default class extends Page {
  render() {
    const muiTheme = vincitheme(this.props.userAgent);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout title='Landing Page'>
          <CardHome />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
