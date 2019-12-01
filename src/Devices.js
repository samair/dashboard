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
    console.log(this.props)
    let url = 'http://localhost:8080/v1/users/devices?userId='+this.props.userID
    axios.
    get(
      url

    ).
    then(({ data }) => {
      console.log(data)
      data.map((e,i) =>{
        console.log(e)
        this.setState({

          devices: this.state.devices.concat(e)
      })
      })
      
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
