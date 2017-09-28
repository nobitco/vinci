import React from 'react'
import List from './List'

export default class extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
      var searchText = this.props.searchText;
        return(
            <div> 
                <List items={this.props.content} searchText={searchText}/> 
            </div>
        )}
}