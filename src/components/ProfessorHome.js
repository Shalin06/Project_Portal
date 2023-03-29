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
const [items, setItems] = useState([])
const [student,setStudent] = useState([])
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
        <img src = "images/631.jpg" className="logo4" width = "900"/>
        <div style={{ width: "40%", marginLeft: '700px', marginTop: '900px' }}>
          <Lottie loop={true} animationData={student1} classname="animation2" />
        </div>
        <div className="row3">
        <div className="col5">
              <h2 className="col6">Learning is a treasure that will</h2>
              <h3 className="col6">follow its owner everywhere</h3>
        </div>
        </div>
      </nav>
    );
  }
  function std({UserName,Department}){
    return (
      <div>
        <p>Student: {UserName}</p>
        <p>Department: {Department}</p>
      </div>
    );
  }
  function Item({ Projectname, Professor, Department,Deadline }) {
    return (
      <div>
        <h2>{Projectname}</h2>
        <p>Professor:{Professor}</p>
        <p>Offered to: {Department}</p>
        <p>Deadline: {Deadline}</p>
      </div>
    );
  }
  const MyProjects = () => {
    const { user } = useUserAuth();
  
    useEffect(() => {
      const projectsRef = ref(database, "users/" + user.uid + "/projects");
      const itemsRef = ref(database, "Projects");
  
      const getMyProjects = () => {
        var newItems = [];
  
        onValue(projectsRef, (snapshot) => {
          snapshot.forEach((element) => {
            if (element.val() === true) {
              onValue(child(itemsRef,element.key), (snapshot) => {
                const newval = snapshot.val()
                newItems.push(newval);
              });
            }
          });
          setItems(newItems);
        });
      };
      getMyProjects();  
      return () => {
        off(projectsRef);
        off(itemsRef);
      };
    }, []);
  
    return (
      <div className="item-list">
        <img src="images/631.jpg" className="logo4" />
        {items.map((item) => (
          <Item
            key={item.projectid}
            ProjectName={item.projectName}
            Department={item.department}
            Professor={item.profname}
          />
        ))}
        {student.map((std) => (
          <Item
            key={std.projectid}
            UserName={std.UserName}
            Department={std.department}
          />
        ))}
      </div>
    );
  };
  
    return (
      <>
        <Navbar />
        {/* <MyProjects/> */}
      </>
    );
  };
  
  export default ProfessorHome;