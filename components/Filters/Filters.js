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
        this.state = { funcion:'Supervisor', zona: '1' };
    }


  
    render(){
        
         const funciones = [ 'Cualquier funcion','Coordinador' , 'Supervisor' , 'Circuitos', 'Alcoholimetros' , 'Casos Especiales', 'Suplentes'];
         const zonas = [ 'Cualquier zona','Zona 1' , 'Zona 2', 'Zona 3' ,'Zona 4', 'Zona 5', 'Zona 6'];
         const jornadas = [ 'Todos','Diurno','Nocturno'] ;
         const labelIconStyle = {
                  marginRight:-13,
                  marginTop:6,
                  color: grey600
         }
        
        return (
           
                <div className='row ' id='filters-set'>
                    <div className='col s5 m4 l3 push-s1 push-l2  filter limit'>
                        <FilterMenu items={funciones}  default={funciones[0]} labelIcon={<FunctionIcon style={labelIconStyle}/>}/>
                    </div>
                    <div className='col s5 m3 l2 push-s1  push-l2  filter limit'>
                        <FilterMenu items={zonas}  default={zonas[0]}  labelIcon={<ZoneIcon style={labelIconStyle}/>}/>
                    </div>
                    <div className='col s11 m5 l7 push-s1  push-l2  filter limit2'>
                       <FilterRange labelIcon={<ScheduleIcon style={labelIconStyle}/>}
                       style={{marginLeft:28}} />
                    </div>
               
            
<style jsx>{`
#filters-set{
background-color:#f5f5f5;
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
