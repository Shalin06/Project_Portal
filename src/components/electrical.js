import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Electrical = () => {
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
                <p className="faculty_name">Ajay Agarwal</p>
                <p className="profession_details">Professor</p>
                <p className="profession_details">eMail: ajayagarwal@iitj.ac.in , head_ee@iitj.ac.in, office_ee@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1351</p>
                <p className="profession_details">Ph. D.: Birla Institute of Technology and Science Pilani</p>
                <p className="profession_details">Microelectronics; Micro- Nano-technologies; Sensors; Micro-fluidics, Point-of-Care devices and Early diagnostics</p>
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
                <p className="faculty_name">Aashish Mathur</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: aashishmathur@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1362</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Power Line Communications, Free Space Optical Communications, Visible Light Communications</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Abdul Gafoor Shaik</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: saadgafoor@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1359</p>
                <p className="profession_details">Ph.D.: National Institute of Technology Warangal</p>
                <p className="profession_details">Protection of various components of Power System, Protection of Distribution Network with DG penetration, Power Quality assessment and mitigation in Distribution Networks with Renewable Energy Source penetration</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Amandeep Kaur</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: amandeepkaur@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1368</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Adhesion in electronic packaging and manufacture of high density interconnects; Polymer rheology; Polymer crystallization; Dielectrics for electronic packaging; Structure-process-property relationships for polymers and their compositesAnalog and Mixed-Signal Circuit Design, Data Converters (ADC, DAC), High-speed circuits, CMOS image sensors</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Amit Bhardwaj</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: amitb@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1372</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">Human Haptics, Computer Haptics, Haptics for Teleoperation and Applications of Machine Learning</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Anil Kumar Tiwari</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: akt@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1353</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kharagpur</p>
                <p className="profession_details">Electrical Engineering: Image Processing, Video Processing, and Signal Processing application in Bio-Medical</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Anoop Jain</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: anoopj@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1371</p>
                <p className="profession_details">Ph.D.: Indian Institute of Science, Bangalore</p>
                <p className="profession_details">Cooperative Control; Multi-Agent Systems; Formation Control; Nonlinear Control; Event-Triggered Control, Cyber-Physical Systems</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Arani Ali Khan</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: aakhan@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1364</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kharagpur</p>
                <p className="profession_details">RF and Microwave Engineering.</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Arpit Arvind Khandelwal</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: arpitkhandelwal@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1363</p>
                <p className="profession_details">Ph.D.: International Institute of Information Technology Hyderabad</p>
                <p className="profession_details">Group III-V Optoelectronic Devices, Fiber Optics and Integrated Optics Sensors, Non-Linear Photonics, Silicon Photonics and Optical Communication</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Arun Kumar Singh</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: singhak@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1358</p>
                <p className="profession_details">Ph.D.: Telecom ParisTech</p>
                <p className="profession_details">Communication Theory, Wireless and Mobile Communications, Satellite based Navigation Systems, Spread Spectrum Systems</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Bhupendra Singh Reniwal</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: bhupendrar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1396</p>
                <p className="profession_details">Ph.D: Indian Institute of Technology Indore</p>
                <p className="profession_details">AI, Hardware Accelerators and IMC Circuits & Architectures Design: Variation/Radiation Aware Preferential Design of Embedded Memory for Energy Efficient and Robust Space Applications</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png" className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Bijnan Bandyopadhyay</p>
                <p className="profession_details">Visiting Professor, FNAE, FNASc,FASc, IEEE Fellow, Fellow AAIA</p>
                <p className="profession_details">eMail: bijnan@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1385 </p>
                <p className="profession_details">Ph.D: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Variable structure systems, Discrete-time sliding mode control, Event triggered sliding mode control, Modeling and control of large size nuclear reactor.</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Binod Kumar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: binod@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1381</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">SoC Design Verification & Testing, Hardware Security & Trust, Hardware Design for AI, VLSI CAD, Computer Architecture</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Deepakkumar M. Fulwani</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: df@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1710</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">Embedded Control, Control of Micro-Grids and Control of Uncertain System</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Harshit Agarwal</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: agarwalh@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1376</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Industry standard compact modeling; Analog and RF modeling, Energy efficient next generation transistors, emerging memories</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Himanshu Kumar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: hkumar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1370</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Image and Video Processing, Computer Vision, Computational Imaging, Deep Learning</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Jai Narayan Tripathi</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: jai@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1374</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">VLSI Circuits and Systems, Signal Integrity, Power Integrity, Design of Experiments, Metaheuristic Optimization Techniques</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name"> Kamaljit Rangra</p>
                <p className="profession_details">Visiting Professor</p>
                <p className="profession_details">eMail: kjrangra@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1365</p>
                <p className="profession_details">Ph.D. : University of Trento, Italy</p>
                <p className="profession_details">MEMS, Transducers and Actuators</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Kunwar Aditya</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: kunwar.aditya@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1384</p>
                <p className="profession_details">Ph. D.: Ontario Tech University, Oshawa, Canada</p>
                <p className="profession_details">Power Electronics; Wireless Power Transfer; Transportation Electrification; Electrical Energy Storage Systems; Automotive Electronics</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                                <p className="faculty_name">Mahesh Kumar</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: mkumar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1357</p>
                <p className="profession_details">Ph.D.: Indian Institute of Science Bangalore</p>
                <p className="profession_details">Group III-V quantum structures by MBE, Growth of thin films and nanostructures, Group III-nitride alloys for LEDs, HEMTs and photovoltaic applications, Inorganic-Inorganic hybrid structures with special attention to band gap engineering, Si and wide band gap semiconductors for MEMS, Micro and Nano device fabrications</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Manish Narwaria</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: narwaria@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1367</p>
                <p className="profession_details">Ph.D.: Nanyang Technological University</p>
                <p className="profession_details">Multimedia signal processing</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Manoj Choudhary</p>
                <p className="profession_details">Professor</p>
                <p className="profession_details">eMail: manoj@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1383</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Communication Systems (Wireless - 4G/5G/6G, Modem/WLAN/WPAN/UWB) and networks; System on Chip; Embedded Systems & Software; Image Sensors and signal processing; Internet of Things and smart homes; AI, ML and computer vision</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Niladri Sekhar Tripathy</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: niladri@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1375</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Dynamics and Control, Mechatronics and Cyber Physical Systems</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Nishant Kumar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: nishantkumar@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1382</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Delhi</p>
                <p className="profession_details">Power System Optimization and Control; Renewable Energy Generation; Control of Microgrid & Smart Grid; Electric Vehicle; Cybersecurity for Electric Power Infrastructure</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Nitin Bhatia</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: nitin@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1366</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">Fiber Optics and Photonics</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Rajendra Nagar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: rn@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1369</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Gandhinagar</p>
                <p className="profession_details">Computer Vision; Image Processing; Computer Graphics; 3D Shape Analysis; Geometry Processing</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Rajlaxmi Chouhan</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: rajlaxmichouhan@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1360</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kharagpur</p>
                <p className="profession_details">Image processing, image quality assessment, noise-aided image enhancement, e-learning tools and techniques</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Ravi Yadav</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: raviyee@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1380</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Kharagpur</p>
                <p className="profession_details">Power system dynamics, Wide area monitoring systems, anomaly detection and characterization, AI/ML applications to power systems, and cyber-attack modelling and diagnosis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Saakshi Dhanekar</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: saakshi@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1373</p>
                <p className="profession_details">Ph.D.: Jamia Millia Islamia, Central University</p>
                <p className="profession_details">Nano-sensors for societal applications, device development, gas- and bio-sensors, MEMS, silicon based devices</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Sai Kiran M. P. R.</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: saikiran@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1377</p>
                <p className="profession_details">Ph. D.: Indian Institute of Technology Hyderabad</p>
                <p className="profession_details">Millimeter-wave Communications; Autonomous Vehicular Communications; Internet of Things; Cyber-Physical Systems; Wireless Network Modeling and Analysis</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Sandeep Kumar Yadav</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: sy@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1354</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Signal Processing, Condition Monitoring, Image Processing, Data Compression, Blind Source Separation, Artificial Neural Network</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Shree Prakash Tiwari</p>
                <p className="profession_details">Associate Professor</p>
                <p className="profession_details">eMail: sptiwari@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1356</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Bombay</p>
                <p className="profession_details">Microelectronics & VLSI Technology, Microfabrication, Organic Electronics, Device Physics and Characterization, New Device Structures</p>
              </div>
            </div>
          </div>
        </header>
        <header className="bio_Dept_faculty1">
          <div className="bio_dept_img2">
            <div className="bio_dept">
              <img  src = "images/avatar.png"  className="bio_img"></img>
              <div className="title_bio">
                <p className="faculty_name">Soumava Mukherjee</p>
                <p className="profession_details">Assistant Professor</p>
                <p className="profession_details">eMail: soumava@iitj.ac.in</p>
                <p className="profession_details">Phone: 0291 280 1361</p>
                <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
                <p className="profession_details">Microwave Communication</p>
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
  export default Electrical;
