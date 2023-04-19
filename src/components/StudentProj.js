import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, set, get, onValue, update, child } from "firebase/database";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
const StudentProj = () => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate()
  const { logOut, user } = useUserAuth()
  const [isVisible, setVisible] = useState(false)
  const [username, setUsername] = useState(null);
  useEffect(() => {
    if (user.uid) {
      onValue(ref(database, `users/${user.uid}`), (snapshot) => {
        const username = snapshot.val().UserName;
        console.log('Retrieved username:', username);
        setUsername(username.toUpperCase());
      });
    }
  }, [user.uid]);
  const handleLogout = async (e) => {
    await logOut()
    navigate("/")
  }
  function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/studenthome"><img src="images/logo323.png" className="logo22" /></Link>
        <div className="navbar__container">
          <form className="navbar__search">
          </form>
          <ul className="navbar__links">
            <li className="o1">
              <Link to="/studenthome" style={{ textDecoration: 'none' }} className="hover1">Home</Link>
            </li>
            <li className="o2">
              <Link to="/Details" style={{ textDecoration: 'none' }} className="hover1"><FaUserCircle /> {username}</Link>
            </li>
            <li className="o3">
              <Link to="/StudentProj" style={{ textDecoration: 'none' }} className="hover1">Available Projects</Link>
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
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
      const data_ref = ref(database, "Projects/")
      var arr = []
      onValue(data_ref, (snapshot) => {
        snapshot.forEach(element => {
          const userProjectsRef = ref(database, `users/${user.uid}/projects/${element.key}`);
          onValue(userProjectsRef, (snapshot2) => {
            if (snapshot2.exists) {
              if (snapshot2.val() === "Applied" || snapshot2.val() === "Accepted") {
                var x = 1
              }
              else {
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
    const filteredProjects = projectInfo.filter((project) =>
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    function handleInputChange(event) {
      setSearchQuery(event.target.value);
    }
    return (
      <div className="availabel_button">
        <div className="availabel_click2">
          <button className="a1" onClick={handleButtonClick}>
            {showList ? "Hide Available Projects" : "Show Available Projects"}{" "}
          </button>
        </div>
        <input className="project_search" type="text" placeholder="Search projects..." onChange={handleInputChange} />
        {showList && (
          <div>


            <div>

              {projectInfo
                .filter((project) => project.projectName.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((project) => (
                  <ProjectDetails key={project.id} {...project} />
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  function addthestudenttoproject(projectid) {
    const data_ref = ref(database, `Projects/${projectid}`)
    update(child(data_ref, `Students/${user.uid}`), { status: "Applied" })
    const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
    set(userProjectsRef, "Applied");
  }
  function ProjectDetails({ projectName, email, numStudents, projectid, profname, department, deadline, remark }) {
    useEffect(() => {
      const currentdate = new Date()
      const deadlinedate = new Date(deadline)
      if (currentdate > deadlinedate) {
        setVisible(false)
      }
      const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
      onValue(userProjectsRef, (snapshot) => {
        if (snapshot.val() === "Applied") {
          setVisible(false)
        }
      })
    }, [deadline])
    const handleapplyclick = () => {
      addthestudenttoproject(projectid)
      setVisible(false)
    }
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
            {(
              <button className="apply_button" onClick={handleapplyclick} disabled={isVisible}>
                Apply
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }


  return (
    <>
      <Navbar />
      <AvailableProject />
    </>
  )
}
export default StudentProj