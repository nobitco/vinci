import React from 'react'
import Subheader from 'material-ui/Subheader'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {grey600} from 'material-ui/styles/colors'
import FunctionIcon  from 'material-ui/svg-icons/action/stars'
export default class FilterMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = { value : this.props.default };
    }
    
    handleChange = (event , index, value) => { this.setState({ value }) }
    
    render(){
        const menu = (<DropDownMenu value={this.state.value}  
                          onChange={this.handleChange}
                          labelStyle={{
                                color:grey600,
                                fontSize:14,
                                 
                          }}
                        style={{minWidth:'100%'}}
                       >
                            {  this.props.items.map( (item, index) => {
                                return <MenuItem key={index} value={item} primaryText={item} />
                            })}
                      </DropDownMenu>);
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
