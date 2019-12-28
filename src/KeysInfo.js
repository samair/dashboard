import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageLayout from './PageLayout'
import {

  Button,
} from 'reactstrap';
import { Paper } from '@material-ui/core';
import { Table,Spinner } from 'reactstrap';

import Typography from '@material-ui/core/Typography'
import { MdBuild } from 'react-icons/md';
import { MdClear } from 'react-icons/md';

import CardWithContent from './CardWithContent'
import axios from 'axios';
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

export default function KeysInfo(props) {
  const classes = useStyles();
  const [userId,setUsedId] = useState(props.match.params.userId)
  const [token,setToken] = useState(props.match.params.token)
  const [keys ,setkey] = useState([]);
  const [loading,setLoading] = useState(false);
  const getData = useState(()=>{
    //let url = 'https://webvidhi-pubsub.herokuapp.com/v1/users/apiKey?userID='+userId
    let url = 'http://localhost:9090/user/apiKey'
    var config = {
      headers: { "Authorization": `Bearer ${token}` }
  }
    axios.get(
      url,config
  
    ).then(({data})=>{
      setkey(data)
      
    })
  })

 
  
 

 
  const updateKeys = (val) =>{
    console.log(val)
    setkey(keys.concat(val))
  }
  const removeKeys = (e)=>{
    setLoading(true)
    console.log(e)
    var config = {
      headers: { "Authorization": `Bearer ${token}` }
  }
    //let url = 'https://webvidhi-pubsub.herokuapp.com/v1/users/apiKey?userID='+userId+'&keyID='+e
    let url = 'http://localhost:9090/user/apiKey?&keyID='+e
    axios.delete(
      url,config
  
    ).then(({data})=>{
      setUsedId(userId)
      setLoading(false)
      setkey(data)
      
    })
   
  }

  return (
    <div className={classes.root}>
      <PageLayout userId={userId} token ={token}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CardWithContent keys ={updateKeys}/>
        
      <Paper>
      <Typography gutterBottom variant="h5">
              &nbsp;Your Keys  
              {loading  ? 
              (<Spinner type="grow"/>):(<p></p>)}
                
              
            </Typography>  
           
      <Table>
     
     <thead>
       <tr>
         <th>KeyID</th>
         <th>Device Name</th>
         <th>Status</th>
         <th>Actions</th>
       </tr>
     </thead>
     <tbody>
    
       
   
    
   { 
        keys.map((figure, key) => {
          return (
          <tr key={key}>
        
        <td>{figure.keyID}</td>
     
          <td>Rspmy</td>
          <td>22:34</td>
          <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" name={key} size="sm" onClick={()=>removeKeys(figure.keyID)}><MdClear/></Button></td>
       </tr>)
        })
      }
       </tbody>
   </Table>
   </Paper>
   
      </main>
   
    </div>
  );
}
