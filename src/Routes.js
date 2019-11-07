
import React from 'react';

import { BrowserRouter as Router, Route, Switch, withRouter,Link} from 'react-router-dom'
import Device from './Device'
import App from './App' 

export default class Routes extends React.Component {


 render() {
  return (
  <Router>
      <Switch>

      <Route path="/Device" component={Device} />

      </Switch>
      </Router>
  );  
}
}
