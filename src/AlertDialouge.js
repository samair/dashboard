import React from 'react';
import {Button }from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MdClear } from 'react-icons/md';
import { MdBuild } from 'react-icons/md';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Button size="sm" onClick={handleClickOpen} ><MdBuild/></Button>&nbsp;
      <Button size="sm" color="danger" onClick={handleClickOpen} >
      <MdClear/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you really want to remove the device?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once the device is removed, agent on the device needs to be explicitly registered.
         
          </DialogContentText>
          <p> <a href="https://github.com/samair/GoAgent/wiki/Re-register-a-device" target="_blank" > More info..</a></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
