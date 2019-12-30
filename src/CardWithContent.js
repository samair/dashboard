import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import GenerateKey from './GenerateKey'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function CardWithContent (props){
  const classes = useStyles();
 
  const [keys,setKeys] = useState([])
 const addKeys = (val) =>{
      console.log("Adding keys!",val)
      props.keys(val)
      setKeys(val);
  }

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Keys
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              10
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Every device that needs to be monitored, needs an agent with a unique key, which you can generate here.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <div>
          <Chip className={classes.chip} label="Access All" />
      
        </div>
      </div>
      <div className={classes.section3}>
        <GenerateKey addKeys={addKeys}/>
       
      </div>
    </div>
  );
}
