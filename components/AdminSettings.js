import React from 'react'
import CloseBtn from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import FunctionIcon  from 'material-ui/svg-icons/action/stars'
import ZoneIcon from 'material-ui/svg-icons/communication/location-on'
import ScheduleIcon from 'material-ui/svg-icons/image/timelapse'
import PasswordChangeBtn from 'material-ui/RaisedButton'
import EditIcon from 'material-ui/svg-icons/image/edit'
import EditInfoBtn from 'material-ui/RaisedButton'
import PasswordIcon from 'material-ui/svg-icons/communication/vpn-key'

 const AdminSettings = (props) => {
    var isOut = false
    var user = props.user
    
    const handleInOut = (e) =>{ isOut = (e.type == 'mouseout' ? true : false) }
    
    const handleTrigger = () => { isOut && props.onAdminSettings()  }
    
    const handleChangePassword = (e) => { e.preventDefault() }
    
    const closeBtnStyle = {
          position: 'absolute',
          top: 20,
          right: 26    
    }
    
    const iconMargin = { margin: '0 10px -5px 0' }
    return (
    
      <div id='black-transparency' className='row' onClick={handleTrigger}>
        <div id='card'  className='col s11 m12' onMouseOut={handleInOut} onMouseOver={handleInOut}>
          <CloseBtn style={closeBtnStyle} 
                    onClick={props.onAdminSettings}>
          <CloseIcon/>
          </CloseBtn>
          <div className='row'>
            <div className='col m5 s12'>
            <img className='adminPicture' src={user.url}/>
            </div>
            <div className='divider col s12 hide-on-med-and-up'></div>
            <div className='col m7 s11 push-s1 ' id='content'>
               <div className='row'>
                  <h1 id='userName' className='normal-text-weight'>{user.name}</h1>
                  <h4 className='grey-text  normal-text-weight'>Administrador</h4>
               </div>
               <div className='row '>
                  <p><FunctionIcon style={iconMargin}/>{user.funcion}</p>
                  <p><ZoneIcon style={iconMargin}/>{user.ubicacion}</p>
                  <p><ScheduleIcon style={iconMargin}/>{user.horario[0].toLocaleTimeString('en-US') + " - " + user.horario[1].toLocaleTimeString('en-US')}</p>
               </div>
               
            </div>
            <div className='col s12' id='options'>
                 <a href='' id='changePasswordBtn' onClick={handleChangePassword} className='grey-text text-darken-1'>   <PasswordIcon color='#8b8787'
                                  style={{fontSize: 10, 
                                        marginBottom: -6, 
                                        marginRight: 5}}/>
                                        CAMBIAR CONTRASEÑA
                  </a>
                 <EditInfoBtn primary={true} 
                              label='Editar Info' 
                              icon={<EditIcon />}
                              className='right'/>
                  
               </div>
          </div>
        </div>
      <style jsx>{`
        h1{
          font-size: 2.3em;
        }
        h4{
        margin-top:1em;
        }

        #black-transparency{
        position:fixed;
        background-color:rgba(0,0,0,0.6);
        display:flex;
        justify-content: center;
        width:100%; 
        z-index:4000;
        height:100%;
        }

        #card{
        display:table;
        margin: 0 15px;
        max-width:750px;
        margin-top: 20vh;
        position: relative;
        padding: 40px 20px; 
        background-color: #fff;
        box-shadow: 0 0 16px rgba(0,0,0,0.5); 
        
        }
        .adminPicture{
        display:table
        max-width: 237px;
        margin: 32px auto;
        }
#content{
margin-top:10px;
}
        #userName{
        margin-bottom:-14px;
        }
        #changePasswordBtn{
        font-size:10px;
        margin-left:14px;
        }
        #changePasswordBtn:hover{
        text-decoration:underline;
        }
        #options{
        margin-top:10px;
        display:flex;
        align-items:flex-end;
        justify-content:space-between;
        }
    `}  
    </style>
    </div>
    )
    
  
  }
  
 export default AdminSettings