import React, { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set,off,onValue,child, get, update} from "firebase/database";
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
  function handleAccept (userid,projectid) {
    const data_ref = ref(database, `Projects/${projectid}/Students`)
    set(child(data_ref,`${userid}/status`),"Accepted")
    const userProjectsRef = ref(database, `users/${userid}/projects/${projectid}`);
    set(userProjectsRef, "Accepted");
  }
  function handleReject (userid,projectid) {
    const data_ref = ref(database, `Projects/${projectid}/Students`)
    set(child(data_ref,`${userid}/status`),"Rejected")
    const userProjectsRef = ref(database, `users/${userid}/projects/${projectid}`);
    set(userProjectsRef, "Rejected");
  }
  const MyProjects = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const [students , setStudents] = useState([])
    const { user } = useUserAuth();
    useEffect(() => {
      const projRef = ref(database, `users/${user.uid}/projects`);
      onValue(projRef, (snapshot) => {
        const arr = [];
        snapshot.forEach((ele) => {
          const newRef = ref(database, `Projects/${ele.key}`);
          onValue(newRef, (snapshot2) => {
            arr.push({ ...snapshot2.val(), id: ele.key });
          });
        });
        setProjectInfo(arr);
        // console.log(arr)

      });
    }, [user]);
  
  function ProjectDetails({projectName,email,numStudents,profname,department,deadline,remark,projectid,Students}) 
  {
    if(typeof Students !== 'undefined'){
      var arr = []
      for (const [key, value] of Object.entries(Students)) {
        onValue(ref(database,`users/${key}/UserName`),(snapshot) =>{
            const nameee = snapshot.val()
            arr.push({nameee,id:key})
        })
      }
      console.log(arr)
      const studs = arr.map((item) => 
      <div key={item.id}>{item.nameee}
      <button onClick={() => handleAccept(item.id,projectid)}>Accept</button>
      <>or</><button onClick={() => handleReject(item.id,projectid)}>Reject</button>
      </div>)
      return (
        <div className="project_detail">
        <h1>Project: {projectName}</h1>
        <h1>Professor: {profname}</h1>
        <h2>Email: {email}</h2>
        <h3>Number of Students: {numStudents}</h3>
        <h4>Offered to: {department}</h4>
        <h5>Deadline: {deadline}</h5>
        <h6>Remark: {remark}</h6>
        <h6>Students:{studs}</h6>
        </div>
    )
    }else{

      return (
        <div className="project_detail">
          <h1>Project: {projectName}</h1>
          <h1>Professor: {profname}</h1>
          <h2>Email: {email}</h2>
          <h3>Number of Students: {numStudents}</h3>
          <h4>Offered to: {department}</h4>
          <h5>Deadline: {deadline}</h5>
          <h6>Remark: {remark}</h6>
        </div>
      );
    }
  }
  
    const handleButtonClick = () => {
      setShowList(!showList);
    };
  
    return (
      <div className="availabel_button">
        <div className="availabel_click">
          <button className="a1" onClick={handleButtonClick}>
            {showList ? "Hide My Projects" : "Show My Projects"}{" "}
          </button>
        </div>
        {showList && (
          <div>
            {projectInfo.map((project) => (
              <ProjectDetails key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    );
  };
    return (
      <>
        <Navbar />
        <MyProjects/>
        <div style={{ width: "40%", marginLeft: '820px', marginTop: '50px' }}>
          <Lottie loop={true} animationData={student1} className="animation2" />
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
  
  export default ProfessorHome;