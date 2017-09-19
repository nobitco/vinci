import React from 'react'
import FilterMenu from './FilterMenu'
import FilterRange from './FilterRange'
import {red500} from 'material-ui/styles/colors'


export default class  extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { funcion:'Supervisor', zona: '1' };
    }

    
    render(){
        
         const funciones = [ 'Todos','Coordinador' , 'Supervisor' , 'Circuitos', 'Alcoholimetros' , 'Casos Especiales', 'Suplentes'];
         const zonas = [ 'Todas','1' , '2', '3' ,'4', '5', '6'];
         const jornadas = [ 'Todos','Diurno','Nocturno'] ;
      
        
        return (
            <div>
                <div className='row border' id='filter-set'>
                    <div className='col s12 m4 border'>
                        <FilterMenu items={funciones} label='Función' default={funciones[0]} />
                    </div>
                    <div className='col s12 m4 border'>
                        <FilterMenu items={zonas} label='Zonas' default={zonas[0]} />
                    </div>
                    <div className='col s12 m4 border'>
                       <FilterRange label='Horario' />
                    </div>
                </div>
            </div>
    )}
}
