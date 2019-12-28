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
import axios from 'axios';



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
  componentDidMount() {
    console.log(this.props.token)

   // let url = 'https://webvidhi-pubsub.herokuapp.com/v1/users/devices
   let url = 'http://localhost:9090/device'
    var config = {
      headers: { "Authorization": `Bearer ${this.props.token}` }
  }
  console.log(config)
    axios.
    get(
      url,
     config
    ).
    then(({ data }) => {
      console.log(data)
      if (data === ""){
      }
      else {
      data.map((e,i) =>{
        console.log(e)
        this.setState({

          devices: this.state.devices.concat(e)
      })
      })
    }
    });
  }
  renderTable = ()=>{
   
    return this.state.devices.map((endpoint, index) => {
         const { _id, deviceName, newDevice,removeDevice } = endpoint //destructuring
         console.log("found device")
         var deviceId=_id
         return (
            <tr key={index}>
           
               <td><Link to={{pathname: '/DeviceInfo/123'}} target="_blank">{deviceId}</Link></td>
               <td>{deviceName}</td>
               <td>UP</td>
          
               <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
            </tr>
         )
      })
  }

 


 render() {
  
   
  return (

     <Table>
      <StompJS onMessage={this.onDeviceMessage} topicName="/topic/devices" server=""/>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
       
         
          
          {this.renderTable()}
        </tbody>
      </Table>
  
    
  );  
}
}
