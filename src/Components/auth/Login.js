import React, { useState } from "react";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../../helpers/environment";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        props.toggle();
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="exampleEmail"
            name="email"
            placeholder="Email"
            value={email}
            className="form-control"
          />
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
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
