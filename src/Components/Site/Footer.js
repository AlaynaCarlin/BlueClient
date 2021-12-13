import { Row, Navbar, Collapse } from "reactstrap";
// import styled from "styled-components";

const Footer = () => {
  return (
    <Navbar fixed="bottom" expand="md">
      <Collapse navbar>
      <Row >
        <p className="footer">&copy;Team Special Smarts 2021</p>
      </Row>
      </Collapse>
    </Navbar>
  );
};

export default Footer;
