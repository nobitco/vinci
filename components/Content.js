import React from 'react'
import List from './List'


const Map = (props) => (
  
  <div className='mapContainer'>
 
    <style jsx>{`
              .mapContainer{
                positon: absolute;
                top:0;
                left:0;
                width:100%;
                background-image: url('http://laskin.com.co/wp-content/uploads/2015/03/mapa-laskin-ciudad-jardin.jpg');
                background-size: cover;
                height:92vh;

              }
              
            `}</style>
  </div>
);


class  Content extends React.Component{
      
    constructor(props){
        super(props)
    }
    
    render(){
      var searchText = this.props.searchText
      var filterValues = this.props.filterValues
        return(
            <div className='row mainContainer'> 
                <List items={this.props.content} 
                      searchText={searchText} 
                      filterValues={filterValues}
                      className='col s12 m10 push-m1'/> 
               { this.props.showMap && <Map />  }
               
            <style jsx>{`
              .mainContainer{
                width:100%;
                position:relative;
              }
            `}</style>
            </div>
        )}
}
export default(Content)