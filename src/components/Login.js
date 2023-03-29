import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import { auth } from "../firebase";
import study from './study.json';
import Lottie from "lottie-react"
import { hover } from "@testing-library/user-event/dist/hover";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      const user = auth.currentUser;
      if (user) {
        const data_ref = ref(database, "users/" + user.uid);
        onValue(data_ref, (snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.val().Profession === "Student") {
              navigate("/studenthome");
            }
            else if (snapshot.val().Profession === "Professor") {
              navigate("/profhome")
            }
            else {
              navigate("/details");
            }
          }
          else {
            navigate("/details");
          }
        });
      } else {
        // handle case where user is null or undefined
        console.log("User is null or undefined");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      const user = auth.currentUser;
      if (user) {
        const data_ref = ref(database, "users/" + user.uid);
        onValue(data_ref, (snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.val().Profession === "Student") {
              navigate("/studenthome");
            }
            else {
              navigate("/profhome")
            }
          } else {
            navigate("/details");
          }
        });
      } else {
        // handle case where user is null or undefined
        console.log("User is null or undefined");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    <>
      <body>
        <div className="container">
          <div className="login_navbar">
          <Link to = "/"><img src="images/logo323.png" className="logo" /></Link>
            <nav>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <div className="form-inline">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control className="login_input"
                      type="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control className="login_input"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <GoogleButton
                      className="g-btn"
                      type="light"
                      label="Login with Google"
                      onClick={handleGoogleSignIn}
                      />
                  <Button variant="primary" type="Submit" className="LoginButton">
                    Login
                  </Button>
                  
                </div>
              </Form>
            </nav>
          </div>
          <div className="row">
            <div className="col-1">
              <h2>Boost up your skills</h2>
              <h3>with new ways of</h3>
              <h4>learning</h4>
              <Link to="/signup" className="Signup_link"> <button type="button" className="btn1">Apply</button></Link>
            </div>
            <div  style={{width : "40%",marginLeft:'-50px',marginTop:'-50px'}}>
              <Lottie loop = {true} animationData = {study} classname = "animation1"/>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;