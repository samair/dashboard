import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Devices from './Devices'
import UpChart from './UpChart'
import AddDevice from './AddDevice'
import PageLayout from './PageLayout'
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

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageLayout/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper><UpChart/></Paper>
        <p></p>
        <Paper>
        <Typography gutterBottom variant="h6">
              &nbsp; &nbsp;Your Devices
            </Typography>
         
            <Devices/>
            </Paper>
        <Paper>
            <p>Administration</p>
            <AddDevice buttonLabel="Add Device"/>
        </Paper>
        
      </main>
    </div>
  );
}
