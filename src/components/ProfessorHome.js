import React, { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set,off,onValue,child} from "firebase/database";
import { Link } from 'react-router-dom';
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
        <MyProjects/>
      </>
    );
  };
  
  export default ProfessorHome;