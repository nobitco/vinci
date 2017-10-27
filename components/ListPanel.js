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
    
    let searchText = this.state.searchText.toLowerCase()
    let users = this.props.users
    let searchedUsers = []
    // compare the actual user array and get items that match with searchText
    if( users != 'undefined' || users != null ){
          users.forEach( (user, index) => user.name.toLowerCase().indexOf(searchText) !== -1 && searchedUsers.push(user)  )
    }
    
    return(<div id='ListPanel'>
      <SearchBar className=''
                  onValuesChange={this.getSearchBarValues}
                  value={searchText}/>
        { searchText != '' && <List items={searchedUsers} searchText={searchText} className='col' onSelectedItems={this.props.onSelectedUsers}/>}
        <style jsx>{`

                            #ListPanel{
                              width:320px;
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