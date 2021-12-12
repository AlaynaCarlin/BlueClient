import React from "react";
import { Container, Col } from "reactstrap";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div className="loginStyle">
      <Container className="auth-container">
        <Col className="bg-light border" sm="4" id="column">
          <Signup updateToken={props.updateToken} />
        </Col>
      </Container>
    </div>
  );
};
export default Auth;
