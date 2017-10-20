import React from 'react'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import TimePicker from 'material-ui/TimePicker'
import ClearBtn from 'material-ui/IconButton'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import {grey800} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable'

 class FilterSlider extends React.Component{
    
    constructor(props){
        super(props)
        this.dates = [ null, null ]
    }
   
   handleChangePicker1 = (event, date) => { 
       this.dates[0] = date
       this.props.onValueChange(this.dates)
       console.log(date.getTime())
   }
   
   handleChangePicker2 = (event, date) => {
       this.dates[1] = date
       this.props.onValueChange(this.dates)
       console.log(date.toLocaleTimeString('en-US'))
   }
   
   clearTimePickers = () => { 
       this.dates = this.dates.map(  (date) => { date = null }   )
       this.props.onValueChange(this.dates)
   }
     
   render(){
      var pickersValues = this.props.values;
       
      const getClearBtn = () => { 
       
       let timeSet = (pickersValues[0] != null && pickersValues[1] != null) ? true : false;
            
        if(timeSet){ 
                  return (<div>
                            <ClearBtn className='toRight'                        
                                      onClick={this.clearTimePickers}
                                      style={{marginLeft: -18}}>
                             <ClearIcon style={{width:16}} />
                         </ClearBtn>
                    </div>
                         )
                }
      }
      
        const textFiledStyle = {
                maxWidth: '60px',
                margin:'0 10px',
                marginTop:5,
                color:grey800,
                fontSize:12
                }
        
        
        return (<div className='holder '>
                
                    <div  className='label'style={{marginRight:20}}> 
                          {this.props.label}
                    </div>
                    <div className='holder '>
                      <TimePicker autoOk={true} 
                          id='picker1'
                          format='ampm' 
                          hintText='Inicio' 
                          textFieldStyle={textFiledStyle}
                          style={{color:grey800}}
                          onChange={this.handleChangePicker1}
                          value={pickersValues[0]}
                        />
                        <TimePicker autoOk={true}
                          id='picker2'
                          format='ampm' 
                          hintText='Final' 
                          textFieldStyle={textFiledStyle}
                          style={{color:grey800}}
                          onChange={this.handleChangePicker2}
                          value={pickersValues[1]}
                          />
                        {getClearBtn()}
                    </div>
               
                    <style jsx>{`
                      .holder{
                        display:flex;
                        flex-direction:row;
                        justify-content: flex-start;
                        align-items: center;
                        width:100%;
                        position:relative;
margin-left:-15px;
                      }
.label{
color:#9e9e9e;
font-size:12px;
margin-top:2px;

}
                   
                    `}</style>
                </div>)
    }
}

export default muiThemeable()(FilterSlider);