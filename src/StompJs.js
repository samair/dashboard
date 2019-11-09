import React from 'react';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';


export default class StompJS extends React.Component {

constructor(props)  {
	super(props)

 this.socket = new SockJS('https://webvidhi-pubsub.herokuapp.com//test');
 this.stompClient = Stomp.over(this.socket);

}

onMessageCallBack =(message) =>{
	   this.props.onMessage(message)
	 
	}

connectCallBack=()=>{
this.stompClient.subscribe("/topic/devices", this.onMessageCallBack)
}

errorCallback=(message)=>{


  }

 componentDidMount() {


    this.stompClient.connect( {}, this.connectCallBack, this.errorCallback);

 	}


  render() {
        return (
          

        		<p></p>
        );
      }

}