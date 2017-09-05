import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FilterIcon from 'material-ui/svg-icons/content/filter-list'
import FilterMenu from './FilterMenu'
import FilterRange from './FilterRange'


export default class Filters extends React.Component {
    
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
                <div className='row border' id='search-set'>
                    <div className='col s12'>
                        <input name='searchInput' id='main-searchbar' type='text' placeholder='Buscar...'/>
                        <FlatButton 
                            className= "right"
                            label="Filtrar" 
                            icon={<FilterIcon />}
                        />
                    </div>
                    <small className="col s12 grey-text text-darken-1" id="list-results-number"> # Resultados</small>
                </div>
                <div className='row border' id='filter-set'>
                    <div className='col s12 m4 border'>
                        <FilterMenu items={funciones} label='Función' default='Todos' />
                    </div>
                    <div className='col s12 m4 border'>
                        <FilterMenu items={zonas} label='Zonas' default='Todos' />
                    </div>
                    <div className='col s12 m4 border'>
                       <FilterRange label='Horario' />
                    </div>
                </div>
            </div>
    )}
}
