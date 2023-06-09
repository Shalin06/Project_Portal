import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, set, push, onValue, update, get, child } from "firebase/database";
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import { async } from "@firebase/util";
import { FaUserCircle } from 'react-icons/fa';
const ProfProject = () => {
  const [username, setusername] = useState(null);
  const { user, logOut } = useUserAuth()
  useEffect(() => {
    if (user.uid) {
      onValue(ref(database, `users/${user.uid}`), (snapshot) => {
        const username = snapshot.val().UserName;
        console.log('Retrieved username:', username);
        setusername(username.toUpperCase());
      });
    }
  }, [user.uid]);
  function Navbar() {
    const navigate = useNavigate()
    const handleLogout = async (e) => {
      await logOut()
      navigate("/")
    }
    return (
      <nav className="navbar">
        <Link to="/profhome"><img src="images/logo323.png" className="logo22" /></Link>
        <div className="navbar__container">
          <form className="navbar__search">
          </form>
          <ul className="navbar__links">
            <li>
              <Link to="/profhome" style={{ textDecoration: 'none' }} className="hover1">Home</Link>
            </li>
            <li>
              <Link to="/Details" style={{ textDecoration: 'none' }} className="hover1"><FaUserCircle />{username}</Link>
            </li>
            <li>
              <Link to="/ProfProject" style={{ textDecoration: 'none' }} className="hover1">Add Projects</Link>
            </li>
            <li>
              <Button onClick={handleLogout} className="logout"> Log out</Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  const AddProject = () => {
    const { user } = useUserAuth()
    const [projectName, setProjectName] = useState('');
    const [department, setDepartment] = useState('');
    const [deadline, setDeadline] = useState('');
    const [numStudents, setNumStudents] = useState(0);
    const [remark, setRemark] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [profname, setprofname] = useState('')
    function get_profname() {
      const data_ref = ref(database, "users/" + user.uid)
      onValue(data_ref, (snapshot) => {
        setprofname(snapshot.val().UserName)
      })
    }
    const handleprojectname = (event) => {
      setProjectName(event.target.value)
    }
    const handleSubmit = async (event) => {
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
        email: user.email,
        projectid: newProjectKey,
        profid: user.uid,
        profname: profname,
        vacancy: numStudents
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
          <button onClick={toggleForm} className="show_form_button">
            {showForm ? 'Hide Form' : 'Show Form'}
          </button>
        </div>
        <div className="show_form_input1">
          {showForm && (
            <form onSubmit={handleSubmit} className="show_form_input">
              <div className="column">
                <div className="input-box">
                  <label>
                    Project Name:
                    <input className="show_form_width"
                      type="text"
                      value={projectName} required
                      onChange={handleprojectname}
                    />
                  </label>
                </div>
                <div className="input-box">
                  <label>
                    Offered to Department:
                    <input className="show_form_width"
                      type="text"
                      value={department}required
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
                      value={deadline} required
                      onChange={(event) => setDeadline(event.target.value)}
                    />
                  </label>
                </div>

                <div className="input-box">
                  <label>
                    Number of Students:
                    <input className="show_form_width"
                      type="number"
                      value={numStudents} required
                      onChange={(event) => setNumStudents(event.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="input-box">
                <label>
                  Remark:
                  <input className="remark"
                    type="text" 
                    value={remark} required
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

  return (
    <>
      <Navbar />
      <AddProject />
    </>
  )
}
export default ProfProject