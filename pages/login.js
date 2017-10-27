import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import vinciTheme from '../theme/vinci-theme'
import UserIcon from 'material-ui/svg-icons/action/account-circle'
import PasswordIcon from 'material-ui/svg-icons/communication/vpn-key'
import HelpIcon from 'material-ui/svg-icons/action/help'
import Link from 'next/link'

export default class extends Page {
  async componentDidMount () {
    this.state = {
      email: this.state.email
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleEmailChange (event) {
    this.setState({
      email: event.target.value.trim()
    })
  }

  async handleSubmit (event) {
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

  render () {
    const inputMargin = {
      marginLeft: 10
    }

    return (
      <MuiThemeProvider muiTheme={vinciTheme(this.props.userAgent)}>
        <Layout title='Login :: Bienvenido a Vinci'>
          <div className='row'>
            <div className='loginbox col push-s1 s10 push-m2 m8' >
              <h1 className='left'>Vinci</h1>
              <form method='post' action='/auth/email/signin' onSubmit={this.handleSubmit}>
                <div className='row-fields'>
                  <UserIcon className='grey-text' />
                  <TextField
                    floatingLabelText='email'
                    name='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    fullWidth
                    style={inputMargin}
                          />
                </div>
                <div className='row-fields'>
                  <PasswordIcon className='grey-text' />
                  <TextField
                    floatingLabelText='password'
                    name='password'
                    type='password'
                    fullWidth
                    style={inputMargin}
                      />
                </div>
                <RaisedButton
                  fullWidth
                  type='submit'
                  label='Entrar'
                  primary
                  id='submit-btn'
                  style={{marginTop: 50}}
                      />

              </form>
              <Link href='/index'><a>
                <small style={{marginTop: 25}} className='right grey-text text-darken-1'>
                  <HelpIcon className='grey-text'
                    style={{position: 'relative', top: 7}} />
                         Recuperar contraseña
                    </small></a>
              </Link>
            </div>
          </div>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
