import React, { useState } from "react";
import Login from "./Login";
import Logo from "../assets/I8That_Logo_FinalSVGA_Updated.svg";
import NavLogo from "../assets/I8That_Logo_NavBar.SVGA.svg"

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
  NavbarBrand,
} from "reactstrap";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
    <Navbar color="faded" light expand="md">
      <NavbarBrand >
        <img src={NavLogo} alt="logo" style={{ width: 120 }} />  
      </NavbarBrand>
      <NavbarToggler onClick={toggle}  size="sm"/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar >
          <NavItem>
            <Button className="navbarButton" onClick={toggle} size="sm">
              Login
            </Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader>Login</ModalHeader>
              <ModalBody>
                <Login updateToken={props.updateToken} toggle={toggle} />
              </ModalBody>
              <Button onClick={toggle}>Cancel</Button>
            </Modal>
            <Button className="navbarButton" onClick={props.clickLogout} size="sm">
              Logout
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  );
};

export default Sitebar;
