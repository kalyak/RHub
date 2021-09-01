import React, { useRef, useState } from "react";
import { Button, ButtonGroup, Container, Form } from "react-bootstrap";

const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    username: null,
    email: null,
    password: null,
  });

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const switchModeHandler = () => {
    setIsLoginMode((oldMode) => !oldMode);
  };

  const formSubmitHandler =(event) => {
    event.preventDefault();
    if (isLoginMode) {
      setFormData({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      setFormData({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
    console.log(formData);
  };

  return (
    <Container className="border">
      <ButtonGroup className="d-flex mb-2 justify-content-center">
        <Button
          onClick={switchModeHandler}
          variant={isLoginMode ? "secondary" : "outline-secondary"}
          disabled={isLoginMode ? true : false}
        >
          Log In
        </Button>
        <Button
          onClick={switchModeHandler}
          variant={isLoginMode ? "outline-secondary" : "secondary"}
          disabled={isLoginMode ? false : true}
        >
          Sign Up
        </Button>
      </ButtonGroup>
      <Form onSubmit={formSubmitHandler}>
        {!isLoginMode && (
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              ref={usernameRef}
              type="username"
              placeholder="Enter username"
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          {!isLoginMode && (
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isLoginMode ? "Log In" : "Submit"}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
