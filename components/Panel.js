import React from 'react'
import List from './List'

export default class extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
      var searchText = this.props.searchText
      var filterValues = this.props.filterValues
        return(
            <div> 
                <List items={this.props.content} 
                      searchText={searchText} 
                      filterValues={filterValues}/> 
            </div>
        )}
}