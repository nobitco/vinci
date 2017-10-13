import React  from 'react'
import Avatar from 'material-ui/Avatar'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class extends React.Component {
    
    state = {
        selected: [1],
    }

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    }
    
    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    }
  
    getAvailableFilters = (obj) =>  {
        
        let filters = {}

        for(var prop in obj){
            if(typeof obj[prop] === 'string'){  
                 if(obj[prop] != 'Todas') filters[prop] = obj[prop] 
            }else{  // case for array items on obj
                if(obj[prop][0] != null  && obj[prop][1] != null ) filters[prop] = obj[prop]
            }      
        }
        
    return filters
        
    }
    
    doesItemMatch = (filtersObj, userObj) =>  {
        
     let matches = 0
     let objSize = 0

     for(var prop in filtersObj){
             objSize++
             if(prop != 'undefined' ){
                 if(typeof filtersObj[prop] === 'string'){ //string filter case
                     filtersObj[prop].indexOf(userObj[prop]) >= 0 && matches++
                 }else{                                    // array filter case Ex: horario
                if(filtersObj[prop][0].getTime() <= userObj[prop][0].getTime() && filtersObj[prop][1].getTime() >= userObj[prop][1].getTime() ) matches++  //FIX
                 }
             }
         }
        
     return matches == objSize && true 
        
    }
    
    defaultImg = (url) => {
     
      (url == '' || url == null || url == 'undefined') ? 'http://sto.mv/Uploads/Members/chairman.png' : url
    } 

    render(){
        
        let rows = [];
        let filterText = this.props.searchText.toLowerCase()
        var filterValues = this.props.filterValues
        var availableFilters = {}
        availableFilters = this.getAvailableFilters(filterValues)
        
        this.props.items.forEach( (item, index) => { 
            console.log(item.name.toLowerCase().indexOf(filterText))
            if(item.name.toLowerCase().indexOf(filterText) === -1){
                return;
            }else{
                  if(this.doesItemMatch(availableFilters, item)){
                    rows.push(
                    <TableRow key={index} selected={this.isSelected(index)}>
                                <TableRowColumn style={{width:75}}> 
                                  <Avatar src={item.url == '' || item.url === null ? 'http://sto.mv/Uploads/Members/chairman.png' : item.url} />
                                </TableRowColumn>
                                <TableRowColumn> {item.name}</TableRowColumn>
                                <TableRowColumn>{item.funcion}</TableRowColumn>
                                <TableRowColumn>{item.horario[0].toLocaleTimeString('en-US') + ' - ' + item.horario[1].toLocaleTimeString('en-US')}</TableRowColumn>
                                <TableRowColumn>{item.ubicacion}</TableRowColumn>
                                <TableRowColumn>{item.zona}</TableRowColumn>
                     </TableRow>)
                  }      
            }
        })
      
        return (<div className='z-depth-5' id='list'>
                  <Table onRowSelection={this.handleRowSelection} multiSelectable={true}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn style={{width:75}}> </TableHeaderColumn>
                                <TableHeaderColumn>Nombre</TableHeaderColumn>
                                <TableHeaderColumn>Función</TableHeaderColumn>
                                <TableHeaderColumn>Horario</TableHeaderColumn>
                                <TableHeaderColumn>Ubicación</TableHeaderColumn>
                                <TableHeaderColumn>Zona</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                    <TableBody>
                      {rows}
                    </TableBody>
                  </Table>
                  <style jsx>{`
              #list{
                background-color:#fff;
                z-index:100;
                padding:40px 30px;
                width:408px;
                position:absolute;
                top:20px;
                left:20px;

              }
            `}</style>
              </div>)
    }
    
}

