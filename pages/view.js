import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import Router from 'next/router'
import vinciTheme from '../theme/vinci-theme'
import Link from 'next/link'
import AppBar from 'material-ui/AppBar'
import Header from '../components/Header/Header'
import Panel from '../components/Panel'
import Filters from '../components/Filters/Filters'

export default class extends Page{

  async componentDidMount() {
    this.state = {
      email: this.state.email,
      searchText: '',
      showFilterMenu: false,
      filtersValues: {}
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      searchText: '',
      showFilterMenu: false ,
      filtersValues: {}
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
  
    
  setFiltersValues = (valuesObj) => { this.setState({ filtersValues : valuesObj })  }
  
  setSearchbarValues = (valuesObj) =>{  this.setState({ searchText : valuesObj.searchText , showFilterMenu : valuesObj.toggle })  }
  
 
  
  render() {
      
    const users = [
        
            { 
            name: 'Carlos Aguilar',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Coordinador',
            horario: '4am - 10am',
            ubicacion: 'Calle 34 8a 70',
            zona: '4'
        },
         { 
            name: 'Antonio Castro',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Casos Especiales',
            horario: '4pm - 10pm',
            ubicacion: 'Calle 1b 34 78',
            zona: '5'
        },
         { 
            name: 'Lina Burbano',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Suplentes',
            horario: '11pm - 4am',
            ubicacion: 'Carrera 56 #52 ',
            zona: '2'
        },
         { 
            name: 'Viviana Zapata',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Alcoholimetros',
            horario: '8am - 12m',
            ubicacion: 'Carrera 17a #62a 23',
            zona: '7'
        },
         { 
            name: 'Velasquez',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Casos Especiales',
            horario: '8am - 12m',
            ubicacion: 'Calle 1a  #62a 130',
            zona: '4'
        }
        
    ];
    
    return (
      <MuiThemeProvider muiTheme={vinciTheme(this.props.userAgent)}>
        <Layout title='Usuarios'>
            <Header onValuesChange={this.setSearchbarValues} 
                    searchBarValue={this.state.searchText}/>
                    { this.state.showFilterMenu && <Filters values={this.state.filtersValues} onValuesChange={this.setFiltersValues}/> }
            <Panel content={users} 
                    searchText={this.state.searchText} 
                    filters={this.state.filtersValues}/>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
