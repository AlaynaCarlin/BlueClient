import React, { useState } from "react";
import Login from "./Login";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  ModalHeader,
  ModalBody,
  Modal,
} from "reactstrap";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <Navbar color="faded" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
    
          <NavItem>
            <Button className="navbarButton" onClick={toggle}>
              Login
            </Button>{' '}
            
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                  <Login updateToken={props.updateToken} toggle={toggle} />
                </ModalBody>
                <Button onClick={toggle}>Cancel</Button>
              </Modal>
            
            <Button className="navbarButton" onClick={props.clickLogout}>
              Logout
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
