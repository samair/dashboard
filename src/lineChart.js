

import React, { useState,Math } from 'react';
import ReactApexChart from 'react-apexcharts'
import ApexChart from 'react-apexcharts'
import { Container,FormGroup,Input,Label} from  'reactstrap'
import './LineChart.css'

export default class LineChart extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: false
            }
          },

          colors: ['#77B6EA', '#545454'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Performance Charts',
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            
            size: 6
          },
          xaxis: {
            categories: this.props.perfXaxis,
            title: {
              text: 'Times in Seconds'
            }
          },
          yaxis: {
            title: {
              text: 'CPU Usage'
            },
            min: 0,
            max: 100
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        },
        series: [
            {
              name :"CPU",
              data: [1,2,3,4,5]
            }
        ],
        memorySeries: [
          {
            name :"Memory",
              data: [1,2,3,4,5]
          }
        ],
      }
    }
    options = (event) =>{
      console.log(event.target.name)
      console.log(this.props.perfLabels)
      if (event.target.checked === true){
        if (event.target.name === "CPU"){
        this.setState({
          series: this.state.series.concat(  {
            name: "CPU",
            data: [28, 29, 33, 36, 32, 32, 33]
          })
        })
      }
      else
      {
        this.setState({
          series: this.state.series.concat(  {
            name: "Memory",
            data: [12, 11, 14, 18, 17, 13, 13,45]
          })
        })
      }
      }
      else
      {
        console.log(event.target.name )
        this.setState({series: this.state.series.filter(item => item.name !== event.target.name )
      });
      }
    } 
    setValue = (msg) => {
      console.log("ok now lets update time series!!",msg)
      const newSeries = [];
      const newMemSeries = [];

      this.state.series.map((s) => {
        var data = s.data.map((val) => {
          return val
        })
        console.log(s.name)
        if (s.name === "CPU"){
        data = [...data,msg.cpuUsage]
        data = data.slice(-10)
        console.log(data)
        newSeries.push({ data, name: s.name })
        console.log(newSeries)
        }
      })

      this.state.memorySeries.map((s) =>{
        var data = s.data.map((val) => {
          return val
        })
        console.log(s.name)
        if (s.name === "Memory"){
        data = [...data,msg.memUsage]
        data = data.slice(-10)
        console.log(data)
        newMemSeries.push({ data, name: s.name })
        console.log(newMemSeries)
        }
      })
      
      this.setState({
        series: newSeries
      })
      this.setState({
        memorySeries: newMemSeries
      })
      // set the value of memory 
    }

    render() {

      return (
        
        <Container className="box" >
          <div id="chart">
           <FormGroup check>
        <Label check>
          <Input type="checkbox" name="CPU" onClick={this.options}/>{' '}
          CPU
        </Label>
         </FormGroup>
          <FormGroup check>
                <Label check>
          <Input type="checkbox" name="Memory" onClick={this.options}/>{' '}
          Memory
        </Label>

      </FormGroup>
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
            <p>Memory:</p>
            <ReactApexChart options={this.state.options} series={this.state.memorySeries} type="line" height="350" />
          </div>
          </Container>
  

      );
    }
  }