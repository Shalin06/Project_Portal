import React,{useEffect,useState} from "react";
import { Link} from "react-router-dom";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import Table from './Table';
import Lottie from 'lottie-react';
import animationData from './98612-work-hard.json';

const Login = () => {
  function Navbar() {
    return (
      <nav className="navbar">
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
              <Link to="/Login1" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </li>
            <li>
              <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  const Projects = () => {
    const [projectData, setProjectData] = useState([]);
  
    useEffect(() => {
      const projectsRef = ref(database, "Projects");
      onValue(projectsRef, (snapshot) => {
        const projects = [];
        snapshot.forEach((ele) => {
          projects.push(ele.val());
        });
        const newArr = projects.map(({ Students, profid, projectid, ...rest }) => rest);
        setProjectData(newArr);
      });
    }, [projectData]);
  
      return (
        <div className="projects-container2" style={{textAlign:'center'}}>
          <h1 className="project_available"></h1>
          <div className="projects-header">
          </div>
          <Table data={projectData} className = "project-table"/>
        </div>
      );
  };
  return (
    <>
      <body>
        <div className="container_001">
          <Navbar />
          <Projects/>
          <div className="login_navbar1">
          </div>
        </div>
        <div className="login_container">
          <div className="login_reserch">
            <h11 className="h11">
              Research highligths
            </h11>
          </div>
          <div className="services">
            <div className="card">
              <img src="images/login1_img.png" className="login_images"></img>
              <p className="text_font">A Novel Multipath Mitigation Technique for GNSS Signals</p>
              <div className="btn-box">
                <div className="btn_box1">
                  <Link to = "/reserch2"><button type="button" className="read_more">Read More</button></Link>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="images/login2_1_img.jpg" className="login_images"></img>
              <p className="text_font">Rajasthani Clay Catalytic Converters for Automobiles</p>
              <div className="btn-box">
                <div className="btn_box1">
                <Link to = "/reserch3"><button type="button" className="read_more">Read More</button></Link>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="images/login_imge3.jpg" className="login_images"></img>
              <p className="text_font">Optical Field Design for Solar Thermal Applications</p>
              <div className="btn-box">
                <div className="btn_box1">
                <Link to = "/reserch4"><button type="button" className="read_more">Read More</button></Link>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="images/login4_img.jpg" className="login_images"></img>
              <p className="text_font">Language Independent Speech Generation System</p>
              <div className="btn-box">
                <div className="btn_box1">
                <Link to = "/reserch5"><button type="button" className="read_more">Read More</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="login_event">
            <h11 className="h11">
              Events
            </h11>
          </div>
          <div className="events1">
            <div className="card1">
              <p className="text_font1">FMFP-2023 Workshop: 8th National Workshop on Research Methodologies in Fluid Mechanics </p>
              <h className="text_font2">  12-15 July 2023</h>
            </div>
            <div className="card1">
              <p className="text_font1">FMFP-2023 Conference: The 10th International and 50th (Golden Jubilee) National Conference on Fluid Mechanics and Fluid Power</p>
              <h className="text_font2">  20-22 December 2023</h>
            </div>
            <div className="card1">
            <Link to = "/event"><button type="button" className="read_more">Read More</button></Link>
            </div>
          </div>
          <div className="login_event">
            <h11 className="h11">
              Announcements
            </h11>
          </div>
          <div className="events1">
            <div className="card1">
              <p className="text_font3">1.	Request for Proposal for Design, Development and Maintenance of E-Commerce Platform for Jodhpur Craft Clusters.  </p>
            </div>
            <div className="card1">
              <p className="text_font3">2.	Rolling Advertisement (IITJ/2023/Faculty Position/39; dated 1 March 2023)</p>
            </div>
            <div className="card1">
              <p className="text_font3">3.	AKAM (Azadi ka Amrit Mahotsav) is an ongoing celebration to commemorate the 75 glorious years of a progressive independent india : Veer Baal Diwas</p>
            </div>
            <div className="card1">
              <p className="text_font3">4.	Management Development Programme On Develop an Entrepreneurial mind-set for Business Growth</p>
            </div>
            <div className="card1">
            <Link to = "/annoucment"><button type="button" className="read_more">Read More</button></Link>
            </div>
          </div>
          <div className="login_navbar_new">
            <h11 className="h11">
              INDIAN INSTITUTE OF TECHNOLOGY JODHPUR
            </h11>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;