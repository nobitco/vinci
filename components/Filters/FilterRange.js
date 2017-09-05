import React from 'react'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import TimePicker from 'material-ui/TimePicker'
import FlatButton from 'material-ui/FlatButton'
import ClearIcon from 'material-ui/svg-icons/content/clear'



export default class FilterSlider extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          jornada : 'Todos',
          time: '8 - 8'
        };
    }
    
    render(){
        return (<div>
                    <Subheader className='capitalize'>{this.props.label}</Subheader>
                    <Divider />
                    <TimePicker autoOk={true} format='ampm' hintText='Comienzo' />
                    <TimePicker autoOk={true} format='ampm' hintText='Final' />
                    <FlatButton label="Limpiar" icon={<ClearIcon/>}/>
                </div>)
    }
}