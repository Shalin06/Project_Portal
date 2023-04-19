import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { ref, set, onValue } from "firebase/database";
import { database } from "../firebase";
import { auth } from "../firebase";
import signup from './signup.json';
import Lottie from "lottie-react"
import GoogleButton from "react-google-button";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      const user = auth.currentUser;
      set(ref(database, "users/" + user.uid), {
        email: email
      })
      navigate("/login1");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      const user = auth.currentUser;
      if (user) {

        const data_ref = ref(database, "users/" + user.uid);
        onValue(data_ref, async (snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.val().Profession === "Student") {
              navigate("/studenthome");
            }
            else {
              navigate("/profhome")
            }
          } else {
            await set(ref(database, "users/" + user.uid), {
              email: email
            })
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
  function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/"><img src="images/logo323.png" className="logo22" /></Link>
        <div className="navbar__container">

          <ul className="navbar__links">
            <li>
              <Link to="/faculty" style={{ textDecoration: 'none' }} className="hover1">Faculty</Link>
            </li>
            <li>
              <Link to="/research" style={{ textDecoration: 'none' }} className="hover1">Research</Link>
            </li>
            <li>
              <Link to="/Login1" style={{ textDecoration: 'none' }} className="hover1">Login</Link>
            </li>
            <li>
              <Link to="/signup" style={{ textDecoration: 'none' }} className="hover1">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <>
      <body>
        <div className="container_001">
          <Navbar />
          <div className="login_navbar01">
            <nav>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <div className="form-inline01">
                  <label className="login_details">
                    <p className="login_p">
                    Registration
                    </p>
                    <h className="login_h">
                      Improve your skill
                    </h>
                  </label>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control className="login_input01"
                      type="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control className="login_input01"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="Submit" className="LoginButton">
                    Submit
                  </Button>
                  <div className="google_btn">
                    <GoogleButton
                      type="dark"
                      label="Sign in with Google"
                      onClick={handleGoogleSignIn}
                    />
                  </div>
                </div>
              </Form>
            </nav>
          </div>
        </div>
        <div className="animation_0">
          <Lottie loop={true} animationData={signup} />
        </div>
      </body>
    </>
  );
};

export default Signup;