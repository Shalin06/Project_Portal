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

const Login1 = () => {
    function Navbar() {
        const navigate = useNavigate()
        return (
            <nav className="navbar">
                <Link to="/"><img src="images/logo323.png" className="logo2" /></Link>
                <div className="navbar__container">
                    <ul className="navbar__links">
                        <li>
                            <Link to="/faculty" style={{ textDecoration: 'none', color: 'black' }}>Faculty</Link>
                        </li>
                        <li>
                            <Link to="/research" style={{ textDecoration: 'none', color: 'black' }}>Research</Link>
                        </li>
                        <li>
                            <Link to="/login1" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
                        </li>
                        <li>
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
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
                <div className="container_001">
                    <Navbar />
                    <div className="login_navbar01">
                        <nav>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <div className="form-inline01">
                                    <label className="login_details">
                                        <p className="login_p">
                                            Login
                                        </p>
                                        <h className="login_h">
                                            Let's get some skills
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
                                        Login
                                    </Button>
                                    <div  style={{alignItems:"center"}}>
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
                <div style={{ width: "30%", marginLeft: '250px', marginTop: '-400px' }}>
          <Lottie loop={true} animationData={study} classname="animation2" />
        </div>
            </body>
        </>
    );
};

export default Login1;