import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Bio = () => {
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
            <img src="images/bio_1.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Mitali Mukerji</p>
              <p className="profession_details">Head,Professor</p>
              <p className="profession_details">eMail: mitali@iitj.ac.in , head_bb@iitj.ac.in, office_bb@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1217</p>
              <p className="profession_details">Ph. D.: Indian Institute of Science, Bangalore</p>
              <p className="profession_details">Genomics, Human molecular genetics, functional genomics of Alu repeats, Ayurgenomics, genetics of rare diseases</p>
            </div>
          </div>
        </div>
        <div className="faculty_members">
                <h className = "text_font7">Faculty Members</h>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_2.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Amit Kumar Mishra</p>
              <p className="profession_details">Associate Professor</p>
              <p className="profession_details">eMail: amit@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1206</p>
              <p className="profession_details">Ph.D.: National Brain Research Centre</p>
              <p className="profession_details">Cellular and Molecular Neuroscience, Cell Cycle Regulation and Cancer</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_3.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Ayan Sadhukhan</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: ayansadhukhan@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1221</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Guwahati</p>
              <p className="profession_details">Plant Functional Genomics, Biotechnology, Population Genetics, Abiotic Stress Tolerance</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bin_4.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Dinesh Ahirwar</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: dineshahirwar@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1222</p>
              <p className="profession_details">Ph. D.: Sanjay Gandhi Postgraduate Institute of Medical Sciences</p>
              <p className="profession_details">Host-tumor interaction, Drug resistance, Immunotherapy</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_5.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Indranil Banerjee</p>
              <p className="profession_details">Associate Professor</p>
              <p className="profession_details">eMail: indranil@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1214</p>
              <p className="profession_details">Ph. D.: Indian Institute of Technology Kharagpur</p>
              <p className="profession_details">Tissue engineering; Regenerative medicine; Biomaterials; Theranostic systems; Biomicrofluidic</p>
            </div>
          </div>
        </div>
            <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_6.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Meenu Chhabra</p>
              <p className="profession_details">Associate Professor</p>
              <p className="profession_details">eMail: meenuchhabra@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1205</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
              <p className="profession_details">Biological Science & Bio-Engineering: Renewable Bioenergy Bioremediation</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_7.png" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Neeraj Jain</p>
              <p className="profession_details">Professor</p>
              <p className="profession_details">eMail: neeraj.jain@iitj.ac.in</p>
              <p className="profession_details">Phone: </p>
              <p className="profession_details">Ph. D.: Indian Agricultural Research Institute</p>
              <p className="profession_details">Neuroscience/Mammalian Sensory and Motor Systems; Tactile Information Processing; Brain Plasticity; Spinal Cord Injuries; Brain-Computer Interface; Brain Networks</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_8.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Neha Jain</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: njain@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1210</p>
              <p className="profession_details">Ph.D.: Indian Institute of Science Education and Research Mohali</p>
              <p className="profession_details">Amyloids, Biofilms, Neurodegeneration, Molecular Biophysics, Microbiology</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_9.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Pankaj Yadav</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: pyadav@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1211</p>
              <p className="profession_details">Ph.D.: Christian-Albrechts-Universität zu Kiel Germany</p>
              <p className="profession_details">Statistical Genetics, Deep Learning, Big Data Analytics</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_10.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Priyanka Singh</p>
              <p className="profession_details">Associate Professor</p>
              <p className="profession_details">eMail: priyankasingh@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1208</p>
              <p className="profession_details">Ph.D.: University of Muenster</p>
              <p className="profession_details">Cellular & Molecular Biology</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_11.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Raviraj Vankayala</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: rvankayala@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1215</p>
              <p className="profession_details">Ph. D.: National Tsing Hua University</p>
              <p className="profession_details">Nanobiotechnology; Biomaterials; Drug Delivery; Theranostics; Photomedicine</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_12.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Shankar Manoharan</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: shankarmanoharan@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1209</p>
              <p className="profession_details">Ph.D.: Madurai Kamaraj University</p>
              <p className="profession_details">Molecular Microbiology, Host-Microbe Interaction, Genomics and Metagenomics</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_13.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Sucharita Dey</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: sdey@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1218</p>
              <p className="profession_details">Ph. D.: Bose Institute Kolkata</p>
              <p className="profession_details">Principles of protein robustness to mutation, Functional role of protein quaternary structure in mutation and disease, Prediction of disease mutations, Identifying structural determinants of inter-subunit communication -- Allostery</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_14.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Sudipta Bhattacharyya</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: sudipta@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1213</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Kharagpur</p>
              <p className="profession_details">Structural Biology, Enzyme Chemistry, Protein Engineering</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_15.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Surajit Ghosh</p>
              <p className="profession_details">Professor</p>
              <p className="profession_details">eMail: sghosh@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1212</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
              <p className="profession_details">Chemical Neurobiology, Chemical Biology and Cancer Biology</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_16.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Sushmita Jha</p>
              <p className="profession_details">Associate Professor</p>
              <p className="profession_details">eMail: sushmitajha@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1204</p>
              <p className="profession_details">Ph.D.: University of North Carolina</p>
              <p className="profession_details">Cellular and Molecular Neuroscience, Cell and Molecular Physiology</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/bio_17.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Sushmita Paul</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: sushmitapaul@iitj.ac.in</p>
              <p className="profession_details">Phone: 0291 280 1207</p>
              <p className="profession_details">Ph.D.: University of Calcutta, Work carried out at Indian Statistical Institute</p>
              <p className="profession_details">Computational Biology and Bioinformatics</p>
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
export default Bio;
