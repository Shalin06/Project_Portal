import React, { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set,off,onValue,child} from "firebase/database";
import { Link } from 'react-router-dom';
import student1 from './student.json';
import Lottie from "lottie-react"
// import {props}
const ProfessorHome = () => {
const [showList, setShowList] = useState(false)
const navigate = useNavigate()
const {logOut} = useUserAuth()
const handleLogout = async(e) =>{
  await logOut()
  navigate("/")
}
function Navbar() {
    return (
      <nav className="navbar">
        <img src="images/logo323.png" className="logo2" />
        <div className="navbar__container">
          <form className="navbar__search">
          <input type="text" placeholder="Search for anything" className="search_input"/>
            <button type="submit" className="search_button">Search</button>
          </form>
          <ul className="navbar__links">
            <li>
              <Link to="/profhome"style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li>
              <Link to="/Details"style={{ textDecoration: 'none', color: 'black' }}>Details</Link>
            </li>
            <li>
              <Link to="/ProfProject"style={{ textDecoration: 'none', color: 'black' }}>Add Projects</Link>
            </li>
              <li>
              <Button onClick={handleLogout} className = "logout"> Log out</Button>
             </li>
          </ul>
        </div>
        
      </nav>
    );
  }
  const MyProjects = () => {
    const [projectInfo, setProjectinfo] = useState([])
    const {user} =useUserAuth()
    useEffect(() => {
      const projref = ref(database,`users/${user.uid}/projects`)
      var arr = []
      onValue(projref,(snapshot) => {
        snapshot.forEach(ele => {
          const newref = ref(database,`Projects/${ele.key}`)
          onValue(newref,(snapshot2)=>{
            arr.push(snapshot2.val())
          })
        })
      })
      setProjectinfo(arr)
    }, [])
    const handleButtonClick = () => {
      setShowList(!showList);
    };
    function ProjectDetails({ email, numStudents, projectid, profname, department, deadline, remark }) {
      return (
        <div className="project_detail">
          <h1>Professor: {profname}</h1>
          <h2>Email: {email}</h2>
          <h3>Number of Students: {numStudents}</h3>
          <h4>Offered to: {department}</h4>
          <h5>Deadline: {deadline}</h5>
          <h6>Remark: {remark}</h6>
        </div>
      );
    }
    return (
      <div className = "availabel_button">
        <div className="availabel_click">
        <button className="a1"
        onClick={handleButtonClick} >{showList ? 'Hide My Projects' : 'Show My Projects'} </button>
        </div>
        {showList && (
          <div>
            {projectInfo.map((project, index) => (
              <ProjectDetails key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    );
  }

    return (
      <>
        <Navbar />
        <MyProjects/>
        <div style={{ width: "40%", marginLeft: '700px', marginTop: '50px' }}>
          <Lottie loop={true} animationData={student1} classname="animation2" />
        </div>
        <div className="row3">
        <div className="col5">
              <h2 className="col6">Learning is a treasure that will</h2>
              <h3 className="col6">follow its owner everywhere</h3>
        </div>
        </div>
      </>
    );
  };
  
  export default ProfessorHome;