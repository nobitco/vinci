import React from 'react'
import Subheader from 'material-ui/Subheader'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

export default class FilterMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = { value : this.props.default };
    }
    
    handleChange = (event , index, value) => { this.setState({ value }) }
    
    render(){
        const menu = (<DropDownMenu value={this.state.value}  
                          onChange={this.handleChange}>
                            {  this.props.items.map( (item, index) => {
                                return <MenuItem key={index} value={item} primaryText={item} />
                            })}
                      </DropDownMenu>);
        return(
            <div>
                <Subheader className='capitalize'>{this.props.label}</Subheader>
                <Divider />
                {menu}
            </div>
            )
    }
     
}
