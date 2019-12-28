import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import Devices from './Devices'
import UpChart from './UpChart'
import AddDevice from './AddDevice'
import PageLayout from './PageLayout'

import axios from 'axios'
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

export default function ClippedDrawer(props) {
  const classes = useStyles();
  const [userId,setUserId] = useState(props.match.params.userName);
  const [token,setToken] = useState(localStorage.getItem("BearerToken"));
  let history = useHistory();
  useEffect(() => {
    console.log(props.match.params.token)
    // Update the document title using the browser API
    document.title = 'Device Information of :'+props.match.params.userName;
   setUserId(props.match.params.userName);
    console.log(userId)
    if (localStorage.getItem("BearerToken") === null){
      console.log("Invalid session")
      history.push("/")
    }

   
  });
 
  return (
    <div className={classes.root}>
  
  <PageLayout token={token} userId={userId}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper><UpChart/></Paper>
        <p></p>
        <Paper>
        <Typography gutterBottom variant="h6">
              &nbsp; &nbsp;Your Devices {userId}
            </Typography>
         
            <Devices userID={userId} token={token}/>
            </Paper>
        <Paper>
            <p>Administration</p>
            <AddDevice buttonLabel="Add Device"/>
        </Paper>
        
      </main>
    </div>
  );
}
