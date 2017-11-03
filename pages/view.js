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
import AdminSettings from '../components/AdminSettings'
import ListPanel from '../components/ListPanel'
import Map from '../components/Map'
import Filters from '../components/Filters/Filters'

const isWindow = typeof window !== 'undefined'  //if document.window already exist for innerHeigt to Map

export default class extends Page{

   constructor(props) {
    super(props)
    this.state = {
      email: '',  
      showAdminSettings : false,
      filtersValues: { 
        funcion : 'Todas',
        zona : 'Todas',
        horario : [null, null]
      },
      viewportHeight : 2000,
      selected: []
    }    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  async componentDidMount() {
    this.state = {
      email: this.state.email,
      showAdminSettings : false,
      filtersValues: { 
        funcion : 'Todas',
        zona : 'Todas',
        horario : [null, null] 
      },
      viewportHeight : 1000,
      selected: []
    }
  }
  
  handleEmailChange = (event) => {  this.setState({ email: event.target.value.trim() })  }
    
  async handleSubmit(event){
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
   
      
  handleShowAdmin = () =>  this.setState( prevState =>  ({ showAdminSettings : !prevState.showAdminSettings }) ) 
    
  getFiltersValues = obj => this.setState({ filtersValues: obj })
  
  
  // receive user id selected by list check or map mark click
  getSelectedIdUsers = (arr) => {
    this.setState({ selected:arr })
    //console.log(arr)
  /*  console.log(arr)
     let selectedIds = []
     if(arr.length > 0){
     arr.forEach((id) => this.state.selected.indexOf(id) === -1 && selectedIds.push(id))
     }else{ //vacia }
       
     this.setState({ selected : selectedIds})*/
     //console.log(this.state.selected)

     // enviar SOLO LOS IDS DE LOS SELECCIONADOS, NO TODOS LOS OBJETOS -- make users[] global
  } 
  
  doesUserMatch = (user, filtersObj) => {
     let matches = 0
     let objSize = 0

     for(var prop in filtersObj){
             objSize++
             if(prop != 'undefined' ){
                 if(typeof filtersObj[prop] === 'string'){ //string filter case
                     filtersObj[prop].indexOf(user[prop]) >= 0 && matches++
                 }else{                                    // array filter case Ex: horario
                if(filtersObj[prop][0].getTime() <= user[prop][0].getTime() && filtersObj[prop][1].getTime() >= user[prop][1].getTime() ) matches++  //FIX
                 }
             }
      }
        
     return matches == objSize && true 
    
  }
  
  getAvailableFilters = obj =>  {
        
        let filters = {}

        for(var prop in obj){
            if(typeof obj[prop] === 'string'){  
                 if(obj[prop] != 'Todas') filters[prop] = obj[prop] 
            }else{  // case for array items on obj
                if(obj[prop][0] != null  && obj[prop][1] != null ) filters[prop] = obj[prop]
            }      
        }
        
    return filters
        
  }
  
  
  
  render() {
    
    const adminUser = {
      name: 'Roberto Bolaños',
      url:'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg',
      funcion : 'Coordinador',
      horario : [new Date(2017, 9, 9, 8, 30, 0 ), new Date(2017, 9, 9, 15, 30, 0 )],
      ubicacion: 'calle 34 8a 70',
      zona: '1'
    }
    
    // fictional users, they'll be received from database
    const users = [
        
            { 
            id: 100,
            name: 'Carlos Aguilar',
            url: '',
            funcion: 'Coordinador',
            horario: [new Date(2017, 9, 9, 8, 30, 0 ), new Date(2017, 9, 9, 15, 30, 0 )],
            ubicacion: { lat: 3.427308, lng: -76.549787 },
            zona: '4'
          },
         { 
            id: 200,
            name: 'Antonio Castro',
            url: 'http://www.concordrusam.com/wp-content/uploads/2017/10/pro.jpg',
            funcion: 'Casos Especiales',
            horario: [new Date(2017, 9, 9, 5, 0, 0 ), new Date(2017, 9, 9, 10, 30, 0 )],
            ubicacion: { lat: 3.425707, lng: -76.546174 },
            zona: '5'
        },
         { 
            id: 300,
            name: 'Lina Burbano',
            url: null ,
            funcion: 'Suplentes',
            horario: [new Date(2017, 9, 9, 14, 50, 0 ), new Date(2017, 9, 9, 20, 10, 0 )],
            ubicacion: { lat: 3.414107, lng: -76.548121 },
            zona: '2'
        },
         { 
            id: 400,
            name: 'Viviana Zapata',
            url: 'http://gaia.adage.com/images/bin/image/Women2013AngelaCourtin.jpg',
            funcion: 'Alcoholimetros',
            horario: [new Date(2017, 9, 9, 10, 15, 0 ), new Date(2017, 9, 9, 13, 40, 0 )],
            ubicacion: { lat: 3.412437, lng: -76.541120 },
            zona: '7'
        },
         { 
            id: 500,
            name: 'Velasquez',
            url: 'http://www.cchealing.com/img/profile1.jpg',
            funcion: 'Casos Especiales',
            horario: [new Date(2017, 9, 9, 18, 10, 0 ), new Date(2017, 9, 9, 12, 30, 0 )],
            ubicacion: { lat: 3.394480, lng: -76.545868 },
            zona: '4'
        }
        
    ]
    
    //get Filters different from All matches
    var availableFilters = this.getAvailableFilters(this.state.filtersValues)
    
    //store users that match with available filters
    var filteredUsers = []
    
    users.forEach(  user => this.doesUserMatch(user, availableFilters) && filteredUsers.push(user)  )

    // keep the map wrapper height updated!
    if(isWindow){
      window.onresize = () => this.setState({  viewportHeight : window.innerHeight })
    }  
      
    return (
      <MuiThemeProvider muiTheme={ vinciTheme(this.props.userAgent) }>
        <Layout title='Usuarios'>
            { this.state.showAdminSettings && <AdminSettings onAdminSettings={this.handleShowAdmin} user={adminUser} /> }
          <div id='mainContainer'>
              <Header onAdminSettings={this.handleShowAdmin}
                      onMapBtn={this.handleShowMap}
                      user={adminUser} />
              <ListPanel users={filteredUsers}
                         onSelectedUsers={this.getSelectedIdUsers}
                         selectedUsers={this.state.selected} />
              <Filters onValuesChange={this.getFiltersValues}
                       values={this.state.filtersValues} /> 
              {  isWindow && <Map showMarkers
                                  googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDNjKlfP4zfk-HQx0la2KI7dSjaFRb5y1c&v=3.exp&libraries=geometry,drawing,places'
                                  loadingElement={<div style={{ height: '100%' }} />}
                                  containerElement={<div style={{ height: this.state.viewportHeight, position: 'relative', top:-66, left: 0 }} />}
                                  mapElement={<div id='map'style={{ height: '100vh' }} />}
                                  users={filteredUsers}
                                  onSelectedMarkers={this.getSelectedIdUsers}
                                  selectedMarkers={this.state.selected} />  }
              <style jsx>{`
              #mainContainer{
                position:relative;
                height:100%;
              }
            `}</style>
          </div>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
