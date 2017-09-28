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
  
  

    render(){
        let rows = [];
        let filterText = this.props.searchText.toLowerCase()
   
        this.props.items.forEach( (item, index) => { 
                        
                        if(item.name.toLowerCase().indexOf(filterText) === -1){
                          return;
                        }else{
                          rows.push(
                              <TableRow key={index} selected={this.isSelected(index)}>
                                <TableRowColumn style={{width:75}}> 
                                  <Avatar src={item.url} />
                                </TableRowColumn>
                                <TableRowColumn> {item.name}</TableRowColumn>
                                <TableRowColumn>{item.funcion}</TableRowColumn>
                                <TableRowColumn>{item.horario}</TableRowColumn>
                                <TableRowColumn>{item.ubicacion}</TableRowColumn>
                                <TableRowColumn>{item.zona}</TableRowColumn>
                              </TableRow>)
                        }});
      
        return (<div className='light row'>
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
              </div>)
    }
    
}

