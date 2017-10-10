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
import AdminSettings from '../components/AdminSettings'

export default class extends Page{

  async componentDidMount() {
    this.state = {
      email: this.state.email,
      searchText: '',
      showFilterMenu: false,
      filtersValues: {
          funcion: 'Todas',
          zona: 'Todas',
          horario: [null, null]
      },
      showAdminSettings : false
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      searchText: '',
      showFilterMenu: false ,
      filtersValues: {
          funcion: 'Todas',
          zona: 'Todas',
          horario: [null, null]
      },
      showAdminSettings : false
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
  
  handleShowAdmin = () => { this.setState( (prevState) => { return {showAdminSettings : !prevState.showAdminSettings}  } )}
  
  
 
  
  render() {
    const adminUser = {
      name: 'Juan Sebastian Zapata',
      url:'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg',
      funcion : 'Coordinador',
      horario : [new Date(2017, 9, 9, 8, 30, 0 ), new Date(2017, 9, 9, 15, 30, 0 )],
      ubicacion: 'calle 34 8a 70',
      zona: '1'
    }
    const users = [
        
            { 
            name: 'Carlos Aguilar',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Coordinador',
            horario: [new Date(2017, 9, 9, 8, 30, 0 ), new Date(2017, 9, 9, 15, 30, 0 )],
            ubicacion: 'Calle 34 8a 70',
            zona: '4'
        },
         { 
            name: 'Antonio Castro',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Casos Especiales',
            horario: [new Date(2017, 9, 9, 5, 0, 0 ), new Date(2017, 9, 9, 10, 30, 0 )],
            ubicacion: 'Calle 1b 34 78',
            zona: '5'
        },
         { 
            name: 'Lina Burbano',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Suplentes',
            horario: [new Date(2017, 9, 9, 14, 50, 0 ), new Date(2017, 9, 9, 20, 10, 0 )],
            ubicacion: 'Carrera 56 #52 ',
            zona: '2'
        },
         { 
            name: 'Viviana Zapata',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Alcoholimetros',
            horario: [new Date(2017, 9, 9, 10, 15, 0 ), new Date(2017, 9, 9, 13, 40, 0 )],
            ubicacion: 'Carrera 17a #62a 23',
            zona: '7'
        },
         { 
            name: 'Velasquez',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Casos Especiales',
            horario: [new Date(2017, 9, 9, 18, 10, 0 ), new Date(2017, 9, 9, 12, 30, 0 )],
            ubicacion: 'Calle 1a  #62a 130',
            zona: '4'
        }
        
    ];
    
    var filterValues = this.state.filtersValues;
    
    return (
      <MuiThemeProvider muiTheme={vinciTheme(this.props.userAgent)}>
        <Layout title='Usuarios'>
            {this.state.showAdminSettings && <AdminSettings onAdminSettings={this.handleShowAdmin} user={adminUser}/>}
            <Header onValuesChange={this.setSearchbarValues} 
                    searchBarValue={this.state.searchText}
                    onAdminSettings={this.handleShowAdmin}
                    user={adminUser}
                    />
                    { this.state.showFilterMenu && <Filters onValuesChange={this.setFiltersValues} 
                                                            values={filterValues} /> }
            <Panel content={users} 
                   searchText={this.state.searchText}
                   filterValues = {filterValues} 
                   />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
