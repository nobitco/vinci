import React from 'react'
import Subheader from 'material-ui/Subheader'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {grey800} from 'material-ui/styles/colors'
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
                                                color:grey800,
                                                fontSize:12,
                                                fontWeight:'bold'
                                                }}
                                    style={{marginLeft: '-14px'}}
                                    id={this.props.id}
                                    underlineStyle={{ display: 'none' }}
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
            <div className='label'>{this.props.labelIcon}</div>
            {menu}    
            <style jsx>{`
              .holder{
                display:flex;
                flex-direction:row;
                align-items:center;
                width:50%;
              }
              .label{
font-size:12px;
color:#9e9e9e;
margin-top:7px;
}
            `}</style>
            </div>
            )
    }   
}
