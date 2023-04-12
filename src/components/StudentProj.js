import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, set, get, onValue, update, child } from "firebase/database";
import { Link } from 'react-router-dom';
const StudentProj = () => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate()
  const { logOut, user } = useUserAuth()
  const [isVisible, setVisible] = useState(false)

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
      <div className="availabel_click">
        <button className="a1" onClick={handleButtonClick}>
          {showList ? "Hide My Projects" : "Show My Projects"}{" "}
        </button>
      </div>
      <input className="search_input" type="text" placeholder="Search projects..." onChange={handleInputChange} style={{marginLeft:'100px'}}/>
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