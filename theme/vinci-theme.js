import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {yellow900} from 'material-ui/styles/colors'
export default  (userAgent) => { 
    return getMuiTheme({
        userAgent: userAgent,
        palette : {
        primary1Color: '#2e2c3b',
        primary3Color: '#FF0324',
        accent1Color: yellow900,
        accent2Color: '#FFF',

        }
    })
}
