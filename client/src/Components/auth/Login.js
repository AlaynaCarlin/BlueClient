import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });

  };

  return (
    <div>
      <h1 className="title">Login</h1>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="exampleEmail"
            name="email"
            placeholder="Email"
            value={email}
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="examplePassword"
            name="password"
            placeholder="Password"
            value={password}
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button type="submit">Login</Button>
      </Form>
    </div>
    
  );
};

export default Login;
