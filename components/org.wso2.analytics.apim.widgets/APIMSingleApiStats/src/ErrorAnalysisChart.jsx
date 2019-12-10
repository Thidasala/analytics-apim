import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  VictoryPie, VictoryChart, VictoryArea, VictoryTheme, VictoryAxis
 } from 'victory';

const styles = () => ({
  button: {
  // margin: '1%',
  },
  input: {
    display: 'none',
  },
});

class ErrorAnalysisChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

  render() {
    const { classes } = this.props;

    const dataset = [
      { x: "API1 (2%)", y: 100 },
      { x: 'API2 (15%)', y: 75 },
      { x: 'API3 (10%)', y: 40 },
      { x: 'API4 (8%)', y: 55 }
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
        <svg viewBox="-150 0 500 200">
        <VictoryPie
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                    }}
                standalone={false}
                width={200} height={200}
                data={dataset}
                
                innerRadius={0} labelRadius={0}
                colorScale="blue"
                style={{ labels: { fontSize: 8, fill: "white" } }}
                />
        </svg>
        
      </div>
    );
  }
}

export default withStyles(styles)(ErrorAnalysisChart);