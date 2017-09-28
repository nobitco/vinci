import React from 'react'
import Subheader from 'material-ui/Subheader'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {grey600} from 'material-ui/styles/colors'
import FunctionIcon  from 'material-ui/svg-icons/action/stars'
export default class FilterMenu extends React.Component {
  
    constructor(props){
        super(props)
        this.value = this.props.default
    }
  
    handleChange = (event , index, value) => { this.props.onValueChange(value)  }
    
   
    render(){
      
        this.value = this.props.value 
      
        const menu = (<DropDownMenu value={this.value}  
                                    onChange={this.handleChange}
                                    labelStyle={{
                                                color:grey600,
                                                fontSize:14,
                                                }}
                                    style={{minWidth:'100%'}}
                                    id={this.props.id}
                       >
                       {  this.props.items.map( (item, index) => {
                                                return <MenuItem key={index} 
                                                                 value={item} 
                                                                 primaryText={item} 
                                                        />
                       })}
                      </DropDownMenu>)
        
        return(
            <div className='holder'>
            <div>{this.props.labelIcon}</div>
            {menu}    
            <style jsx>{`
              .holder{
                display:flex;
                flex-direction:row;
                justify-content:flex-start;
                align-items:center;
                min-width:100%;
              }
            `}</style>
            </div>
            )
    }   
}
