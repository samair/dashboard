import React, { useState,useContext } from "react"
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {Alert} from 'reactstrap'
import UserContext from '../UserInfoContext'


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
  let history = useHistory();
   
    const classes = useStyles();
    const[userName,setUserName] = useState();
    const[password,setPassword] = useState();
    const[validated,setValidated] = useState(false);
    const[loggingin,setLoggingin] = useState(false);
  
  
    const signin =() =>{
      setLoggingin(true)
       console.log("ahaa!")
       // validate the user.

       axios
    .post(
      "http://localhost:8080/v1/users/validate",
      {
        user:userName,
        pass:password
      }
    )
    .then(({ data }) => {
      console.log(data)
    
      setLoggingin(false)
      if (data) {
       
        history.push(`/dashboard/${data}`);
      }
      else{
        setValidated(true)
        console.log("Error");
      }
    });
       

      
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
<UserContext.Provider value="ok">
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: "100vh" }}
> 



  
  <Paper className={classes.Paper}>

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
        <Button variant="outlined" className={classes.button}  onClick={signin}>
        
         &nbsp;SignIn
      </Button>
      <Alert color="danger" isOpen={validated} >
        Invalid User Name or Password!
      </Alert>
          </div>
</form>
    </Paper>
 
    </Grid>
    </UserContext.Provider>
);
    
}