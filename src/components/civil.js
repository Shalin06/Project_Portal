import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Civil = () => {
    function Navbar() {
          return (
            <nav>
              <div className="navbar">
               <Link to="/"><img src="images/logo323.png" className="logo2" /></Link>
              <div className="navbar__container">
                <ul className="navbar__links">
                  <li>
                    <Link to="/faculty"style={{ textDecoration: 'none', color: 'black' }}>Faculty</Link>
                  </li>
                  <li>
                    <Link to="/research"style={{ textDecoration: 'none', color: 'black' }}>Research</Link>
                  </li>
                  <li>
                    <Link to="/login1"style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
                  </li>
                  <li>
                    <Link to="/signup"style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
            );
        }
        return (
              <Navbar/>
        );
  };
  export default Civil;
