import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FilterIcon from 'material-ui/svg-icons/content/filter-list'
import SearchIcon  from 'material-ui/svg-icons/action/search'


export default class SearchBar extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        on : false,
        searchText : ''
      }
      this.handleFilterBtn = this.handleFilterBtn.bind(this);
      this.handleSearchBar = this.handleSearchBar.bind(this);
    }
  
    handleFilterBtn(){
      this.setState(prevState=>({on : !prevState.on}));
      this.props.onFilterBtnChange(this.state.on);
    }
    
    handleSearchBar(e){
      this.setState({searchText : e.target.value});
      this.props.onSearchBarValueChange(this.state.searchText);
    }
  
    render(){
      const white = { color: '#FFF', fill:'#FFF' }
        return (
              
                    <div id='search-set' className={this.props.className} >
                      <div id='searchBar-container' className='left'>
                        <SearchIcon style={{ width:30 , height: 24}} color='black' />
                        <input  id='search-input' 
                          type='text' 
                          placeholder='Buscar...' 
                          onChange = {this.handleSearchBar}
                          value={this.state.searchText}/>
                      </div>
                      <FlatButton 
                            className= "left hide-on-small-only"
                            id="filter-btn-large"
                            label="Filtrar" 
                            icon={<FilterIcon  style={white}/>}
                            style={{  marginLeft:14 }}
                            labelStyle={white}
                            onClick={this.handleFilterBtn}
                      />
                      <FlatButton 
                            className= "left hide-on-med-and-up"
                            id="filter-btn-small"
                            icon={<FilterIcon  style={white}/>}
                            style={{  marginLeft:0, minWidth: 48  }}
                            onClick={this.handleFilterBtn}
                      />
            
                  <style jsx>{`


#search-set{
margin-top:7px;
margin-left:auto;
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
width:68%;
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
  width: 100%;
  max-width:1200px;
font-size:18px;
}
input[type=text]#search-input:focus{
outline:none;
}

      `}</style>
                </div>
   
    )}
}
