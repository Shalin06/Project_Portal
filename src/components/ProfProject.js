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
        <div className="navbar__container">
          <h1 className="navbar__heading">Project Portal</h1>
          <form className="navbar__search">
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
          <ul className="navbar__links">
            <li>
              <Link to="/profhome">Home</Link>
            </li>
            <li>
              <Link to="/Details">Details</Link>
            </li>
            <li>
              <Link to="/ProfProject">Add Projects</Link>
            </li>
            <li>
              <Button onClick={handleLogout}> Log out</Button>
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
    <div>
      <button onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Project Name:
            <input
              type="text"
              value={projectName}
              onChange={handleprojectname}
            />
          </label>
          <label>
            Offered to Department:
            <input
              type="text"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            />
          </label>
          <label>
            Deadline:
            <input
              type="Date"
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
            />
          </label>
          <label>
            Number of Students:
            <input
              type="number"
              value={numStudents}
              onChange={(event) => setNumStudents(event.target.value)}
            />
          </label>
          <label>
            Remark:
            <input
              type="text"
              value={remark}
              onChange={(event) => setRemark(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
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