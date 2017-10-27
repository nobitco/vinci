import React from 'react'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app'
import Link from 'next/link'
import Avatar from 'material-ui/Avatar'

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.handleTouchTap = this.handleTouchTap;
        this.handleRequestClose = this.handleRequestClose;
    }
    
    
    handleTouchTap = (event) => {
        event.preventDefault();
        this.setState({
            open:true,
            anchorEl: event.currentTarget,
        });
        
        
    }
    
    handleRequestClose = () => {
        this.setState({
            open:false,
        });
    }
    
    handleAdminBtn = (e) => {
       e.preventDefault()
       this.handleRequestClose()
       this.props.onAdminSettings()       
    }
    
    render(){
        const user = this.props.user
        const labelStyles = {
                 marginLeft: 18,
                 marginBottom:2,
                 marginTop:6
        }
        
        const AdminBtn = (props) => {
            
            return (
                    <a href="" className="adminBtn grey lighten-4" onClick={props.onClick}>
                        <Avatar src={user.url} className='left' size={54}/>
                        <span className='left'>
                            <h4 style={labelStyles}>{user.name}</h4>
                            <h5 className="grey-text text-darken-2" style={labelStyles}>Admnistrador</h5>
                        </span>
                        
                    </a>
        )};
      
        return(
            <div>
                <Avatar src={user.url} id="userPic" onClick={this.handleTouchTap}/>
                <Popover open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal:'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal:'right' , vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <AdminBtn onClick={this.handleAdminBtn}/>
                    <Menu>
                        <Link href="/login"><a>
                            <MenuItem leftIcon={<ExitIcon />} primaryText='Cerrar Sesión'/></a>
                        </Link>
                    </Menu>  
                </Popover>
            </div>
        )}
}
