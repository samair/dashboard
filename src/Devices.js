import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';


import { BrowserRouter as Router, Route, Switch, useHistory,Link,Redirect} from 'react-router-dom'
import StompJS from './StompJs'
import axios from 'axios';
import AlertDialog from "./AlertDialouge"


export default class Devices extends React.Component {

    constructor(props) {
    
    super(props);
    this.state={
      devices:[],
      invalidSession: false

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
   let url = 'https://gateway-alphamon.herokuapp.com/device'
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
    })
    .catch(()=>{
      this.setState({invalidSession:true})
    });
  }
  renderTable = ()=>{
   
    return this.state.devices.map((endpoint, index) => {
         const { _id, deviceName, status,removeDevice } = endpoint //destructuring
         console.log("found device")
         var deviceId=_id
         let deviceUrl = '/device/DeviceInfo/'+ deviceId
         return (
            <tr key={index}>
              
               <td><Link to={{pathname: deviceUrl}} target="_blank">{deviceId}</Link></td>
               <td>{deviceName}</td>
               <td>{status}</td>
          
               <td><AlertDialog/>
         </td>
            </tr>
         )
      })
  }

 


 render() {
  if (this.state.invalidSession){
    return <Redirect to='/' />
  }
   
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
