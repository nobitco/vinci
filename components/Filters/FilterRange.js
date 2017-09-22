import React from 'react'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import {grey800} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable'

 class FilterSlider extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          picker1 : null,
          picker2: null
        }
      this.handleChangePicker1 = this.handleChangePicker1.bind(this)
      this.handleChangePicker2 = this.handleChangePicker2.bind(this)
      this.clearTimePickers = this.clearTimePickers.bind(this)
    }
   
   handleChangePicker1(event, date){
    this.setState({ picker1: date })
   }
   
   handleChangePicker2(event, date){
     this.setState({ picker2: date })
   }
   
   clearTimePickers(){
     this.setState({ picker1: null , picker2: null});
   }
     
    render(){
      
      const s = {
                maxWidth: '96px',
                margin:'0 10px',
                marginTop:5,
                color:grey800,
                fontSize:15
                }
  
      const clearBtns = () => { 
       
                let timeSet = (this.state.picker1 != null && this.state.picker2 != null) ? true : false;
            
              if(timeSet){ 
                  return (<div><RaisedButton label="Limpiar" 
                          className='hide-on-med-and-up toRight'
                          id='smallBtn'
                          style={{position:'absolute', right:0, top:10}}
                          primary={true}
                          onClick={this.clearTimePickers}
                          labelStyle={{ marginLeft: 'auto', 
                                        fontSize:10, 
                                        fontWeight:'bold'}}
                          icon={<ClearIcon style={{width:14}} />}
                         />
                          <RaisedButton label="Limpiar " 
                          className='hide-on-small-only anim'
                          id='largeBtn'
                          primary={true}
                          onClick={this.clearTimePickers}
                          labelStyle={{fontSize:10, fontWeight:'bold'}}
                          icon={<ClearIcon style={{width:14}} />}
                         />

                    </div>)
                }}

  
        return (<div className='holder '>
                
                <div  style={{marginRight:20}}> {this.props.labelIcon}</div>
                    <div className='holder '>
                      <TimePicker autoOk={true} 
                          id='picker1'
                          format='ampm' 
                          hintText='Comienzo' 
                          textFieldStyle={s}
                          style={{color:grey800}}
                          onChange={this.handleChangePicker1}
                          value={this.state.picker1}
                        />
                        <TimePicker autoOk={true}
                          id='picker2'
                          format='ampm' 
                          hintText='Final' 
                          textFieldStyle={s}
                          style={{color:grey800}}
                          onChange={this.handleChangePicker2}
                          value={this.state.picker2}
                          />
                        {clearBtns()}
                  </div>
               
              <style jsx>{`
                .holder{
                  display:flex;
                  flex-direction:row;
                  justify-content: flex-start;
                  align-items: center;
                  width:100%;
                  position:relative;
                }
                .holder-space-around{
                  display:flex;
                  width:100%;
                  flex-direction:row;
                  justify-content: space-around;
                  align-items: center;
                }
                
              `}</style>
                </div>)
    }
}

export default muiThemeable()(FilterSlider);