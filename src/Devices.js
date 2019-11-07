import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';
import { MdBuild } from 'react-icons/md';
import { MdClear } from 'react-icons/md';
import { BrowserRouter as Router, Route, Switch, withRouter,Link} from 'react-router-dom'
import StompJS from './StompJs'

import App from './App'

export default class Devices extends React.Component {

  openDevice = () => {
    window.open("/Device","_blank");
  }

  onDeviceMessage = (message) =>{

    const msg = JSON.parse(message.body)
    console.log(msg)
 
        return (
            <tr key="3">
           
               <td>{msg.deviceId}</td>
               <td>{msg.name}</td>
               <td></td>
               <td></td>
               
            </tr>
            );
          
  }


 render() {
  return (
    
     <Table>
     
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
        <tr key="1">
           
               <td><Link to="/device" target="_blank">12231</Link></td>
               <td>Rspmy</td>
               <td>22:34</td>
               <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
            </tr>
          <tr key="2">
           
               <td><Link to="/device" target="_blank">675561</Link></td>
               <td>RSAADD</td>
               <td>21:34</td>
               <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
            </tr>
            <StompJS onMessage={this.onDeviceMessage} topicName="/topic/devices" server=""/>
          
        </tbody>
      </Table>
  
    
  );  
}
}
