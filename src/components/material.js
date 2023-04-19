import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Material= () => {
  function Navbar() {
    return (
      <nav>
        <div className="navbar">
          <Link to="/"><img src = "images/logo323.png"className="logo22" /></Link>
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
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Suril Shah</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: surilshah@iitj.ac.in , head_me@iitj.ac.in, office_me@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1510</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Robotics, Multibody Dynamics and Control</p>
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
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ashok Joshi</p>
                <p className="profession_details">Visiting Professor</p>
                <p className="profession_details">eMail: ashokjoshi@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1526</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">Dynamics & Control of Flexible Vehicles; Navigation & Guidance; Space Mechanics; Unmanned Systems and Swarms</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Amrita Puri</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: amritapuri@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1518</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Active noise control; Active vibration control; Experimental modal analysis; Acoustics</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Anand Krishnan Plappally</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: anandk@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1507</p>
                <p className="profession_details">Ph.D.: The Ohio State University</p>
                <p className="profession_details">Water, Water Management and Characterization of Engineered Materials</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ankur Gupta</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: ankurgupta@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1517</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Microsystems Fabrication</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">

                <p className="faculty_name"> Arun Kumar R</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: arunkr@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1516</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Madras</p>
                <p className="profession_details">Experimental Aerodynamics - Confined Jets, Shock Wave Reflection and Transitions, Ejector Flows.</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ashish Pathak</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: apathak@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1525</p>
                <p className="profession_details">Ph. D.: University of Massachusetts Dartmouth</p>
                <p className="profession_details">Fluid-Structure Interaction; Ocean Energy; Phase-Change Problems; Multiphase flows; High Performance Computing</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Atul Kumar Sharma</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: atulksharma@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1522</p>
                <p className="profession_details">Ph. D.:  Indian Institute of Technology Roorkee</p>
                <p className="profession_details">Solid Mechanics; Continuum Mechanics; Computational Solid Mechanics; Mechanics of Soft Active Materials; Wave Propagation in Soft Active Composite Materials; Topology Optimization</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">B. Ravindra</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: ravib@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1503</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Design, Dynamics, Vibration and Control</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
              <p className="faculty_name">Barun Pratiher</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: barun@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1505</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Guwahati</p>
                <p className="profession_details">Dynamics of Machines and Structures, Flexible Robots, MEMS, Rotor Dynamics, Nonlinear Oscillations</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name"> C. Venkatesan</p>
                <p className="profession_details">Visiting Professor</p>
                <p className="profession_details">eMail: cven@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1513</p>
                <p className="profession_details">Ph.D.: Indian Institute of Science Bangalore</p>
                <p className="profession_details">Helicopter Dynamics and Aeroelasticity, Design of Autonomous Mini Helicopters, and Smart Structure Analysis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png"className="bio_img"></img>
              <div className="title_bio">

                <p className="faculty_name"> Chandan Pandey</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: jscpandey@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 244 1514</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Roorkee</p>
                <p className="profession_details">Welding, Heat treatment, Nuclear grade material, Mechanical behavior of materials, Material processing</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Gourhari Ghosh</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: gourharighosh@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1523</p>
                <p className="profession_details">Ph.D: Indian Institute of Technology Kharagpur</p>
                <p className="profession_details">Ultra-precision Finishing; Laser-based Additive Manufacturing; Thermal Spray Coating; Tribology</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Hardik Kothadia</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: hardikkothadia@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1512</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">Multiphase Flow, Boiling and Condensation, Heat Transfer, Fluid Mechanics, Gasification</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name"> Harshal Akolekar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: harshal.akolekar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1527</p>
                <p className="profession_details">Ph. D.: University of Melbourne, Australia</p>
                <p className="profession_details">Aerodynamics; Computational Fluid Dynamics; Machine Learning; Submarine Hydrodynamics; Turbomachinery</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Hirshikesh</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: hirshikesh@iitj.ac.in</p>
                <p className="profession_details">Phone: (91 291) 280</p>
                <p className="profession_details">Ph.D: Indian Institute of Technology Madras</p>
                <p className="profession_details">Computational Fracture Mechanics, Computational Solid Mechanics, Adaptive re-meshing strategy, Phase-field method</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Jayant Kumar Mohanta</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: jayant@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1524</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Indore</p>
                <p className="profession_details">Planar Parallel manipulators; Lower limb rehabilitation robots; Medical robotics; Robot manipulator kinematic and dynamic control, Mechanism design and Analysis
</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
         <p className="faculty_name">Kaushal A. Desai</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: kadesai@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1509</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">CAD/CAM, CNC Machine Tools, Smart Manufacturing, and Product Design and Development</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Nipun Arora</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: nipun@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1519</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Flapping wing aerodynamics; Fluid-structure interaction; CFD with Lattice Boltzmann method; Turbulence and moving boundary simulations; High performance computing; Electrorheological Fluids.
</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Prodyut Ranjan Chakraborty</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: pchakraborty@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1508</p>
                <p className="profession_details">Ph.D.: Indian Institute of Science Bangalore</p>
                <p className="profession_details">Heat and mass transfer, Latent heat based storage device for high temperature applications, Alloy solidification process, Active and passive solar cooling systems, Electronic cooling
</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                                <p className="faculty_name"> Rahul Chhibber</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: rahul_chhibber@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1506</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Roorkee</p>
                <p className="profession_details">Welding and joining, Manufacturing and materials processing, Mechanical behaviour of materials</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">

                <p className="faculty_name">Riby Abraham Boby</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: riby@iitj.ac.in</p>
                <p className="profession_details">Phone:  0291 280 1504</p>
                <p className="profession_details">Ph.D: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Robotics; Machine Vision; Robot calibration; Automated Visual Inspection; Industrial robots; Human-Machine Interface;</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Shobhana Singh</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: shobhana@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1520</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Thermal energy systems: Thermal energy storage, Solar dryers, Heat pumps, Heat exchangers; Heat and mass transfer analysis; Dynamic and multiphysics modeling; Computational fluid dynamic modeling; System and design optimization; Renewable energy integration; Electrochemical carbon capture.
</p>
              </div>
            </div>
          </div>
        </header> <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name"> Shrutidhara Sarma</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: shrutidhara@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 244 1515</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Guwahati</p>
                <p className="profession_details">Thin film nanocomposite temperature sensors, nanocomposite materials, flexible sensors</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Sudipto Mukhopadhyay</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: smukhopadhyay@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1511</p>
                <p className="profession_details">Ph.D.: Eindhoven University of Technology</p>
                <p className="profession_details">Energy Technology, Combustion Technology, Computational Fluid Dynamics, Turbulent flows, Sprays</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name"> Vignesh T.G.</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: vigneshtg@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1280</p>
                <p className="profession_details">Ph.D: Technical University of Darmstadt</p>
                <p className="profession_details">Multiphase flows; Microfluidics</p>
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
  export default Material;
