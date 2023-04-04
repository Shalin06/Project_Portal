import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Faculty = () => {
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
              <div className="faculty_members">
                <p className="text_font4">Faculty Members</p>
                <h className = "text_font5">The Institute has appointed Faculty Members with background in different disciplines. They are organised through the following eleven academic Departments and Schools:</h>
              </div>
              <div className="department_links">
                <u1 className = "dept_link">
                  <l1>
                  <Link to="/bio"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">1.	Bioscience and Bioengineering</Link>
                  </l1>
                  <l1>
                  <Link to="/chemical"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">2.	Chemical Engineering</Link>
                  </l1>
                  <l1>
                  <Link to="/chemistry"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">3.	Chemistry</Link>
                  </l1>
                  <l1>
                  <Link to="/civil"style={{ textDecoration: 'none', color: 'black' }} className="text_font3">4.	Civil and Infrastructure Engineering</Link>
                  </l1>
                  <l1>
                  <Link to="/computer"style={{ textDecoration: 'none', color: 'black' }}className="text_font3">5. 	Computer Science & Engineering</Link>
                  </l1>
                  <l1>
                  <Link to="/electrical"style={{ textDecoration: 'none', color: 'black' }}className="text_font3">6.	Electrical Engineering</Link>
                  </l1>
                  <l1>
                  <Link to="/libral_arts"style={{ textDecoration: 'none', color: 'black' }}className="text_font3">7.	School of Liberal Arts,</Link>
                  </l1>
                  <l1>
                  <Link to="/math"style={{ textDecoration: 'none', color: 'black' }}className="text_font3">8.	Mathematics</Link>
                  </l1>
                  <l1>
                  <Link to="/metelorgy"style={{ textDecoration: 'none', color: 'black' }}className="text_font3">9.	Mechanical Engineering</Link>
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
export default Faculty;