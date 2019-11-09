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

    constructor(props) {
    super(props);
    this.state={
      devices:[]
    }
  }

  openDevice = () => {
    window.open("/Device","_blank");
  }
  
  onDeviceMessage = (message) =>{

    const msg = JSON.parse(message.body)
    console.log(msg)
     this.setState({

      devices: this.state.devices.concat(msg)
  })
     console.log(this.state.devices)
     
 
          
  }
  renderTable = ()=>{
    return this.state.devices.map((endpoint, index) => {
         const { deviceID, name, newDevice,removeDevice } = endpoint //destructuring
         console.log("found device")
         var deviceId="1233"
         return (
            <tr key={index}>
           
               <td><Link to={{pathname: '/device/123'}} target="_blank">{deviceId}</Link></td>
               <td>{name}</td>
               <td>UP</td>
          
               <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
            </tr>
         )
      })
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
          
          {this.renderTable()}
        </tbody>
      </Table>
  
    
  );  
}
}
