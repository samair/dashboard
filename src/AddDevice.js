/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Input,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
import { MdInput } from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HorizontalLinearStepper from "./Stepper"
const useStyles = makeStyles(theme => ({
  root: {

    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AddDevice = (props) => {
  const classes = useStyles();
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className={classes.root}>
      <Button color="success" onClick={toggle}><MdInput/></Button>
    
      <Modal isOpen={modal} toggle={toggle} className={className} centered="false" size="lg">
        <ModalHeader toggle={toggle}>Monitor a new device</ModalHeader>
        <ModalBody>
        <Grid container spacing={1}>
        <Grid item md={3} >
        <Paper className={classes.paper}>
          <h6><b>Windows</b></h6>
          Download installer
          <p><a href="#">How to Install</a></p>
        <Button outline color="success" disabled="true">Download</Button>
        </Paper>
          </Grid>
          <Grid item md={3} >
        
        <Paper className={classes.paper}>
        <h6><b>Linux</b></h6>
        Download package
        <p><a href="#">How to Install</a></p>
        <Button outline color="success" disabled="true" >Download</Button>
        </Paper>
          </Grid>
          <Grid item md={3} >
          
        <Paper className={classes.paper}>
        <h6><b>Pi</b></h6>
        Download package
        <p><a href="https://github.com/samair/GoAgent/wiki/Install-GoAgent-on-Raspberry-Pi" target="_blank">How to Install</a></p>
        
        <Button outline color="success" >Download</Button>
        </Paper>
          </Grid>

          <Grid item md={3} >
          
          <Paper className={classes.paper}>
          <h6><b>Mac</b></h6>
          Download package
          <p><a href="#">How to Install</a></p>
          <Button outline color="success"disabled="true">Download</Button>
          </Paper>
            </Grid>
         </Grid>
        
          
    
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddDevice;