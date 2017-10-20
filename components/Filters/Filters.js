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
           
                <div id='filters-set'>
                    <div >
                        <FilterMenu items={funciones}  
                          default={funciones[0]} 
                          labelIcon='Funcion'
                          value={values.funcion}
                          onValueChange={this.handleFunctionChange}
                          />
                    </div>
                    <div >
                        <FilterMenu items={zonas}  
                          default={zonas[0]} 
                          labelIcon='Zona'
                          value={values.zona}
                          onValueChange={this.handleZoneChange}
                          />
                    </div>
                    <div >
                       <FilterRange label='Horario'
                                    style={{marginLeft:28}} 
                                    values={values.horario}
                                    onValueChange={this.handleScheduleChange}
                         />
                    </div>
               
            
<style jsx>{`
#filters-set{
position:absolute;
top:10px;
left:30%;
z-index:1500;
background-color:#fff;
margin-bottom:0;
padding: 10px 24px;
display:flex;
flex-direction:row;
justify-content:space-between;
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
