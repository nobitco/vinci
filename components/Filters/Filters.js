import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FilterIcon from 'material-ui/svg-icons/content/filter-list'
import FilterMenu from './FilterMenu'
import FilterRange from './FilterRange'
import SearchIcon  from 'material-ui/svg-icons/action/search'
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
                <div className='row border root' id='search-set'>
                    <div className='col s12 m8 searchStyle'>
                        <SearchIcon style={{ width:30 , height: 30, color: red500}} />
                        <input name='searchInput' id='main-searchbar' type='text' placeholder='Buscar...'/>
                        <FlatButton 
                            className= "right"
                            label="Filtrar" 
                            icon={<FilterIcon />}
                        />
                    </div>
                    <small className="col s12 grey-text text-darken-1" id="list-results-number"> # Resultados</small>
                  <style jsx>{`
.root{
  margin: 40px 0;
}
.searchStyle{
background-color: #fff;
vertical-align: top;
border-radius: 2px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
position:relative;
}
/*input[type=text]{
border: none;
    padding: 0px;
    margin: 0px;
    height: auto;
    width: 100%;
    z-index: 1;
    background-color: #000; 
    -webkit-text-fill-color: silver;
    color: silver;
    visibility: hidden;

}*/
      `}</style>
                </div>
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
