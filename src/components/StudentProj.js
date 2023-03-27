import React, { useState,useEffect } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set,get,onValue,update} from "firebase/database";
import { Link } from 'react-router-dom';
const StudentProj = () =>{
const [showList, setShowList] = useState(false);
const navigate = useNavigate()
const {logOut,user} = useUserAuth()
const [isVisible,setVisible] = useState(false)
const [isClicked, setIsClicked] = useState(false);
const handleLogout = async(e) =>{
  await logOut()
  navigate("/")
}
function Navbar() {
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
              <Link to="/studenthome">Home</Link>
            </li>
            <li>
              <Link to="/Details">Details</Link>
            </li>
            <li>
              <Link to="/StudentProj">Available Projects</Link>
            </li>
            {/* <button onclick={}>Available Projects</button> */}
            <li>
                 <Button onClick={handleLogout}> Log out</Button>
             </li>
          </ul>
        </div>
      </nav>
    );
  }
const AvailableProject = () =>{
  const [projectInfo ,setProjectinfo] = useState([])
  useEffect(() => {
    const data_ref = ref(database,"Projects/")
    var arr = []
    onValue(data_ref ,(snapshot)=> { 
        snapshot.forEach(element => {
          
          const newele = element.val()
          arr.push(newele)
      });    
    setProjectinfo(arr)
    })
  },[])
  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
       <div>
      <button onClick={handleButtonClick}>{showList ? 'Hide Available Projects' : 'Show Available Projects'}</button>
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
    const data_ref = ref(database,`Projects/${projectid}/Students`)
    update(data_ref,{[user.uid]:"Applied"})
    const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
    set(userProjectsRef, "Applied");
}
function ProjectDetails({ email,numStudents,projectid,profname,department,deadline,remark}) {
  useEffect(()=>{
    const currentdate = new Date()
    const deadlinedate = new Date(deadline)
    if(currentdate>deadlinedate){
      setVisible(false)
    }
  },[deadline])
  const handleapplyclick = () => {
    addthestudenttoproject(projectid)
    setIsClicked(true);
  }
  return (
    <div>
      <h5>Professor: {profname}</h5>
      <h5>email: {email}</h5>
      <p>Number of Students: {numStudents}</p>
      <p>Offered to: {department}</p>
      <p>Deadline: {deadline}</p>
      <p>remark: {remark}</p>
      {(
          <button onClick={handleapplyclick} disabled={(new Date() > new Date(deadline))}>
            Apply
          </button>
        )}
    </div>
  );
}

  return(
      <>
      <Navbar/>
      <AvailableProject/>
      </>
  )
}
export default StudentProj