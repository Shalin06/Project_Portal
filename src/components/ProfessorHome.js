import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { database, storage } from "../firebase";
import { ref, set, off, onValue, child, get, update, remove } from "firebase/database";
import { ref as storageref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import { Link } from 'react-router-dom';
import student1 from './student.json';
import Lottie from "lottie-react"
import { send } from '@sendgrid/mail'
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import PopupWindow from "./ProjectPopUp";
import { Chat } from "./Chat";
import ReactDOM from "react-dom";


// import {props}
const ProfessorHome = () => {
  const [showList, setShowList] = useState(false)
  const [isVisible, setVisible] = useState(false)
  const [project, setProject] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showchat,setshowchat] = useState(false)
  const [isInChat, setIsInChat] = useState(null);
  const [isInProject,setisInProject] = useState(null);
  const navigate = useNavigate()
  const { user, logOut } = useUserAuth()
  const handleLogout = async (e) => {
    await logOut()
    navigate("/")
  }
  const [username, setusername] = useState(null);
  useEffect(() => {
    if(user.uid){
      onValue(ref(database, `users/${user.uid}`), (snapshot) => {
        const username = snapshot.val().UserName;
        console.log('Retrieved username:', username);
        setusername(username.toUpperCase());
      });
    }
  }, [user.uid]);
  function Navbar() {
    return (
      <nav className="navbar">
        <img src="images/logo323.png" className="logo22" />
        <div className="navbar__container">
          <ul className="navbar__links">
            <li>
              <Link to="/profhome" style={{ textDecoration: 'none' }} className="hover1">Home</Link>
            </li>
            <li>
              <Link to="/Details" style={{ textDecoration: 'none' }} className="hover1"><FaUserCircle/>{username}</Link>
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
  const handleEdit = async (projectid) => {
    // Get project details from firebase using projectid
    setisInProject(projectid)
    const projectDetails = {}
    await get(ref(database,"Projects/"+ projectid)).then((snapshot)=>{
      projectDetails["projectName"]  = snapshot.val().projectName;
      projectDetails["deadline"]  = snapshot.val().deadline;
      projectDetails["remark"]  = snapshot.val().remark;
      projectDetails["department"]  = snapshot.val().department;
      projectDetails["numStudents"]  = snapshot.val().numStudents;
      projectDetails["projectid"] = snapshot.val().projectid
    });
    setProject(projectDetails);
    setShowPopup(true);
  };
  const handleSave = async (updatedProject) => {
    // Save updated project details to firebase
    var vac = 0
    await get(ref(database,"Projects/"+ updatedProject.projectid)).then((snapshot) => {
      const dif = parseInt(snapshot.val().numStudents) - parseInt(snapshot.val().vacancy)
      vac = parseInt(updatedProject.Numberofstudents) - dif
    })
    await update(ref(database, "Projects/" + updatedProject.projectid), {
      projectName: updatedProject.title,
      deadline: updatedProject.dueDate,
      remark: updatedProject.remark,
      department: updatedProject.department,
      numStudents: updatedProject.Numberofstudents,
      vacancy: vac,
    });
    alert("Project Updated")
    setProject(updatedProject);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  function handleCloseChat() {
    setIsInChat(null);
    setshowchat(false);
  }
  const handleshowchat = (projectid,projectName) => {
    const chatWindow = window.open("", "Chat Window", "width=600,height=800");
    chatWindow.document.body.innerHTML = "<div id='chat-root'></div>";
    chatWindow.onbeforeunload = () => {
      handleCloseChat()
    }
    const targetContainer = chatWindow.document.getElementById("chat-root");
    setIsInChat(projectid)
    setshowchat(true)
    ReactDOM.render(
      <Chat
        room={projectName}
      />,
      targetContainer
    );  
  }
  function handleAccept(userid, projectid) {
    const data_ref = ref(database, `Projects/${projectid}/Students`)
    set(child(data_ref, `${userid}/status`), "Accepted")
    const userProjectsRef = ref(database, `users/${userid}/projects/${projectid}`);
    set(userProjectsRef, "Accepted");
    const vacref = ref(database, `Projects/${projectid}/vacancy`)
    var val = 0
    onValue(vacref, (snapshot) => {
      val = parseInt(snapshot.val())
    })
    set(vacref, val - 1)
    setVisible(true)
  }
  function handleRemoved(userid,projectid){
    const data_ref = ref(database, `Projects/${projectid}/Students`)
    set(child(data_ref, `${userid}/status`), "Removed")
    const userProjectsRef = ref(database, `users/${userid}/projects/${projectid}`);
    set(userProjectsRef, "Removed");
    const vacref = ref(database, `Projects/${projectid}/vacancy`)
    var val = 0
    onValue(vacref, (snapshot) => {
      val = parseInt(snapshot.val())
    })
    set(vacref, val + 1)
    setVisible(true)
  }
  function handleReject(userid, projectid) {
    const data_ref = ref(database, `Projects/${projectid}/Students`)
    set(child(data_ref, `${userid}/status`), "Rejected")
    const userProjectsRef = ref(database, `users/${userid}/projects/${projectid}`);
    set(userProjectsRef, "Rejected");
    setVisible(true)
  }
  function handleDelete(projectid) {
    const data_ref = ref(database, `Projects/${projectid}`)
    remove(data_ref)
    const userProjectsRef = ref(database, `users/${user.uid}/projects/${projectid}`);
    remove(userProjectsRef)
  }
  const sendMail = (e) => {
    e.preventDefault()
    const msg = {
      SecureToken: "241244e5-98d5-4956-ac33-572fc4ca98cd",
      To: 'shalin6102003@gmail.com',
      From: 'jain.75@iitj.ac.in',
      Subject: "This is the subject",
      Body: "And this is the body"
    }
    console.log(window.Email)
    if (window.Email) {
      window.Email.send(msg).then(() => alert("email is sent"))
    }
  }
  const MyProjects = () => {
    const [projectInfo, setProjectInfo] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
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
      });
    }, [user]);
    const filteredProjects = projectInfo.filter((project) =>
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleSeeFile = async (userid) => {
      const fileRef = storageref(storage, `${userid}/Resume`);
      try {
        await getDownloadURL(fileRef)
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            console.log(url)
            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
            window.open(url)

          })
          .catch((error) => {
            // Handle any errors
            alert("No resume")
          });
      } catch (error) {
        console.error(error);
      }
    };
    function ProjectDetails({ projectName, email, numStudents, profname, department, deadline, remark, projectid, Students, vacancy }) {
      if (typeof Students !== 'undefined') {
        var arrapp = []
        var arracc = []
        for (const [key, value] of Object.entries(Students)) {
          onValue(ref(database, `Projects/${projectid}/Students/${key}/status`), (ele) => {
            if (ele.val() === "Applied") {
              onValue(ref(database, `users/${key}/UserName`), (snapshot) => {
                const nameee = snapshot.val()
                arrapp.push({ nameee, id: key })
              })
            }
            else if (ele.val() === "Accepted") {
              onValue(ref(database, `users/${key}/UserName`), (snapshot) => {
                const nameee = snapshot.val()
                arracc.push({ nameee, id: key })
              })
            }
          })
        }
        if (arrapp.length > 0 && arracc.length > 0) {
          const studsapp = arrapp.map((item) =>
            <div key={item.id}>{item.nameee}
              <button onClick={() => handleAccept(item.id, projectid)} disabled={isVisible} className="accept_button">Accept</button>
              <button onClick={() => handleReject(item.id, projectid)} disabled={isVisible} className="reject_button">Reject</button>
              <button onClick={() => handleSeeFile(item.id)} className="resume_button">Resume</button>
            </div>)
          const studsacc = arracc.map((item) =>
            <div className="student_name" key={item.id}>{item.nameee}
            <button onClick={() => handleRemoved(item.id, projectid)} disabled={isVisible} className="reject_button">Remove</button>
            </div>)
          return (
            <div className="HOME_PAGE_PROF">           <div className="bio_dept_img3">
              <div className="bio_dept3">
                <img src="images/avatar.png" className="bio_img"></img>
                <div className="title_bio3">
                  <p className="faculty_name">Project: {projectName}</p>
                  <p className="profession_details">Professor: {profname}</p>
                  <p className="profession_details">Email: {email}</p>
                  <p className="profession_details">Number of Students: {numStudents}</p>
                  <p className="profession_details">Offered to: {department}</p>
                  <p className="profession_details">Deadline: {deadline}</p>
                  <p className="profession_details">Remark: {remark}</p>
                  <p className="profession_details">Vacancy : {vacancy}</p>
                  <p className="profession_details">Students Applied:{studsapp}</p>
                  <p className="profession_details">Students : {studsacc}</p>
                  {((isInChat !== projectid) || !showchat) && (
                  <div>
                    <button className="room" onClick={() => handleshowchat(projectid,projectName)}>Enter Chat</button>
                  </div>
                    )}
                  <button onClick={() => handleEdit(projectid)}className="delete_css">Edit Project</button>
                  {((isInProject === projectid) && showPopup) && (
                    <PopupWindow project={project} onSave={handleSave} onClose={handleClosePopup} />
                  )}
                  <button onClick={() => handleDelete(projectid)} className="delete_css">Delete</button>
                </div>
              </div>
            </div>
            </div>
          )
        } else if (arracc.length > 0 && arrapp.length == 0) {
          const studsacc = arracc.map((item) =>
            <div key={item.id} className="student_name">{item.nameee}
            <button onClick={() => handleRemoved(item.id, projectid)} disabled={isVisible} className="reject_button">Remove</button>
            </div>)
          return (
            <div className="bio_dept_img3">
              <div className="bio_dept3">
                <img src="images/avatar.png" className="bio_img"></img>
                <div className="title_bio3">
                  <p className="faculty_name">Project: {projectName}</p>
                  <p className="profession_details">Professor: {profname}</p>
                  <p className="profession_details">Email: {email}</p>
                  <p className="profession_details">Number of Students: {numStudents}</p>
                  <p className="profession_details">Offered to: {department}</p>
                  <p className="profession_details">Deadline: {deadline}</p>
                  <p className="profession_details">Remark: {remark}</p>
                  <p className="profession_details">Vacancy : {vacancy}</p>
                  <p className="profession_details">Students : {studsacc}</p>
                  {((isInChat !== projectid) || !showchat) && (
                  <div>
                    <button  className="room" onClick={() =>  handleshowchat(projectid,projectName)}>Enter Chat</button>
                  </div>
                    )}
                  <button onClick={() => handleEdit(projectid)}className="delete_css">Edit Project</button>
                  {((isInProject === projectid) && showPopup) && (
                    <PopupWindow project={project} onSave={handleSave} onClose={handleClosePopup} />
                  )}
                  <button onClick={() => handleDelete(projectid)} className="delete_css">Delete</button>
                </div>
              </div>
            </div>
          )
        } else if (arracc.length == 0 && arrapp.length > 0) {
          const studsapp = arrapp.map((item) =>
            <div className="profession_details" key={item.id}>{item.nameee}
              <div style={{ display: 'inline-flex' }}>
                <button onClick={() => handleAccept(item.id, projectid)} disabled={isVisible} className="accept_button">Accept</button>
                <button onClick={() => handleReject(item.id, projectid)} disabled={isVisible} className="reject_button">Reject</button>
                <button onClick={() => handleSeeFile(item.id)} className="resume_button">Resume</button>
              </div>
            </div>)
          return (
            <div className="bio_dept_img3">
              <div className="bio_dept3">
                <img src="images/avatar.png" className="bio_img"></img>
                <div className="title_bio3">
                  <p className="faculty_name">Project: {projectName}</p>
                  <p className="profession_details">Professor: {profname}</p>
                  <p className="profession_details">Email: {email}</p>
                  <p className="profession_details">Number of Students: {numStudents}</p>
                  <p className="profession_details">Offered to: {department}</p>
                  <p className="profession_details">Deadline: {deadline}</p>
                  <p className="profession_details">Remark: {remark}</p>
                  <p className="profession_details">Vacancy : {vacancy}</p>
                  <div className="accept_recect">
                    <p className="profession_details">Students : {studsapp}</p>
                  </div>
                  {((isInChat !== projectid) || !showchat) && (
                  <div >
                    <button  className="room" onClick={() =>  handleshowchat(projectid,projectName)}>Enter Chat</button>
                  </div>
                    )}
                  <button onClick={() => handleEdit(projectid)}className="delete_css">Edit Project</button>
                  {((isInProject === projectid) && showPopup) && (
                    <PopupWindow project={project} onSave={handleSave} onClose={handleClosePopup} />
                  )}
                  <button onClick={() => handleDelete(projectid)} className="delete_css">Delete</button>
                </div>
              </div>
            </div>
          )
        }
        else {
          return (
            <div className="bio_dept_img3">
              <div className="bio_dept3">
                <img src="images/avatar.png" className="bio_img"></img>
                <div className="title_bio3">
                  <p className="faculty_name">Project: {projectName}</p>
                  <p className="profession_details">Professor: {profname}</p>
                  <p className="profession_details">Email: {email}</p>
                  <p className="profession_details">Number of Students: {numStudents}</p>
                  <p className="profession_details">Offered to: {department}</p>
                  <p className="profession_details">Deadline: {deadline}</p>
                  <p className="profession_details">Remark: {remark}</p>
                  <p className="profession_details">Vacancy : {vacancy}</p>
                  {((isInChat !== projectid) || !showchat) && (
                  <div >
                    <button  className="room" onClick={() =>  handleshowchat(projectid,projectName)}>Enter Chat</button>
                  </div>
                    )}
                  <button onClick={() => handleEdit(projectid)}className="delete_css">Edit Project</button>
                  {((isInProject === projectid) && showPopup) && (
                    <PopupWindow project={project} onSave={handleSave} onClose={handleClosePopup} />
                  )}
                  <button onClick={() => handleDelete(projectid)} className="delete_css">Delete</button>
                </div>
              </div>
            </div>
          )
        }
      } else {

        return (
          <div className="bio_dept_img3">
            <div className="bio_dept3">
              <img src="images/avatar.png" className="bio_img"></img>
              <div className="title_bio3">
                <p className="faculty_name">Project: {projectName}</p>
                <p className="profession_details">Professor: {profname}</p>
                <p className="profession_details">Email: {email}</p>
                <p className="profession_details">Number of Students: {numStudents}</p>
                <p className="profession_details">Offered to: {department}</p>
                <p className="profession_details">Deadline: {deadline}</p>
                <p className="profession_details">Remark: {remark}</p>
                {((isInChat !== projectid) || !showchat) && (
                  <div>
                    <button className="room" onClick={() =>  handleshowchat(projectid,projectName)}>Enter Chat</button>
                  </div>
                    )}
                <button onClick={() => handleEdit(projectid)}className="delete_css">Edit Project</button>
                  {((isInProject === projectid) && showPopup) && (
                    <PopupWindow project={project} onSave={handleSave} onClose={handleClosePopup} />
                  )}
                <button onClick={() => handleDelete(projectid)} className="delete_css">Delete</button>
              </div>
            </div>
          </div>
        );
      }
    }

    const handleButtonClick = () => {
      setShowList(!showList);
    };
    function handleInputChange(event) {
      setSearchQuery(event.target.value);
    }

    return (
      <div className="availabel_button">
        <div className="availabel_click">
          <button className="a1" onClick={handleButtonClick}>
            {showList ? "Hide My Projects" : "Show My Projects"}{" "}
          </button>
        </div  >
        <div>     <input  type="text"  className="project_search" placeholder="Search projects..." onChange={handleInputChange}  />

        </div>
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
  };
  return (
    <>
      <Navbar />
      <MyProjects />
      <div className="row3">
      <div className="animation_home" >
        <Lottie loop={true} animationData={student1} className="animation_new"/>
      </div>
        <div className="col5">
          <p className="col6">Learning is a treasure that will</p>
          <p className="col6">follow its owner everywhere</p>
        </div>
      </div>
    </>
  );
};

export default ProfessorHome;