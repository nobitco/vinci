import React  from 'react'
import Avatar from 'material-ui/Avatar'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import {grey600} from 'material-ui/styles/colors'

export default class List extends React.Component {
    
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
  
    
    defaultImg = (url) => {
     
      (url == '' || url == null || url == 'undefined') ? 'http://sto.mv/Uploads/Members/chairman.png' : url
    } 
    
    aditionalInfo =(item) =>(
      <div>
      <div >{item.horario[0].toLocaleTimeString('en-US') + ' - ' + item.horario[1].toLocaleTimeString('en-US')}</div>
                         
    <div>{item.ubicacion} Zona {item.zona}</div>
      </div>
    )

    render(){ 
        
        let rows = [];
        let filterText = this.props.searchText.toLowerCase()
        var items = this.props.items
        console.log(items)
        if( items != 'undefined' || items != null ){
          items.forEach( (item, index) => { 
              if(item.name.toLowerCase().indexOf(filterText) === -1){
                  return;
              }else{

                      rows.push(
                      <TableRow key={index} selected={this.isSelected(index)} displayBorder={false}>
                                  <TableRowColumn style={{width:75}}> 
                                    <Avatar src={item.url == '' || item.url === null ? 'http://sto.mv/Uploads/Members/chairman.png' : item.url} />
                                  </TableRowColumn>
                                  <TableRowColumn>
                                    <h3 style={{marginBottom:3}}>{item.name}</h3>
                                    <h4 style={{color: grey600, marginTop:10}}>{item.funcion}</h4>                            
                                  </TableRowColumn>                          
                       </TableRow>)

              }
          })
        }
      
        return (<div id='list'>
                  <Table onRowSelection={this.handleRowSelection} multiSelectable={true}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn style={{width:75}}> </TableHeaderColumn>
                                <TableHeaderColumn></TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                    <TableBody>
                      {rows}
                    </TableBody>
                  </Table>
                  <style jsx>{`
              #list{
                background-color:#fff;
                width:100%;
              }
            `}</style>
              </div>)
    }
    
}

