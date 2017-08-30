import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import Router from 'next/router'
import vinciTheme from '../theme/vinci-theme'
import Link from 'next/link'

export default class extends Page {

  async componentDidMount() {
    this.state = {
      email: this.state.email,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)


  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value.trim(),
    })
  }
    
  async handleSubmit(event) {
    event.preventDefault()

    const session = new Session()
    session.signin(this.state.email)
    .then(() => {
      this.props.url.push('/dashboard')
    })
    .catch(err => {
      // @FIXME Handle error
      console.log(err)
    })
  }
    

  render() {
    
    const inputMargin = {
        marginLeft: 10
    };
    
    return (
      <MuiThemeProvider muiTheme={vinciTheme(this.props.userAgent)}>
        <Layout title='Usuarios'>
            <Header />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
