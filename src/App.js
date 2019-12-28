import React from 'react';
import Main from './Main'
import './App.css';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Device from './Device'
import ClippedDrawer from './test'
import DeviceInfo from './DeviceInfo'
import KeysInfo from './KeysInfo'



import { BrowserRouter as Router, Route, Switch, withRouter,Link} from 'react-router-dom'
import SignIn from './user/SignIn';

function App() {
  return (
     <Router>

        <Switch>
      <Route exact path ="/" component = {SignIn} />
      <Route exact path ="/dashboard/:userName" component = {ClippedDrawer} />
      <Route exact path="/device" component={Device} />
      <Route exact path="/device/:id" component={Device} />
      <Route exact path="/Keys/:token/:userId" component={KeysInfo} />
      <Route exact path="/DeviceInfo" component={DeviceInfo} />
      <Route exact path="/DeviceInfo/:userId" component={DeviceInfo} />
      </Switch>
      
      </Router>


  );
}

export default App;
