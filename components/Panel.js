import React from 'react'
import List from './List'

export default class extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <List items={this.props.content} /> 
            </div>
        )}
}