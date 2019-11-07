import ReactApexChart from 'react-apexcharts'
import React from 'react';
import { Container,Row, Col } from 'reactstrap';
import './Dashboard.css'

export default class UpChart extends React.Component {



///////

      
      constructor(props) {
        super(props);

        this.state = {
          options: {
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '60%',
                }
              },
            },
            labels: ['UP']
          },
          series: [70],
          cpuOptions: {
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '60%',
                }
              },
            },
            labels: ['CPU']
          },
          cpu:[10],
        }

      }

      render() {
        return (
          <Container className="Dasboard">
            <Row>
            <Col sm={{ size: 'auto'}}>
            <p></p>
<h6> Devices Reachable</h6>
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="175" />
            </Col>
            <Col xs="auto">
            <p></p>
            <h6> Devices with high CPU Usage</h6>
            <ReactApexChart options={this.state.cpuOptions} series={this.state.cpu} type="radialBar" height="175" />
            </Col>
               <Col xs="auto">
               <p></p>
            <h6> Devices with high Memory Usage</h6>
            <ReactApexChart options={this.state.cpuOptions} series={this.state.cpu} type="radialBar" height="175" />
            </Col>
            </Row>
            </Container>
            
     );
      }
    }
