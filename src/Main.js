import React, { useState } from 'react';
import { Container,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Devices from './Devices'
import AddDevice from './AddDevice'
import UpChart from './UpChart'
const Main = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Container >
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           Admin Dashboard
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <p></p>
        <UpChart/>
          <Row>
            <Col sm="6">
             
                <h2>Discover</h2>
                <CardText>Add devices with monitorPI agents</CardText>
          
                <AddDevice buttonLabel="Add Device"/>
                <p/>

              
            </Col>
           
          </Row>
          <Row>
           <Col sm="6">
            <Card body>
            <h5>Devices</h5>
            <Devices/>
            </Card>
            <p></p>
           </Col>
              <Col sm="6">
            <Card body>
            <h5>Stats</h5>

            </Card>
           </Col>
          </Row>
             
         
        </TabPane>
      </TabContent>
    </div>
    </Container>
  );
}

export default Main;