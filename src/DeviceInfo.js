import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DevicesIcon from '@material-ui/icons/Devices';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PageLayout from './PageLayout'
import BdCrumb from './BreadCrumb'

import Device from './Device'
import { BrowserRouter as Router, Route, Switch, withRouter,Link} from 'react-router-dom'

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
  toolbar: theme.mixins.toolbar,
}));

export default function DeviceInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <PageLayout/>
 
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BdCrumb></BdCrumb>
            <Device/>
        
      </main>
    </div>
  );
}
