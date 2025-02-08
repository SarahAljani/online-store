import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../assests/login.css";
import black1 from "../assests/black11.png";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import black2 from "../assests/black2.png";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";
const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    
  };
  return (
    <div className="par" style={{ width: "100%" }}>
      <div
        className="form-side"
        style={{ width: "100%", position: "relative", padding: "10px 30px" }}
      >
        <div
          className="form-container"
          style={{
            display: "flex",
            width: "60%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              fontWeight: "400",
              color: "#000000",
              letterSpacing: "6px",
              lineHeight: "10px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            LOGIN
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
            <InputGroup className="mb-3 group">
              {/* <Form.Label className="label">User Name : </Form.Label> */}
              <InputGroup.Text
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#b6b7b8",
                  color: "#b6b7b8",
                  borderRadius: "10px 0 0 10px",
                }}
              >
                <div style={{ cursor: "default" }}>@</div>
              </InputGroup.Text>
              <Form.Control
                type="text"
                className="controll"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            {/* -------- Password --------- */}
            <InputGroup className="mb-3 group">
              {/* <Form.Label className="label">Password : </Form.Label> */}
              <InputGroup.Text
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#b6b7b8",
                  color: "#b6b7b8",
                  borderRadius: "10px 0 0 10px",
                }}
              >
                {show ? (
                  <GoEyeClosed
                    onClick={() => setShow(false)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <GoEye
                    onClick={() => setShow(true)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </InputGroup.Text>
              <Form.Control
                type={show ? "text" : "password"}
                className="controll"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Button
              type="submit"
              style={{
                backgroundColor: "#1f1f1f",
                alignSelf: "center",
                border: "none",
                borderRadius: "15px",
                padding: "7px 30px",
              }}
            >
              login
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: "#ffff",
                alignSelf: "center",
                border: "none",
                borderRadius: "15px",
                fontWeight: "500",
                color: "#1f1f1f",
                marginTop: "-15px",
                padding: "0px",
              }}
            >
              Sign Up
            </Button>
            <a
              href="#e"
              style={{
                backgroundColor: "#ffff",
                alignSelf: "center",
                border: "none",
                borderRadius: "15px",
                fontWeight: "500",
                fontSize: "12px",
                color: "#949494",
                marginTop: "-10px",
                textDecoration: "none",
              }}
            >
              Forgot Your Password?
            </a>
          </Form>
        </div>
      </div>

      <div className="image-section">
        <img className="b-g" src={black1} alt="blackgirl1" />
      </div>
    </div>
  );
};

export default Login;
