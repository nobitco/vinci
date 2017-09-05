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
    getTable = (items) => {
        const smallTd = {   width: 75 };
       return( <Table onRowSelection={this.handleRowSelection} multiSelectable={true}>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn style={smallTd}> </TableHeaderColumn>
                    <TableHeaderColumn>Nombre</TableHeaderColumn>
                    <TableHeaderColumn>Función</TableHeaderColumn>
                    <TableHeaderColumn>Horario</TableHeaderColumn>
                    <TableHeaderColumn>Ubicación</TableHeaderColumn>
                    <TableHeaderColumn>Zona</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                { 
                    items.map((item, index) => {
                            return  (
                                <TableRow key={index} selected={this.isSelected(index)}>
                                    <TableRowColumn style={smallTd}> <Avatar src={item.url} /></TableRowColumn>
                                    <TableRowColumn> {item.name}</TableRowColumn>
                                    <TableRowColumn>{item.funcion}</TableRowColumn>
                                    <TableRowColumn>{item.horario}</TableRowColumn>
                                    <TableRowColumn>{item.ubicacion}</TableRowColumn>
                                    <TableRowColumn>{item.zona}</TableRowColumn>
                                </TableRow>
                            )
                    })
                }
            </TableBody>
        </Table>)};

    render(){
        return (<div className='light row'>{ this.getTable(this.props.items) }</div>)
    }
    
}