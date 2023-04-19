import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Chemistry = () => {
  function Navbar() {
    return (
      <nav>
        <div className="navbar">
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
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ramesh K. Metre</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: rkmetre@iitj.ac.in , head_chemistry@iitj.ac.in, office_chemistry@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1309</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Main-group organometallic chemistry,Coordination polymers,Inorganic-organic hybrid materials and Metal phosphonate and phosphate chemistry</p>
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
              <img src="images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ananya Debnath</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: ananya@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1307</p>
                <p className="profession_details">Ph.D.: Indian Institute of Science Bangalore</p>
                <p className="profession_details">Theoretical and Computational Chemistry</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Atul Kumar</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: atulk@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1304</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Madras</p>
                <p className="profession_details">Quantum Information Processing</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Dibyendu Kumar Sasmal</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: sasmal@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1314</p>
                <p className="profession_details">Ph.D.: Indian Association for the Cultivation of Science</p>
                <p className="profession_details">Biophysical chemistry; Single molecule fluorescence imaging; T cell immunology; Ion channel and neurotransmitter; Femtosecond ultrafast fluorescence spectroscopy; Fluorescence correlation spectroscopy; Electrophysiology: Single channel patch-clamp</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Manikandan Paranjothy</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: pmanikandan@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1306</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Theoretical and Computational Chemistry, Chemical Reaction Dynamics</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Nirmal Kumar Rana</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: nirmalrana@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1311</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Asymmetric Catalysis and Natural Product Synthesis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Rakesh Kumar Sharma</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: rks@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1303</p>
                <p className="profession_details">Ph.D.: Indian Institute of Science Bangalore</p>
                <p className="profession_details">Catalysis for Energy and Stereocontrol, Feedstock Chemistry, Fuel and Lubricants, Energy Storage and Water Treament Technology</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ritu Gupta</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: ritu@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1308</p>
                <p className="profession_details">Ph.D.: Jawaharlal Nehru Centre for Advanced Scientific Research</p>
                <p className="profession_details">Nanomaterials & Nanodevices for Water, Energy and Healthcare</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png"className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Rohan D. Erande</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: rd.erande@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1312</p>
                <p className="profession_details">Ph.D. : Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Synthesis of Natural Products & Medicinally Active Compounds, Method Development - Lewis Acid Catalysis, Organocatalysis, Organometallic Catalysis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Samanwita Pal</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: samanwita@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1305</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Madras</p>
                <p className="profession_details">Solution and solid state NMR and NQR spectroscopy</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Sandip Murarka</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: sandipmurarka@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1310</p>
                <p className="profession_details">Ph.D.: University of Muenster, Germany</p>
                <p className="profession_details">Organic Synthesis, Development of Novel Synthetic Methods, Transition Metal Catalyzed Synthetic Transformations, C-H Functionalization Reactions, Asymmetric Catalysis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Subrata Chakraborty</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: subrata@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1313 </p>
                <p className="profession_details">Ph.D.: University of Zurich, Switzerland</p>
                <p className="profession_details">Organometallics, Homogeneous Catalysis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Suresh Sarkar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: sarkar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1346</p>
                <p className="profession_details">Ph.D.: Indian association for the cultivation of Science</p>
                <p className="profession_details">Nanomaterials; NIR-Quantum dots; Spectroscopy; Surface Chemistry; Shape control; Photo-catalysis; photo-voltaics; cell-imaging</p>
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
export default Chemistry;
