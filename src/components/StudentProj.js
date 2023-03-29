import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, set, get, onValue, update } from "firebase/database";
import { Link } from 'react-router-dom';
const StudentProj = () => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate()
  const { logOut, user } = useUserAuth()
  const [isVisible, setVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
  const handleLogout = async (e) => {
    await logOut()
    navigate("/")
  }
  function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/studenthome" style={{ textDecoration: 'none', color: 'black' }}><img src="images/logo323.png" className="logo2" /></Link>
        <div className="navbar__container">
          <form className="navbar__search">
            <input type="text" placeholder="Search for anything" className="search_input" />
            <button type="submit" className="search_button">Search</button>
          </form>
          <ul className="navbar__links">
            <li className="o1">
              <Link to="/studenthome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li className="o2">
              <Link to="/Details" style={{ textDecoration: 'none', color: 'black' }}>Details</Link>
            </li>
            <li className="o3">
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
  const AvailableProject = () => {
    const [projectInfo, setProjectinfo] = useState([])
    useEffect(() => {
      const data_ref = ref(database, "Projects/")
      var arr = []
      onValue(data_ref, (snapshot) => {
        snapshot.forEach(element => {
          const userProjectsRef = ref(database, `users/${user.uid}/projects/${element.key}`);
          onValue(userProjectsRef,(snapshot2) => {
            if(snapshot2.exists){
              if(snapshot2.val() === "Applied"){
                 var x =  1
              }
              else{
                const newele = element.val()
                arr.push(newele)
              }
            }
          })

        });
        setProjectinfo(arr)
      })
    }, [])
    const handleButtonClick = () => {
      setShowList(!showList);
    };

    return (
      <div classname = "availabel_button">
        <div className="availabel_click">
        <button className="a1"
        onClick={handleButtonClick} >{showList ? 'Hide Available Projects' : 'Show Available Projects'} </button>
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
  function addthestudenttoproject(projectid) {
    const data_ref = ref(database, `Projects/${projectid}/Students`)
    update(data_ref, { [user.uid]: "Applied" })
    const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
    set(userProjectsRef, "Applied");
  }
  function ProjectDetails({ email, numStudents, projectid, profname, department, deadline, remark }) {
    useEffect(() => {
      const currentdate = new Date()
      const deadlinedate = new Date(deadline)
      if (currentdate > deadlinedate) {
        setVisible(false)
      }
      const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
      onValue(userProjectsRef,(snapshot) => {
        if(snapshot.val() === "Applied"){
          setVisible(false)
        }
      })
    }, [deadline])
    const handleapplyclick = () => {
      addthestudenttoproject(projectid)
      setIsClicked(true);
      setVisible(false)
    }
    return (
      <div className="project_detail">
        <h1>Professor: {profname}</h1>
        <h2>Email: {email}</h2>
        <h3>Number of Students: {numStudents}</h3>
        <h4>Offered to: {department}</h4>
        <h5>Deadline: {deadline}</h5>
        <h6>Remark: {remark}</h6>
        {(
          <button className="apply_button" onClick={handleapplyclick} disabled={isVisible}>
            Apply
          </button>
        )}
      </div>
    );
  }
  const MyProjects = () => {
    const [projectInfo, setProjectinfo] = useState([])
    useEffect(() => {
      const data_ref = ref(database, "Projects/")
      var arr = []
      onValue(data_ref, (snapshot) => {
        snapshot.forEach(element => {
          const userProjectsRef = ref(database, `users/${user.uid}/projects/${element.key}`);
          onValue(userProjectsRef,(snapshot2) => {
            if(snapshot2.exists){
              if(snapshot2.val() === "Applied"){
                 const newele = element.val()
                 arr.push(newele)
              }
            }
          })

        });
        setProjectinfo(arr)
      })
    }, [])
    const handleButtonClick = () => {
      setShowList(!showList);
    };
    function ProjectDetails({ email, numStudents, projectid, profname, department, deadline, remark }) {
      useEffect(() => {
        const currentdate = new Date()
        const deadlinedate = new Date(deadline)
        if (currentdate > deadlinedate) {
          setVisible(false)
        }
        const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
        onValue(userProjectsRef,(snapshot) => {
          if(snapshot.val() === "Applied"){
            setVisible(false)
          }
        })
      }, [deadline])
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
  }
  return (
    <>
      <Navbar />
      <AvailableProject />
    </>
  )
}
export default StudentProj