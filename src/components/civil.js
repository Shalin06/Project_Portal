import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Civil = () => {
  function Navbar() {
    return (
      <nav>
        <div className="navbar">
          <Link to="/"><img  src = "images/logo323.png" className="logo22" /></Link>
          <div className="navbar__container">
            <ul className="navbar__links">
              <li>
                <Link to="/faculty" style={{ textDecoration: 'none' }} className="hover1">Faculty</Link>
              </li>
              <li>
                <Link to="/research" style={{ textDecoration: 'none' }} className="hover1">Research</Link>
              </li>
              <li>
                <Link to="/login1" style={{ textDecoration: 'none' }} className="hover1">Login</Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none' }} className="hover1">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="faculty_members">
          <p className="text_font6">Faculty Members</p>
          <h className="text_font7">Head</h>
        </div>
      </nav>
    );
  }
  return (
    <body>
      <div className="bio_dept_img">
        <Navbar />
        <header className="bio_Dept_faculty0">
          <div className="bio_dept_img1">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ranju Mohan</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail:  head_civil@iitj.ac.in, ranju@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1657</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Madras</p>
                <p className="profession_details">Traffic flow theory; Macroscopic and Microscopic modelling of traffic flow; Connected and autonomous vehicles; Dynamic Traffic Assignment</p>
              </div>
            </div>
          </div>
        </header>
        <div className="faculty_members">
          <h className="text_font7">Faculty Members</h>
        </div>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Aali Pant</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: aalipant@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1664</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Geoenvironmental Engineering; Reinforced Soil; Sustainable Geotechnics; Machine Learning</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Amit Kumar Rathi</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: akrathi@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1656</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Guwahati</p>
                <p className="profession_details">Structural Engineering; RCC Design; Steel Structures and Pre-Engineered Buildings; Reliability Analysis and Design; Uncertainty Quantification; Stochastic Modelling and Mechanics; Composite Materials; Vibration Control and Structural Health Monitoring</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Amit Sharma</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: amit.sharma@iitj.ac.in</p>
                <p className="profession_details">Phone: </p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Madras</p>
                <p className="profession_details">Atmospheric Chemistry; Air Pollution; Climate change; Impact on crops and human health</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Bhupendra Singh</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: bhupendra@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1659</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Roorkee</p>
                <p className="profession_details">Pavement Materials; Pavement Analysis; Pavement Design; Sustainable Pavement Materials</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Debanjan Guha Roy</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: dguharoy@iitj.ac.in</p>
                <p className="profession_details">Phone:  0291 280 1653</p>
                <p className="profession_details">Dual-badged Ph.D.:Indian Institute of Technology Bombay and Monash University</p>
                <p className="profession_details">Rock mechanics, reservoir geomechanics, engineering geology</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Deepika Bhattu</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: dbhattu@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1654</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Emission sources, characterization and secondary aerosol formation potential; Real-time aerosol measurements using mass spectrometery techniques; Source apportionment techniques; Physical, chemical and hygroscopic properties of atmospheric aerosols and cloud condensation nuclei (CCN) activity</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Mayank Suman</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: mayanksuman@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1665</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Kharagpur</p>
                <p className="profession_details">Effect of changing climate on hydrological extremes; Climate change mitigation strategies; Remote sensing application in hydrology</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">P. Ravi Prakash</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: rp@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1661</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Gandhinagar</p>
                <p className="profession_details">Computational Mechanics; Structural Fire Engineering; Application of AI in Structural Engineering, Building Information Modelling (BIM)</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
               <p className="faculty_name">Pradeep Kumar Dammala</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: pkdammala@iitj.ac.in</p>
                <p className="profession_details">Phone: </p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Guwahati</p>
                <p className="profession_details">Soil Dynamics; Experimental Geotechnics; Seismic Liquefaction; Seismic Ground Response Analysis; Soil Structure Interaction; Pile Foundations; Seismic Requalification studies; Sustainable Geotechnics; Stability Analysis of Earth Retaining Structures</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Saran Aadhar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: saran.aadhar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1662</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Gandhinagar</p>
                <p className="profession_details">Surface Hydrology; Hydroclimatic extremes; Hydrologic modeling in natural and anthropogenic climate; Impact of climate variability and climate change on water resources</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Tekcham Gishan Singh</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: tekcham@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1660 </p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Guwahati</p>
                <p className="profession_details">Civil Engineering, Structural Engineering, Steel Structures.</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Trishikhi Raychoudhury</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: trishikhi@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1663</p>
                <p className="profession_details">Ph. D.: McGill University, Canada</p>
                <p className="profession_details">Environmental Engineering: colloid filtration; contaminant fate and transport; water treatment; applications and implications of nanotechnology</p>
              </div>
            </div>
          </div>
        </header>
        <div className="bio_container">
          <div className="bio_reserch">
            <h11 className="bio_h11">
              Indian Institute Of Technology Jodhpur
            </h11>
          </div>
        </div>
      </div>
    </body>
  );
};
  export default Civil;
