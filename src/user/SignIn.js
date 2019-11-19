import React, { useState } from "react"
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import ClippedDrawer from '../test'
import {
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: 300,
    },
    Paper: {
        padding: theme.spacing(9, 6),
    },
    button: {
        margin: theme.spacing(2),
      },
  }));

export default function SignIn() {
    
    const classes = useStyles();
    const[userName,setUserName] = useState();
    const[password,setPassword] = useState();
    const[validated,setValidated] = useState();
    const signin =() =>{
       console.log("ahaa!")
    }
    const userHandler =(e) =>{
        setUserName(e.target.value)
        console.log(e.target.value)
    }
    const passwordHandler =(e) =>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }
return(
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: "100vh" }}
><Paper className={classes.Paper}>

<form className={classes.container} noValidate autoComplete="off">
      <div>
          <Typography variant="h5" component="h5">
              SignIn
          </Typography>
      <TextField
         
          id="outlined-error"
          label="User Name"
          
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={userHandler}
        />
        <br></br>
        <TextField
       
          id="outlined-error-helper-text"
          label="Password"
         
          type="password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={passwordHandler}
        />
        <br></br>
        <Button variant="outlined" className={classes.button}  component={Link} to="/dashboard" onClick={signin}>
      SignIn
      </Button>
      
          </div>
</form>
    </Paper></Grid>
);
    
}