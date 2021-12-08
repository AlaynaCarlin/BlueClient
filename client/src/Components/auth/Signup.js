import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  FormText,
} from "reactstrap";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email, password)
    fetch("http://localhost:3000/user/register", {
      method: "POST",

      body: JSON.stringify({ user: { email: email, password: password } }),

      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
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
      <h1 className="title">Sign Up</h1>
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
          <FormFeedback></FormFeedback>

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
        </FormGroup>{" "}
        <Button type="submit" disabled={!validEmail() || !validPassword()}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
