import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageLayout from './PageLayout'
import {

  Button,
} from 'reactstrap';
import { Paper } from '@material-ui/core';
import { Table } from 'reactstrap';

import Typography from '@material-ui/core/Typography'
import { MdBuild } from 'react-icons/md';
import { MdClear } from 'react-icons/md';

import CardWithContent from './CardWithContent'
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

export default function KeysInfo() {
  const classes = useStyles();
  const [keys ,setkey] = useState([]);

  const updateKeys = (val) =>{
    console.log(val)
    setkey(keys.concat(val))
  }

  return (
    <div className={classes.root}>
      <PageLayout/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CardWithContent keys ={updateKeys}/>
        
      <Paper>
      <Typography gutterBottom variant="h5">
              &nbsp;Your Keys
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
     
     <tr key="1">
        
            <td>4533</td>
       
            <td>Rspmy</td>
            <td>22:34</td>
           <td> <Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
         </tr>
       <tr key="2">
        
            <td>56909</td>
            <td>RSAADD</td>
            <td>21:34</td>
            <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
         </tr>
     
       
   
    
   { 
        keys.map((figure, key) => {
          return (
          <tr key="1">
        
        <td>{figure}</td>
     
          <td>Rspmy</td>
          <td>22:34</td>
          <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
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
