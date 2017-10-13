import React from 'react'
import FilterMenu from './FilterMenu'
import FilterRange from './FilterRange'
import {grey600} from 'material-ui/styles/colors'
import FunctionIcon  from 'material-ui/svg-icons/action/stars'
import ZoneIcon from 'material-ui/svg-icons/communication/location-on'
import ScheduleIcon from 'material-ui/svg-icons/image/timelapse'

export default class  extends React.Component {
    
    constructor(props){
        super(props);
        this.values = { funcion:'Todas',
                        zona: 'Todas',
                        horario: [null, null] 
                      }
    }
  
    handleFunctionChange = (value) => { this.values.funcion = value 
                                        this.props.onValuesChange(this.values) }
    
    handleZoneChange = (value) => { this.values.zona = value
                                    this.props.onValuesChange(this.values) }
    
    handleScheduleChange = (values) => { this.values.horario[0] = values[0]
                                         this.values.horario[1] = values[1]
                                         this.props.onValuesChange(this.values)
                                        }
     
    render(){
        
         const funciones = [ 'Todas','Coordinador' , 'Supervisor' , 'Circuitos', 'Alcoholimetros' , 'Casos Especiales', 'Suplentes'];
         const zonas = [ 'Todas','1' , '2', '3' ,'4', '5', '6'];
         const jornadas = [ 'Todos','Diurno','Nocturno'] ;
         const labelIconStyle = {
                  marginRight:-13,
                  marginTop:6,
                  color: grey600
         }
        var values = this.props.values;
      
        return (
           
                <div className='row z-depth-1' id='filters-set'>
                    <div className='col s5 m4 l3 push-s1 push-l2  filter limit'>
                        <FilterMenu items={funciones}  
                          default={funciones[0]} 
                          labelIcon={<FunctionIcon style={labelIconStyle}/>}
                          value={values.funcion}
                          onValueChange={this.handleFunctionChange}
                          />
                    </div>
                    <div className='col s5 m3 l2 push-s1  push-l2  filter limit'>
                        <FilterMenu items={zonas}  
                          default={zonas[0]} 
                          labelIcon={<ZoneIcon style={labelIconStyle}/>}
                          value={values.zona}
                          onValueChange={this.handleZoneChange}
                          />
                    </div>
                    <div className='col s11 m5 l7 push-s1  push-l2  filter limit2'>
                       <FilterRange labelIcon={<ScheduleIcon style={labelIconStyle}/>}
                                    style={{marginLeft:28}} 
                                    values={values.horario}
                                    onValueChange={this.handleScheduleChange}
                         />
                    </div>
               
            
<style jsx>{`
#filters-set{
background-color:#fff;
margin-bottom:0;
}
.filter{
margin:15px 0;
}
.limit {
max-width:250px !important;
}
.limit2{
max-width:420px !important;
}
`}</style>
           
            </div>
    )}
}
