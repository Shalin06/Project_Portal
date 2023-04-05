import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Chemical = () => {
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
                <p className="text_font6">Faculty Members</p>
                <h className = "text_font7">Head</h>
              </div>
      </nav>
    );
  }
  return (
    <body>
      <div className="bio_dept_img">
        <Navbar />
        <div className="bio_dept_img1">
          <div className="bio_dept">
            <img src="images/chem_1.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Pradip K Tewari</p>
              <p className="profession_details">Jal Jeevan Mission Professor Chair and Head, Department of Chemical Engineering</p>
              <p className="profession_details">eMail: pradiptewari@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1703</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Bombay</p>
              <p className="profession_details">Water Technologies; Membrane Technology; Desalination; Nanocomposite Membrane Technology; Heat Transfer and Two Phase Flow.</p>
            </div>
          </div>
        </div>
        <div className="faculty_members">
                <h className = "text_font7">Faculty Members</h>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_2.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Abhilasha Maheshwari</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: abhilasham@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1713</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay & Washington University</p>
              <p className="profession_details">Process Systems Engineering; Water Distribution Networks; Modelling; Optimization; Sustainability; Environmental Chemistry</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_3.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Angan Sengupta</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: angan@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1706</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
              <p className="profession_details">Molecular Modelling & Simulation; Theoretical Material Design; Carbon dioxide Capture; Hydrogen Storage; Water Treatment; Fuel Cell; Thermodynamic Studies; Continuum Modelling & Simulation; Fire and Explosion Modelling; Steady and Transient State Modelling; Safety Modelling; Process Modelling; Transport Processes</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_4.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Deepak Arora</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: deepakarora@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1705</p>
              <p className="profession_details">Ph. D.: University of Massachusetts Amherst</p>
              <p className="profession_details">Adhesion in electronic packaging and manufacture of high density interconnects; Polymer rheology; Polymer crystallization; Dielectrics for electronic packaging; Structure-process-property relationships for polymers and their composites</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_5.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Krunal Gangawane</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: krunalg@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1347</p>
              <p className="profession_details">Ph.D: Indian Institute of Technology Roorkee</p>
              <p className="profession_details">CFD; Lattice Boltzmann method; Aerogels; Nanoparticles-based phase change materialc</p>
            </div>
          </div>
        </div>
            <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_6.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Nirmalya Bachhar</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: nirmalya@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1711</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
              <p className="profession_details">Nanomaterials; polymer nanocomposite; self-assembly</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_7.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Prasenjit Sarkar</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: psarkar@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1707</p>
              <p className="profession_details">Ph. D.: North Carolina State University</p>
              <p className="profession_details">Biomolecular Engineering; Biochemical Engineering</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_8.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Prashant Kumar Gupta</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: guptapk@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1709</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Kanpur</p>
              <p className="profession_details">Electrochemical Energy Storage Devices (Lithium, Sodium and Zinc Ion Battery), Electrocatalysis (HER, OER, CER, and Electrochemical CO2 Reduction), Electrochemical Biosensors</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_9.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Praveen Kumar Sappidi</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: praveenks@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1712</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Madras</p>
              <p className="profession_details">Multiscale modeling, Molecular simulation, Free energy simulations, Contaminant separation materials, Ionic liquid based solvents, Polymeric materials</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_10.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Ramesh Asapu</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: rasapu@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1708</p>
              <p className="profession_details">Ph. D.: University of Antwerp, Belgium</p>
              <p className="profession_details">Photocatalysis; Environmental remediation; Modeling & Simulation; Plasmonic nanomaterials; Perovskites</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_11.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Sumit Kamal</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: sumitkamal@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1715</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
              <p className="profession_details">Fine Chemicals; Catalysis and Reaction Engineering, Process Development; Green Technology; Chemical Reaction Kinetics</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_12.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Tara Chand Kumawat</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: tckumawat@iitj.ac.in</p>
              <p className="profession_details">Phone: </p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Kanpur</p>
              <p className="profession_details">Hydrodynamic stability; flow through porous media; Computational Fluid Dynamics; Antibubbles</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/chem_13.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Vikky Anand</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: vikky@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1710</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
              <p className="profession_details">Electrohydrodynamics; Multiphase flow; Electro-desalting; Soft matter; Rheology</p>
            </div>
          </div>
        </div>
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
export default Chemical;
