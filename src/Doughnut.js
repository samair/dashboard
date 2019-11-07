import ReactApexChart from 'react-apexcharts'
import React from 'react';
import { Container,Row, Col } from 'reactstrap';
import './Dashboard.css'

export default class Doughnut extends React.Component {



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
          <Container>
      < h6 class="center">CPU Usage</h6>
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="175" />
           
             </Container>
     );
      }
    }
