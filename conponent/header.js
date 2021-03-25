import {AppBar,Typography,Toolbar} from '@material-ui/core'
import {makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
      background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    textCompanyName: {


    },
  });
  
export default function HeaderBar () {
    const classe = useStyles();
    return(

        <AppBar position="absolute" className={classe.root}>
             <Toolbar variant="dense">
                <Typography variant="h6" color="#ffffff" align="center" >
                    ONE-CRM
                </Typography>
            </Toolbar>

        </AppBar>
    )
}