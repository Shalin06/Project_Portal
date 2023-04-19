import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Event = () => {
    function Navbar() {
        return (
            <nav>
                <div className="navbar">
                    <Link to="/"><img src="images/logo323.png" className="logo22" /></Link>
                    <div className="navbar__container">
                        <ul className="navbar__links">
                            <li>
                                <Link to="/faculty" style={{ textDecoration: 'none'}}className="hover1">Faculty</Link>
                            </li>
                            <li>
                                <Link to="/research" style={{ textDecoration: 'none'}}className="hover1">Research</Link>
                            </li>
                            <li>
                                <Link to="/login1" style={{ textDecoration: 'none'}}className="hover1">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup" style={{ textDecoration: 'none'}}className="hover1">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faculty_members">
                <p className="text_font4">Latest @ IIT Jodhpur</p>
              </div>
              <div className="department_links">
                <u1 className = "dept_link">
                    <p className="text_font10">1. FMFP-2023 Conference: The 10th International and 50th (Golden Jubilee) National Conference on Fluid Mechanics and Fluid Power - 20-22 December 2023</p>
                    <p className="text_font5">20 December 2023</p>
                    <p className="text_font10">2. FMFP-2023 Workshop: 8th National Workshop on Research Methodologies in Fluid Mechanics - 12-15 July 2023</p>
                    <p className="text_font5">12 July 2023</p>
                    <p className="text_font10">3. "Workshop on Field Robotics" organized by IDRP RMS, IIT Jodhpur on 11th and 12th of March</p>
                    <p className="text_font5">11 March 2023</p>
                    <p className="text_font10">4. Indian Conference on MedTech Innovations: 24 - 26 February 26, 2023</p>
                    <p className="text_font5">24 February 2023</p>
                    <p className="text_font10">5. Conclave for Friends of IIT Jodhpur: 11-12 February 2023</p>
                    <p className="text_font5">11 February 2023</p>
                </u1>
              </div>
            </nav>
        );
    }
    return (
        <Navbar />
    );
};
export default Event;