import React from 'react'
import CloseBtn from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import FunctionIcon  from 'material-ui/svg-icons/action/stars'
import ZoneIcon from 'material-ui/svg-icons/communication/location-on'
import ScheduleIcon from 'material-ui/svg-icons/image/timelapse'

 const AdminSettings = (props) => {
    var isOut = false
    var user = props.user
    
    const handleInOut = (e) =>{ isOut = (e.type == 'mouseout' ? true : false); console.log(isOut) }
    
    const handleTrigger = () => { isOut && props.onAdminSettings()  }
    
    const closeBtnStyle = {
          position: 'absolute',
          top: 26,
          right: 26    
    }
    
    const iconMargin = { margin: '0 10px' }
    return (
    
      <div id='black-transparency' onClick={handleTrigger}>
        <div id='card' onMouseOut={handleInOut} onMouseOver={handleInOut}>
          <CloseBtn style={closeBtnStyle} 
                    onClick={props.onAdminSettings}>
              <CloseIcon/>
          </CloseBtn>
          <div className='row'>
            <img className='adminPicture col m5' src={user.url}/>
            <div className='col m7'>
               <div className='row'>
                  <h1 id='userName'>{user.name}</h1>
                  <h4>Administrador</h4>
               </div>
               <div className='row' className='details'>
                  <p><FunctionIcon style={iconMargin}/>{user.funcion}</p>
                  <p><ZoneIcon style={iconMargin}/>{user.ubicacion}</p>
                  <p><ScheduleIcon style={iconMargin}/>{user.horario[0].toLocaleTimeString('en-US') + " - " + user.horario[1].toLocaleTimeString('en-US')}</p>
               </div>
            </div>
            
          </div>
        </div>
      <style jsx>{`
        #black-transparency{
        position:fixed;
        background-color:rgba(0,0,0,0.6);
        display:flex;
        justify-content: center;
        align-items:  center;
        width:100%; 
        z-index:4000;
        height:100%;
        }

        #card{
        margin-top: -45%;
        position: relative;
        width:763px;
        padding: 70px 50px; 
        background-color: #fff;
        box-shadow: 0 0 16px rgba(0,0,0,0.5); 
        }
.adminPicture{
max-width: 237px;
width:35%;
}
#userName{
margin-bottom:-14px;
}


    `}  
    </style>
    </div>
    )
    
  
  }
  
 export default AdminSettings