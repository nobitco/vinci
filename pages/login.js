import '../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import Router from 'next/router'
import {Card, CardHeader} from 'material-ui/Card'
import Link from 'next/link'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <Card>
            <div className="container">
              <CardHeader
                title="Autenticar"
                actAsExpander={false}
                showExpandableButton={false}
              />
              <form method="post" action="/auth/email/signin" onSubmit={this.handleSubmit}>
                <div className="field-line">
                  <TextField 
                    floatingLabelText="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange} 
                  />
                </div>
                <br />
                <div className="field-line">
                  <TextField 
                    floatingLabelText="password"
                    name="password"
                    type="password"
                  />
                </div>
                <br />

                <div className="field-line">
                  <RaisedButton
                    type="submit"
                    label="Entrar"
                    primary
                  />
                </div>
              </form>
            </div>
          </Card>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
