import React from 'react'
import SearchBar from './Filters/SearchBar'
import Filters from './Filters/Filters'
import List from './List'

export default class ListPanel extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
    }
  }
  
  getSearchBarValues = (obj) => { 
    this.setState({
      searchText: obj.searchText,
    }) 
  }

  render(){ 
    
    let searchText = this.state.searchText
    let users = this.props.users
    
    return(<div id='ListPanel'>
      <SearchBar className=''
                  onValuesChange={this.getSearchBarValues}
                  value={searchText}/>
      <List items={users}
            searchText={searchText}
            className='col'/>
      <style jsx>{`

                          #ListPanel{
                            width:510px;
                            z-index:1500;
                            position:absolute;
                            top:20px;
                            left:20px;
                            background-color: #fff;
                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
                            transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
border-radius:2px;
                          }
                          #ListPanel{
                            box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
                          }

                        

                      `}</style>
    </div>)
  }
  
}