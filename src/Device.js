import {
  Container, Row,Col, Form,
  FormGroup, Label, Input,
  Button,Card,Progress,Spinner,checkbox
} from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';
import { MdBuild } from 'react-icons/md';
import { MdClear } from 'react-icons/md';
import UpChart from './UpChart'
import Doughnut from './Doughnut'
import './Doughnut.css' 
import Radial from './Radial'
import LineChart from './lineChart'
import { FaCheck, FaTableTennis } from 'react-icons/fa';
import { MdInfo } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import axios from 'axios'
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import Paper from '@material-ui/core/Paper';

export default class Device extends React.Component {

 
constructor(props)  {
    super(props)

    this.cpuRadial = React.createRef();
    this.diskRadial = React.createRef();
    this.memRadial = React.createRef();
    this.refLineChart = React.createRef();


    this.state = {
    cpu_usage: "10",
    mem_usage:"20",
    loading:true,
    message:{},
    cpuRadialMounted:false,
    diskRadialMounted:false,
    memRadialMounted:false,
    deviceId:this.props.deviceId,
    os:"",
    cpu_series:[]
    
  };
  this.connectCallBack = this.connectCallBack.bind(this);
  this.onMessageCallBack = this.onMessageCallBack.bind(this);
  this.socket = new SockJS('http://kong-proxy.kong.svc.cluster.local/device/connect');
  this.stompClient = Stomp.over(this.socket);
  }
  randomValues = () =>{
     const cpuRandom = Math.floor(Math.random() * 100) + 1 ;
        const memRandom = Math.floor(Math.random() * 100) + 1 ;
        const tempRandom = Math.floor(Math.random() * 100) + 1 ;
        const wifiRandom = Math.floor(Math.random() * 100) + 1 ;
        const diskRandom = Math.floor(Math.random() * 100) + 1 ;

        const messageR = {
          cpu:cpuRandom,
          mem:memRandom,
          temp:tempRandom,
          wifi:wifiRandom,
          disk:diskRandom
        }
        this.setState({message:messageR})
  }
 // devWebScoket = new WebSocket('wss://echo.websocket.org/')
 // devWebScoket = new WebSocket('ws://localhost:8080/pubsub');
 onMessageCallBack(message) {
 
  const msg = JSON.parse(message.body)
  this.setState({mem_usage:msg.memUsage})
  this.setState({cpu_usage:msg.cpuUsage})
  this.setState({disk_usage:msg.diskUsage})
  this.setState({os:msg.osName})
  this.setState({cpu_series:this.state.cpu_series.concat(this.state.cpu_usage)})
  this.memRadial.current.setValue(this.state.mem_usage);
  this.cpuRadial.current.setValue(this.state.cpu_usage);
  this.diskRadial.current.setValue(this.state.disk_usage);
  this.refLineChart.current.setValue(msg);

  //console.log(this.state.mem_usage)
 }
    connectCallBack(){
      this.setState({loading:false})
      const sessionMsg = {
        deviceId:this.state.deviceId
      }
     
      this.stompClient.send("/stream/start",{},JSON.stringify(sessionMsg))
      
      this.stompClient.subscribe("/topic/"+this.state.deviceId, this.onMessageCallBack)

     }
     errorCallback=()=>{
      return (
          <p> Something is wrong, try refreshing the page </p>
        )
     }

   componentDidMount() {

    

    this.stompClient.connect( {}, this.connectCallBack, this.errorCallback);

   }

   cpuRadialMount = () => {
    this.setState({cpuRadialMounted:true})
   }

     diskRadialMount = () => {
    this.setState({diskRadialMounted:true})
   }

   memRadialMount = () => {
    this.setState({memRadialMounted:true})
   }

  render() {

 if(this.state.loading) {
          return ( 
            <Spinner type="grow" color="info" />)
      } 
  return (

    <Container className="deviceContainer">
      <Paper>
     <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Temperature</th>
            <th>Fan Speed</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr key="2">
           
               <td>{this.state.deviceId }</td>
               <td>{}</td>
               <td>21:34</td>
               <td>21:34</td>
               <td>21:34</td>
               <td>21:34</td>
               <td>loc</td>
               <td><Button size="sm"><MdBuild/></Button>&nbsp;<Button color="danger" size="sm"><MdClear/></Button></td>
            </tr>
       
          
        </tbody>
      </Table>
      </Paper>
  
     
     
      <Paper>

       <Row>
       <Col xs="auto">
   
          <Radial ref={this.cpuRadial} mounted={this.cpuRadialMount} label="CPU Usage" value={this.state.cpu_usage}  />
         
       </Col>
       <Col xs="auto">
       
       </Col>
        <Col xs="auto">
       <Radial ref={this.diskRadial} mounted={this.diskRadialMount} label="Disk Used"  value={this.state.cpu_usage} />
       </Col>
        
        <Col xs="auto">
       <Radial ref={this.memRadial} mounted={this.memRadialMount} label="Memory Used"  value={this.state.mem_usage} />
       </Col>


       </Row>

    </Paper>
    <p></p>
  
    <Row>
     
     <Col xs="auto">
     <Card body>
      <h5> Servers: </h5>
      <ul>
      <li>
      SSH:&nbsp; <FaCheck/>
      </li>
      <li>
      &nbsp;FTP:&nbsp; <FaCheck/>
      </li>

      </ul>

      </Card>
       
     </Col>
     <Col xs="auto">
       <Card body>

       <h5><MdInfo/>Device Information: </h5>
       Version: 3B+
       <br/>
       OS: {this.state.os}
       </Card>
     </Col>
    <Col xs="auto">
    <Card body>
    <div>
    <h5>Swap Used:</h5>
    <Progress  value={this.state.cpu_usage}/>
    </div>
    </Card>
    </Col>
    <Col xs="auto">
    <Card body>
    <div>
    <h5>CPU Temperature:</h5>
    <Progress  color = "warning" value={this.state.temp_usage}/>
    </div>
    </Card>
    </Col>
      <Col xs="auto">
    <Card body>
    <div>
    <h5> <FaWifi/>Wifi Usage:</h5>
    <Progress  color = "success" value={this.state.wifi_usage}/>
    </div>
    </Card>
    </Col>
    </Row>

    <p></p>
       <Row>

       <Col>
      
       
        <LineChart ref={this.refLineChart} perfValues={this.state.cpu_series} perfLabels={"Memory"} perfXaxis={[1,2,3,4,5]}/ >
       </Col>
       </Row>
       
     
         
  </Container>

      

    
  );
}
}
  