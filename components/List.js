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
    
    constructor(props){
      super(props)
      this.state = {
        selected: [],
      }
      this.selectedObjs = []
    }

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    }
    
    getSelectedObjsId = (selected, listItems) => {
       return selected.map(  (selectedIndex) => listItems[selectedIndex].id )
    }
    
    handleRowSelection = (selectedRows) => {
      this.setState({ selected: selectedRows }); 
      this.props.onSelectedItems(this.getSelectedObjsId(selectedRows, this.props.items))
    }
    
    defaultImg = (url) => {
      (url == '' || url == null || url == 'undefined') ? 'http://sto.mv/Uploads/Members/chairman.png' : url
    } 
    
    aditionalInfo = (item) =>(
      <div>
        <div >{item.horario[0].toLocaleTimeString('en-US') + ' - ' + item.horario[1].toLocaleTimeString('en-US')}</div>                 
        <div>{item.ubicacion} Zona {item.zona}</div>
      </div>
    )

    render(){ 
        
        let rows = [];
        let filterText = this.props.searchText.toLowerCase()
        var items = this.props.items        
        this.getSelectedObjsId(this.state.selected , items)
        
        return (<div id='list'>
                  <Table onRowSelection={this.handleRowSelection} multiSelectable={true}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn style={{width:75}}> </TableHeaderColumn>
                                <TableHeaderColumn></TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                    <TableBody>
                      {
                        items.map((item, index) => (
                           <TableRow key={index} 
                                selected={this.isSelected(index)}
                                displayBorder={false}
                                className='tableRow'
                                >
                                  <TableRowColumn style={{width:75}}> 
                                    <Avatar src={item.url == '' || item.url === null ? 'http://sto.mv/Uploads/Members/chairman.png' : item.url} />
                                  </TableRowColumn>
                                  <TableRowColumn>
                                    <h3 style={{marginBottom:3}}>{item.name}</h3>
                                    <h4 style={{color: grey600, marginTop:10}}>{item.funcion}</h4>                  
                                  </TableRowColumn>                    
                       </TableRow>
                        ))
                      }
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

