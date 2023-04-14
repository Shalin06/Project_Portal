import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, set, onValue, off, child,get } from "firebase/database";
import { Link } from 'react-router-dom';
import student from './student.json';
import Lottie from "lottie-react"
import { FaUserCircle } from 'react-icons/fa';
const StudentHome = () => {
  const navigate = useNavigate()
  const { logOut,user } = useUserAuth()
  const [items, setItems] = useState([])
  const [showAccList, setAccShowList] = useState(false);
  const [showAppList, setAppShowList] = useState(false);
  const handleLogout = async (e) => {
    await logOut()
    navigate("/")
  }
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if(user.uid){
      onValue(ref(database, `users/${user.uid}`), (snapshot) => {
        const username = snapshot.val().UserName;
        console.log('Retrieved username:', username);
        setUsername(username.toUpperCase());
      });
    }
  }, [user.uid]);
   function Navbar() {
    return (
      <nav className="navbar">
        <img src="images/logo323.png" className="logo2" />
        <div className="navbar__container">
          <form className="navbar__search">
          </form>
          <ul className="navbar__links">
            <li>
              <Link to="/studenthome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li>
              <Link to="/Details" style={{ textDecoration: 'none', color: 'black' }}><FaUserCircle/> {username}</Link>
            </li>
            <li>
              <Link to="/StudentProj" style={{ textDecoration: 'none', color: 'black' }}>Available Projects</Link>
            </li>
            <li>
              <Button onClick={handleLogout} className="logout"> Log out</Button>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
  const MyProjects = () => {
    const [projectInfoApp, setProjectinfoApp] = useState([])
    const [projectInfoAcc, setProjectinfoAcc] = useState([])
    const { user } = useUserAuth()
    useEffect(() => {
      const data_ref = ref(database, "Projects/")
      var arr = []
      onValue(data_ref, (snapshot) => {
        snapshot.forEach(element => {
          const userProjectsRef = ref(database, `users/${user.uid}/projects/${element.key}`);
          onValue(userProjectsRef, (snapshot2) => {
            if (snapshot2.exists) {
              if (snapshot2.val() === "Applied") {
                const newele = element.val()
                arr.push(newele)
              }
            }
          })

        });
        setProjectinfoApp(arr)
      })
      arr = []
      onValue(data_ref, (snapshot) => {
        snapshot.forEach(element => {
          const userProjectsRef = ref(database, `users/${user.uid}/projects/${element.key}`);
          onValue(userProjectsRef, (snapshot2) => {
            if (snapshot2.exists) {
              if (snapshot2.val() === "Accepted") {
                const newele = element.val()
                arr.push(newele)
              }
            }
          })

        });
        setProjectinfoAcc(arr)
      })
    }, [])
    const handleButtonClickApp = () => {
      setAppShowList(!showAppList);
    };
    const handleButtonClickAcc = () => {
      setAccShowList(!showAccList);
    };
    function ProjectDetailsApp({ projectName, email, numStudents, vacancy, projectid, profname, department, deadline, remark }) {
      return (
        <div className="bio_dept_img4">
          <div className="bio_dept4">
            <img src="images/student.png" className="bio_img"></img>
            <div className="title_bio4">
              <p className="faculty_name">Project: {projectName}</p>
              <p className="profession_details">Professor: {profname}</p>
              <p className="profession_details">Email: {email}</p>
              <p className="profession_details">Number of Students: {numStudents}</p>
              <p className="profession_details">Offered to: {department}</p>
              <p className="profession_details">Deadline: {deadline}</p>
              <p className="profession_details">Remark: {remark}</p>
              <p className="profession_details">Vacancy: {vacancy}</p>
              <p className="profession_details">Status: Applied</p>
            </div>
          </div>
        </div>
      );
    }
    function ProjectDetailsAcc({ projectName, email, numStudents, projectid, profname, department, deadline, remark, vacancy }) {
      return (
        <div className="bio_dept_img4">
          <div className="bio_dept4">
            <img src="images/avatar.png" className="bio_img"></img>
            <div className="title_bio4">
              <p className="faculty_name">Project: {projectName}</p>
              <p className="profession_details">Professor: {profname}</p>
              <p className="profession_details">Email: {email}</p>
              <p className="profession_details">Number of Students: {numStudents}</p>
              <p className="profession_details">Offered to: {department}</p>
              <p className="profession_details">Deadline: {deadline}</p>
              <p className="profession_details">Remark: {remark}</p>
              <p className="profession_details">Vacancy: {vacancy}</p>
              <p className="profession_details">Status: Accepted</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div classname="availabel_button">
        <div className="availabel_click">
          <button className="a1"
            onClick={handleButtonClickApp} >{showAppList ? 'Hide Applied Projects' : 'Show Applied Projects'} </button>
        </div>
        {showAppList && (
          <div>
            {projectInfoApp.map((project, index) => (
              <ProjectDetailsApp key={project.projectid} {...project} />
            ))}
          </div>
        )}
        <div className="availabel_click1">
          <button className="a3"
            onClick={handleButtonClickAcc} >{showAccList ? 'Hide Accepted Projects' : 'Show Accepted Projects'} </button>
        </div>
        {showAccList && (
          <div>
            {projectInfoAcc.map((project, index) => (
              <ProjectDetailsAcc key={project.projectid} {...project} />
            ))}
          </div>
        )}
      </div>
    );
  }


  return (
    <>
      <Navbar />
      <MyProjects />
      {/* <img src = "images/631.jpg" className="logo4" width = "900"/> */}
      <div style={{ width: "40%", marginLeft: '820px', marginTop: '100px' }}>
        <Lottie loop={true} animationData={student} classname="animation2" />
      </div>
      <div className="row3">
        <div className="col5">
          <p className="col6">Learning is a treasure that will</p>
          <p className="col6">follow its owner everywhere</p>
        </div>
      </div>
    </>
  );
};

export default StudentHome;