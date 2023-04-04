import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CS = () => {
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
            <img src="images/cs_1.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Richa Singh</p>
              <p className="profession_details">Professor and Head</p>
              <p className="profession_details">eMail: richa@iitj.ac.in , head_cse@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1267</p>
              <p className="profession_details">Ph.D.: West Virginia University</p>
              <p className="profession_details">Machine Learning; Pattern Recognition; Biometrics; Forensics; Trusted AI</p>
            </div>
          </div>
        </div>
        <div className="faculty_members">
                <h className = "text_font7">Faculty Members</h>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_2.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Anand Mishra</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: mishra@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1264</p>
              <p className="profession_details">Ph.D.: International Institute of Information Technology Hyderabad</p>
              <p className="profession_details">Computer Vision; Deep Learning; Knowledge Graph; Multimodal Machine Learning</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_3.png" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Angshuman Paul</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: apaul@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1274</p>
              <p className="profession_details">Ph.D.: Indian Statistical Institute Kolkata</p>
              <p className="profession_details">Medical Image Analysis; Machine Learning; Computer Vision</p>
            </div>
          </div>
        </div>

        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_4.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Debasis Das</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: deepakarora@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1261</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Patna</p>
              <p className="profession_details">Vehicular Ad-Hoc Networks(VANETs); Internet of Vehicles(IoV); Vehicular Cloud Computing(VCC); Network Security; Machine Learning; Blockchain; Social Networking and Wireless Body Area Networks (WBAN)</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_5.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Deepak Mishra</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: dmishra@iitj.ac.in</p>
              <p className="profession_details">Phone: (0291) 280 1262</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
              <p className="profession_details">Machine Learning; Medical Image Analysis; Biomedical Circuits and Systems; Polarization Imaging</p>
            </div>
          </div>
        </div>
            <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_6.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Dip Sankar Banerjee</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: dipsankarb@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1272</p>
              <p className="profession_details">Ph.D.: International Institute of Information Technology Hyderabad</p>
              <p className="profession_details">High Performance Computing; Computer Architecture; Data Analytics</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_7.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Gaurav Harit</p>
              <p className="profession_details">Associate Professor</p>
              <p className="profession_details">eMail: gharit@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1253</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Delhi</p>
              <p className="profession_details">Image and Video Analysis</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_8.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Kshitij Gajjar</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: kshitij@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1254</p>
              <p className="profession_details">Ph.D.: Tata Institute of Fundamental Research, Mumbai</p>
              <p className="profession_details">Theoretical Computer Science</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_9.png" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name"> Lawqueen Kanesh</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: lawqueen@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1258</p>
              <p className="profession_details">Ph.D.: Institute of Mathematical sciences, Chennai</p>
              <p className="profession_details">Algorithms; Parameterized Complexity; Graph Theory</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_10.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Mayank Vatsa</p>
              <p className="profession_details">Professor</p>
              <p className="profession_details">eMail: mvatsa@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1266</p>
              <p className="profession_details">Ph.D.: West Virginia University</p>
              <p className="profession_details">Computer Vision; Machine Learning; Deep Learning; Biometrics; Trusted AI</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_11.png" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Palash Das</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: palashdas@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1256</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Guwahati</p>
              <p className="profession_details">Computer Architecture; Near-Memory Processing; Hardware Designing; Machine Learning Accelerators</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_12.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Pallavi Jain</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: pallavi@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1270 </p>
              <p className="profession_details">Ph.D.: Dayalbagh Educational Institute (Deemed University)</p>
              <p className="profession_details">Parameterized Complexity and Algorithms; Kernelization; Computational Social Choice Theory; Graph Algorithms</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_13.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Pratik Mazumder</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: pratikm@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1255</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
              <p className="profession_details">Few-Shot Learning; Zero-Shot Learning; Incremental Learning; Deep Learning; Computer Vision; Machine Learning</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_14.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Romi Banerjee</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: romibanerjee@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1269</p>
              <p className="profession_details">Ph.D.: Calcutta University, Indian Statistical Institute</p>
              <p className="profession_details">Embodied Cognitive Architectures; Artificial General Intelligence; Computing with Words; Natural Language Understanding</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_15.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Santanu Chaudhury</p>
              <p className="profession_details">Professor</p>
              <p className="profession_details">eMail: santanuc@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1025</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Kharagpur</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_16.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Suchetana Chakraborty</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: suchetana@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1273</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Guwahati</p>
              <p className="profession_details">Wireless sensor and mobile ad hoc networks; Distributed Systems; Ubiquitous Computing; Edge Computing and IoT</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_17.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Suman Kundu</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: suman@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1263</p>
              <p className="profession_details">Ph.D.: Indian Statistical Insitute, Jadavpur University</p>
              <p className="profession_details">Social Network Analysis; Granular Computing; Network Data Science; Fuzzy Sets; Rough Sets; Distributed Algorithms</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_18.jpg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Sumit Kalra</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: sumitk@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1259</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology Kanpur</p>
              <p className="profession_details">Software Architecture; Data Analytics; IoT; Smart Healthcare</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_19.png" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Vimal Raj Sharma</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: vimalraj@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1257</p>
              <p className="profession_details">Ph.D.: Indian Institute of Technology, Kanpur</p>
              <p className="profession_details">Complexity Theory; Graph Algorithms; Theoretical Computer Science</p>
            </div>
          </div>
        </div>
        <div className="bio_dept_img2">
          <div className="bio_dept">
            <img src="images/cs_20.jpeg" className="bio_img"></img>
            <div className="title_bio">
              <p className="faculty_name">Yashaswi Verma</p>
              <p className="profession_details">Assistant Professor</p>
              <p className="profession_details">eMail: yashaswi@iitj.ac.in</p>
              <p className="profession_details">Phone: (91 291) 280 1260</p>
              <p className="profession_details">Ph.D.: International Institute of Information Technology Hyderabad</p>
              <p className="profession_details">Applied Machine Learning; Computer Vision</p>
            </div>
          </div>
        </div>

      </div>
    </body>
  );
};
export default CS;
