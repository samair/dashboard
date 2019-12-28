/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState,useEffect} from 'react';
import { Input,Label,Button, Modal, ModalHeader, ModalBody, ModalFooter ,Alert} from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
import { MdInput } from "react-icons/md";
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from "axios";
const GenerateKey = (props) => {
  var {
    buttonLabel,
    className,
    keys
  } = props;

  const [modal, setModal] = useState(false);
  const [key, setKey] = useState("");
  const [iKey, setiKey] = useState("");

  const toggle = () => {
    setModal(!modal);
    let url = "http://localhost:9090/user/apikey"
    var config = {
      headers: { "Authorization": `Bearer` }
  }
    axios
    .put(
      "https://webvidhi-pubsub.herokuapp.com/apikey"
    )
    .then(({ data }) => {
      setKey(data);
      
    });
 
 
  };

  const HandleInput = (e) =>{
    setiKey(e.target.value)
  };

  const addkey = () =>{

    
    props.addKeys(iKey)
    //console.log(keys)
    setModal(!modal);
  };


    
  return (
    <div>
      <Button color="success" onClick={toggle}><AddBoxIcon/></Button>
     
      <Modal isOpen={modal} toggle={toggle} className={className} centered="false">
        <ModalHeader toggle={toggle}>Generating Key</ModalHeader>
        <ModalBody>
          {key}
          <br/>
          <br/>
          <Alert color="primary">
        Save this key somewhere safe, it is not stored by us!
      </Alert>
          <br/>
        <Label>Key Desciption</Label>
          <Input onChange={HandleInput} ></Input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addkey}><FaCheck /></Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default GenerateKey;