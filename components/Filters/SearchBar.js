import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FilterIcon from 'material-ui/svg-icons/content/filter-list'
import SearchIcon  from 'material-ui/svg-icons/action/search'


export default class SearchBar extends React.Component {
    
    constructor(props){
        super(props);
    }
  
    render(){
      
        return (
                <div className='root' id='search-set' >
                    <div id='search-set'>
                      <div id='searchBar-container' className='left'>
                        <SearchIcon style={{ width:30 , height: 24}} color='black' />
                        <input  id='search-input' type='text' placeholder='Buscar...'/>
                      </div>
                      <FlatButton 
                            className= "left hide-on-small-only"
                            id="filter-btn-large"
                            label="Filtrar" 
                            icon={<FilterIcon />}
                            style={{  marginLeft:14 }}
                      />
                      <FlatButton 
                            className= "left hide-on-med-and-up"
                            id="filter-btn-small"
                            icon={<FilterIcon />}
                            style={{  marginLeft:0, minWidth: 48  }}
                      />
                    </div>
                  <style jsx>{`
#search-set{
 margin-top:7px;
margin-left:7%;
width:100%;

} 

#searchBar-container{
padding: 5px 24px;
border:1px solid #ebebeb;
display:flex;
border-radius: 2px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
background-color: #fff;
}

#searchBar-container:hover{
box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
}

#search-set{
vertical-align: top;
position:relative;
}

input[type=text]#search-input{
  border: none;
  height: 24px;
  z-index: 1;
  color: rgba(0, 0, 0, 0.87);
  margin-left:20px;
  width: 70%;
  max-width:900px;
font-size:18px;
}
input[type=text]#search-input:focus{
outline:none;
}

      `}</style>
                </div>
   
    )}
}
