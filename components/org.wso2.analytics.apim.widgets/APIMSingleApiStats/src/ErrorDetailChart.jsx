import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  VictoryBar, VictoryChart, VictoryArea, VictoryTheme, VictoryAxis
 } from 'victory';

const styles = () => ({
  button: {
  // margin: '1%',
  },
  input: {
    display: 'none',
  },
});

class ErrorDetailChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

  render() {
    const { classes } = this.props;

    const data = [
      {x: "API1", y: 13000},
      {x: "API2", y: 16500},
      {x: "API3", y: 14250},
      {x: "API4", y: 19000},
      {x: "API5", y: 9000},
      {x: "API6", y: 4000},
    ];

    const chartTheme = {
      axis: {
       style: {
         tickLabels: {
           // this changed the color of my numbers to white
           fill: 'white',
           fontSize: '8px',
           angle: 25,
         },
        //  grid: { stroke: 'none' },
       },
     },
   };

    return (
      <div style={{maxWidth: '100%', maxHeight: '380px', minWidth: '50%', minHeight: '380px', marginRight:'2px', backgroundColor:'#040b4b', color:'white', marginTop:'5px'}}>
        <svg viewBox="-50 1 500 175">
          <h6>Traffic Vs Time</h6>
        <VictoryChart
          theme={chartTheme}
          standalone={false}
          width={400}
          height={200}
        >
          <VictoryArea
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            style={{ data: { fill: "#0c0133" } }}
            data={data}
          />
          <VictoryAxis
            label='API Name'
            style={{
              axisLabel: {
              padding: 30,
              fill: '#ffffff',
              fontSize: '8px',
              },
            }}/>

            <VictoryAxis
                dependentAxis
                label='Api Error Count'
                style={{
                  axisLabel: {
                  padding: 40,
                  fill: '#ffffff',
                  fontSize: '8px',
                  },
                }}/>
        </VictoryChart>
        </svg>
        
      </div>
    );
  }
}

export default withStyles(styles)(ErrorDetailChart);