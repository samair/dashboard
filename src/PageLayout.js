import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Switch, withRouter,Link,useHistory} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import DevicesIcon from '@material-ui/icons/Devices';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LinkListItem from './LinkListItem'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));


export default function PageLayout(props) {
  let history = useHistory();
  const classes = useStyles();
  const  [token,setToken] = useState(localStorage.getItem("BearerToken"))
  const [keysUrl,setKeysUrl] = useState('/keys/'+token+'/'+props.userId)
  const [dashboardUrl, setDashBoardUrl] = useState('/dashboard/'+props.userId)
  function logout(){

    console.log("Logout!!")
    //clear local storage
    localStorage.removeItem("BearerToken")
    history.push(`/`);
   }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
        Alphamon
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
            <LinkListItem to={dashboardUrl} primary="Devices" icon={<DevicesIcon /> } />
            <LinkListItem to={dashboardUrl}  primary="Reports" icon={<ShowChartIcon />} />
        </List>
        <Divider />
        <List>
        <LinkListItem to={keysUrl} primary="Keys" icon={<VpnKeyIcon />} />
        </List>
      </Drawer>
     
    </div>
  );
}
