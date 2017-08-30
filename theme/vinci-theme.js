import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default  (userAgent) => { 
    return getMuiTheme({
        userAgent: userAgent,
        palette : {
        primary1Color: '#2e2c3b',
        }
    })
}
