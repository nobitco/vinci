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
      this.state = { selected: [] }
    }

    isSelected = id => this.state.selected.indexOf(id) !== -1
 
    getSelectedObjsId = (selected, listItems) => selected.map(selectedIndex => listItems[selectedIndex].id )
   
    handleRowSelection = selectedRows => {
      let selectedObjsId = this.getSelectedObjsId(selectedRows, this.props.items)
      let selected = this.state.selected
      selectedObjsId.forEach( (id) => {
                                        let matchIndex = selected.indexOf(id)
                                        matchIndex === -1 ? selected.push(id) : selected.splice(matchIndex, 1) })
      this.setState({ selected: selected }) 
      this.props.onSelectedItems(this.state.selected)
      //this.props.onSelectedItems(this.getSelectedObjsId(selectedRows, this.props.items))
    }
    
    defaultImg = url => (url == '' || url == null || url == 'undefined') ? 'http://sto.mv/Uploads/Members/chairman.png' : url
     
    aditionalInfo = item => (
      <div>
        <div>{item.horario[0].toLocaleTimeString('en-US') + ' - ' + item.horario[1].toLocaleTimeString('en-US')}</div>
        <div>{item.ubicacion} Zona {item.zona}</div>
      </div>)
    
    componentWillReceiveProps(nextProps){
      console.log('entreeeee')
      this.setState({ selected: nextProps.selectedItems })
    }
  
    render(){ 
          console.log(this.state.selected)

        let rows = [];
        let filterText = this.props.searchText.toLowerCase()
        var items = this.props.items        
        this.getSelectedObjsId(this.state.selected , items)
        
        return (
          <div id='list'>
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
                                  selected={this.isSelected(item.id)}
                                  displayBorder={false}
                                  className='tableRow' >
                          <TableRowColumn style={{ width:75 }}> 
                            <Avatar src={item.url == '' || item.url === null ? 'http://sto.mv/Uploads/Members/chairman.png' : item.url} />
                          </TableRowColumn>
                          <TableRowColumn>
                            <h3 style={{ marginBottom:3 }}>{ item.name }</h3>
                            <h4 style={{ color: grey600, marginTop:10 }}>{ item.funcion }</h4>                  
                          </TableRowColumn>                    
                       </TableRow> ))}
              </TableBody>
            </Table>
            <style jsx>{`
              #list{
                background-color:#fff;
                width:100%;
              }
            `}</style>
          </div> )}  
}

