import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Announcment = () => {
    function Navbar() {
        return (
            <nav>
                <div className="navbar">
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
                </div>
                <div className="faculty_members">
                <p className="text_font6">Latest @ IIT Jodhpur</p>
              </div>
              <div className="department_links">
                <u1 className = "dept_link">
                    <p className="text_font10">1. Request for Proposal for Design, Development and Maintenance of E-Commerce Platform for Jodhpur Craft Clusters.</p>
                    <p className="text_font5">24 March 2023</p>
                    <p className="text_font10">2. Rolling Advertisement (IITJ/2023/Faculty Position/39; dated 1 March 2023)</p>
                    <p className="text_font5">01 March 2023</p>
                </u1>
              </div>
            </nav>
        );
    }
    return (
        <Navbar />
    );
};
export default Announcment;