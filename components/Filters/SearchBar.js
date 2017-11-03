import React from 'react'
import FilterBtn from 'material-ui/IconButton'
import FilterIcon from 'material-ui/svg-icons/content/filter-list'
import SearchIcon  from 'material-ui/svg-icons/action/search'
import {grey500, grey700} from 'material-ui/styles/colors'

export default class SearchBar extends React.Component {
  
    constructor(props){
      super(props)
      this.values = {
        searchText : '',
        toggle: false
      }
    }
  
   
    handleSearchBar =  (e) => { this.values.searchText = e.target.value
                                this.props.onValuesChange(this.values) }
    
    handleFilterBtn = () => { this.values.toggle = !this.values.toggle
                              this.props.onValuesChange(this.values)  }
    
    render(){
      
      const white = { color: '#FFF', fill:'#FFF' }
      const searchBtnStyle = {
        padding:'12px 22px',
        overflow: 'visible',
        color: grey500,
        left:0
        
      }
      
      return (
              
                    <div id='searchBar-container' >
                        <div className='absolute' style={searchBtnStyle}>
                          <SearchIcon id='searchBtn'  color={grey500} />
                        </div>
                        <input  id='search-input' 
                          type='text' 
                          placeholder='Buscar por nombre' 
                          onChange = {this.handleSearchBar}
                          value={this.props.value} />
  
                      <style jsx>{`
                          #searchBar-container{
                            padding: 12px 12px 12px 72px;
                            border:1px solid #ebebeb;
                            display:flex;
                            position:relative;
                          
                            background-color: #fff;
                            width:100%;

                            height:48px;
                          }

                          .absolute{
                          position:absolute;
                          top:0;
                          display:block;
                          overflow:visible;

                          }



                          input[type=text]#search-input{
                            border: none;
                            height: 24px;
                            z-index: 1;
                            color: rgba(0, 0, 0, 0.87);
                            width: 100%;
                            
                            font-size:16px;
                          }
                          input[type=text]#search-input::placeholder{
                            color:#9e9e9e;
font-weight:bold;
                            }
                          input[type=text]#search-input:focus{
                            outline:none;
                          }

                      `}</style>
                </div>
    )}}
