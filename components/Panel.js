import React from 'react'
import Filters  from './Filters/Filters'
import List from './List'

export default class extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <Filters  />
                <List items={this.props.content} /> 
            </div>
        )}
}