import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { ref, set } from "firebase/database";
import { database } from "../firebase";
import { auth } from "../firebase";
import signup from './signup.json';
import Lottie from "lottie-react"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      const user = auth.currentUser;
      set(ref(database, "users/" + user.uid), {
        email: email
      })
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <body className="signup_box">
        <div className="container1">
        <Link to = "/"><img src="images/logo323.png" className="logo" /></Link>
          <div className="cont1">
            <div className="row1">
              <div className="col-3">
                <h2>Registeration</h2>
                <h3>Improve your skill</h3>
              </div>
            </div>
            <div className="Signup_navbar">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <div className="signup_incline">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control className="signup_input"
                      type="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control className="signup_input"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="signup_button1">
                    <Button variant="primary" type="Submit" className="signup_button">
                      Register
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="login_link">
              Already have an account? <Link to="/">Log In</Link>
            </div>
          </div>
        </div>
        <div style={{ width: "40%", marginLeft: '150px', marginTop: '-750px' }}>
          <Lottie loop={true} animationData={signup} classname="animation2" />
        </div>
      </body>
    </>
  );
};

export default Signup;