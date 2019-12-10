import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  button: {
  // margin: '1%',
  },
  input: {
    display: 'none',
  },
});

class DetailBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

  render() {
    const { classes } = this.props;

    return (
        <div>
      <Button style={{maxWidth: '25%', maxHeight: '70px', minWidth: '25%', minHeight: '80px', marginRight:'2px', marginLeft:'2px' , backgroundColor:'#170c36', color:'white'}} variant="outlined">
       
        <Typography style={{align: 'right'}}>
        Total Traffic:   255
        </Typography>
      </Button>
      <Button style={{maxWidth: '25%', maxHeight: '70px', minWidth: '25%', minHeight: '80px', marginRight:'2px', backgroundColor:'#170c36', color:'white'}} variant="outlined" className={classes.button}>
        Total Errors:   10 
      </Button>
      <Button style={{maxWidth: '25%', maxHeight: '70px', minWidth: '25%', minHeight: '80px', marginRight:'2px', backgroundColor:'#170c36', color:'white'}} variant="outlined" className={classes.button}>
        Total Error Rate:   50%
      </Button>
      <Button style={{maxWidth: '24%', maxHeight: '70px', minWidth: '24%', minHeight: '80px', marginRight:'2px', backgroundColor:'#170c36', color:'white'}} variant="outlined" className={classes.button}>
        Proxy Latency (P99):   945ms
      </Button>
        
      </div>
    );
  }
}

export default withStyles(styles)(DetailBar);