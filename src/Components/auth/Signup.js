import React, { useState } from "react";
import Logo from "../assets/I8That_Logo_FinalSVGA_Updated.svg";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  FormText,
  Container,
  List,
} from "reactstrap";
// import { response } from "express";
import APIURL from "../../helpers/environment";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    let errorCode;
    event.preventDefault();
    // console.log(email, password)
    fetch(`${APIURL}/user/register`, {
      method: "POST",

      body: JSON.stringify({ user: { email: email, password: password } }),

      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => {
        errorCode = response.status;
        console.log(errorCode);
        if (errorCode === "409") {
          setMessage("Email already in use");
          console.log(message);
        } else if (errorCode === "500") {
          setMessage("Failed to register user");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.updateToken(data.sessionToken);
      });
  };
  const validPassword = () => {
    return (
      password.length > 8 &&
      password.match(/[A-Z]/) !== null &&
      password.match(/[a-z]/) !== null &&
      password.match(/[0-9]/) !== null
    );
  };

  const validEmail = () => {
    return email.match(/@/) !== null;
  };

  return (
    <div>
      <img src={Logo} alt="logo" width={300} />
      <h3 className="title">
        Register free today for a healthier you tomorrow!
      </h3>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            // valid if validEmail
          />

          {/* <FormFeedback>
            <p className="message">{message}</p>
          </FormFeedback> */}

          <Label for="exampleEmail">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            // valid if validPassword
            // invalid
          />
          <Label for="examplePassword">Password</Label>
          <FormText>
            <List type="unstyled" id="passwordReq">
              <li>Password Requirements:</li>
              <li>At least 8 characters</li>
              <li>A mixture of both uppercase and lowercase letters.</li>
              <li> A mixture of letters and numbers.</li>
            </List>
          </FormText>
          <FormFeedback>
            {" "}
            {message !== "" ? <p className="message">{message}</p> : ""}
          </FormFeedback>
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button type="submit" disabled={!validEmail() || !validPassword()}>
          Sign Up
        </Button>
        <FormFeedback>
          {" "}
          {message !== "" ? <p className="message">{message}</p> : ""}
        </FormFeedback>
      </Form>
    </div>
  );
};

export default Signup;
