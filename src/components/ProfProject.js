import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set,push,onValue,update, get,child} from "firebase/database";
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import { async } from "@firebase/util";
const ProfProject = () =>{

function Navbar() {
  const navigate = useNavigate()
  const {logOut} = useUserAuth()
    const handleLogout = async(e) =>{
      await logOut()
      navigate("/")
    }
    return (
      <nav className="navbar">
         <Link to="/profhome"><img src="images/logo323.png" className="logo2" /></Link>
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
const AddProject = () => {
  const {user} = useUserAuth()
  const [projectName, setProjectName] = useState('');
  const [department, setDepartment] = useState('');
  const [deadline, setDeadline] = useState('');
  const [numStudents, setNumStudents] = useState(0);
  const [remark, setRemark] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [profname,setprofname] = useState('')
  function get_profname () {
    const data_ref = ref(database,"users/" + user.uid)
    onValue(data_ref,(snapshot) => {
      setprofname(snapshot.val().UserName)
    })
  }
  const handleprojectname = (event) =>{
    setProjectName(event.target.value)
  }
  const handleSubmit = async(event) => {  
      event.preventDefault();
      get_profname()
      const projectsRef = ref(database, "Projects");
      const newProjectRef = push(projectsRef);
      const newProjectKey = newProjectRef.key;
      const newProjectData = {
      projectName,
      department,
      deadline,
      numStudents,
      remark,
      email : user.email,
      projectid : newProjectKey,
      profid: user.uid,
      profname : profname,
      vacancy : numStudents
    }
    set(newProjectRef, newProjectData);
    const userProjectsRef = ref(database, `users/${user.uid}/projects/${newProjectKey}`);
    set(userProjectsRef, true);
    setProjectName('');
    setDepartment('');
    setDeadline('');
    setNumStudents('');
    setRemark('');
    setShowForm(false)
  };
  const toggleForm = () => {
    get_profname()
    setShowForm(!showForm);
  };
  return (
    <div className="container6">
      <div className="show_form">
      <button onClick={toggleForm} className = "show_form_button">
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      </div>
      <div className="show_form_input1">
      {showForm && (
        <form onSubmit={handleSubmit} className = "show_form_input">
          <div className="column">
          <div className="input-box">
          <label>
            Project Name:
            <input className="show_form_width"
              type="text"
              value={projectName}
              onChange={handleprojectname}
            />
          </label>
          </div>
          <div className="input-box">
          <label>
            Offered to Department:
            <input className="show_form_width"
              type="text"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            />
          </label>
          </div>
          </div>
          <div className="column1">
          <div className="input-box">
          <label>
            Deadline:
            <input className="show_form_width"
              type="Date"
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
            />
          </label>
          </div>
          
          <div className="input-box">
          <label>
            Number of Students:
            <input className="show_form_width"
              type="number"
              value={numStudents}
              onChange={(event) => setNumStudents(event.target.value)}
            />
          </label>
          </div>
          </div>
          <div className="input-box">
          <label>
            Remark:
            <input className="show_form_width1"
              type="text"
              value={remark}
              onChange={(event) => setRemark(event.target.value)}
            />
          </label>
          </div>
          <div className="input-box">
          <button type="submit" className="show_form_button1">Submit</button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
}

    return(
        <>
        <Navbar/>
        <AddProject/>
        </>
    )
}
export default ProfProject