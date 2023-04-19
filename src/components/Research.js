import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Research = () => {
    function Navbar() {
          return (
            <nav className="navbar">
               <Link to="/"><img src="images/logo323.png" className="logo22" /></Link>
              <div className="navbar__container">
                <ul className="navbar__links">
                  <li>
                    <Link to="/faculty"style={{ textDecoration: 'none'}} className="hover1">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/research"style={{ textDecoration: 'none' }} className="hover1">Research</Link>
                  </li>
                  <li>
                    <Link to="/login1"style={{ textDecoration: 'none' }} className="hover1">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup"style={{ textDecoration: 'none' }} className="hover1">Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div className="faculty_members">
                <p className="text_font4">Research Highlights Archives</p>
              </div>
              <div className="department_links">
                <u1 className = "dept_link">
                  <l1>
                  <Link to="/reserch1"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">1.	Model development to predict shrinkage defects during solidification of pure metal</Link>
                  </l1>
                  <l1>
                  <Link to="/reserch2"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">2.	A Novel Multipath Mitigation Technique for GNSS Signals in Urban Scenarios</Link>
                  </l1>
                  <l1>
                  <Link to="/reserch3"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">3.	Optical Field Design for Solar Thermal Applications</Link>
                  </l1>
                  <l1>
                  <Link to="/reserch4"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">4.	Rajasthani Clay Catalytic Converters for Automobiles</Link>
                  </l1>
                  <l1>
                  <Link to="/reserch5"style={{ textDecoration: 'none', color: 'black' }}className="text_font3">5. 	Language Independent Speech Generation System</Link>
                  </l1>
                </u1>
              </div>
            </nav>
          );
      }
      return (
            <Navbar/>
      );
};
export default Research;