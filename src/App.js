import React from 'react';
import Main from './Main'
import './App.css';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Device from './Device'



import { BrowserRouter as Router, Route, Switch, withRouter,Link} from 'react-router-dom'

function App() {
  return (
     <Router>

        <Switch>
      <Route exact path ="/" component = {Main} />
      <Route exact path="/device" component={Device} />

      </Switch>
      
      </Router>


  );
}

export default App;
