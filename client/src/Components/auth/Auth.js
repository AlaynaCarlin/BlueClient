import React from "react";
import { Container } from "reactstrap";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div className="loginStyle">
      <Container className="auth-container">
        <Signup updateToken={props.updateToken} />
      </Container>
    </div>
  );
};
export default Auth;
