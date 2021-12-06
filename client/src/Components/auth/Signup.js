import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
//   FormFeedback,
//   FormText
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
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};

export default Signup;
