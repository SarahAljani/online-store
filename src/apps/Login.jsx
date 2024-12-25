import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Login = () => {
  const handleSubmit = () => {
    localStorage.setItem("token", "Sarah");
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        className="container"
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#4800a7",
          }}
        >
          Login
        </p>
        <Form
          className="form"
          onSubmit={handleSubmit} // Attach the onSubmit handler here
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* -------- User Name --------- */}
          <Form.Group className="mb-3 group">
            <Form.Label className="label">User Name : </Form.Label>
            <Form.Control
              type="text"
              className="control"
              placeholder="Enter User Name"
              name="userName"
            />
          </Form.Group>
          {/* -------- Password --------- */}
          <Form.Group className="mb-3 group">
            <Form.Label className="label">Password : </Form.Label>
            <Form.Control
              type="text"
              className="control"
              placeholder="Enter Password"
              name="password"
            />
          </Form.Group>
          <Button type="submit" style={{ backgroundColor: "blue" }}>
            login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
