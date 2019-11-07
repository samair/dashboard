/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Input,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
import { MdInput } from "react-icons/md";
const AddDevice = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}><MdInput/></Button>
      &nbsp;<Button> Reresh all </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Devices</ModalHeader>
        <ModalBody>
        <Label>Device Address</Label>
          <Input></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}><FaCheck /></Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddDevice;