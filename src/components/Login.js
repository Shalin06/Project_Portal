import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref, onValue} from "firebase/database";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn} = useUserAuth();
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
            if(snapshot.val().Profession === "Student"){
              navigate("/studenthome");
            }
            else if(snapshot.val().Profession === "Professor"){
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
          if(snapshot.val().Profession === "Student"){
            navigate("/studenthome");
          }
          else{
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
    {/* <div>
      <img src="Images\WhatsApp Image 2023-03-09 at 18.15.05.jpg"></img>
    </div> */}
      <div>
        <p className="Title">INDIAN INSTITUTE OF TECHNOLOGY JODHPUR</p>
      </div>
      <div className="container">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="LoginButton">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      <div className="SignUp_text">
        Don't have an account? &nbsp; <Link to="/signup" className="Signup_link"> Sign up</Link>
      </div>
      </div>
    </>
  );
};

export default Login;