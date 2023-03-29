import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import { ref, set, onValue, off, child } from "firebase/database";
import { Link } from 'react-router-dom';
import student from './student.json';
import Lottie from "lottie-react"
const StudentHome = () => {
  const navigate = useNavigate()
  const { logOut } = useUserAuth()
  const [items, setItems] = useState([])
  const handleLogout = async (e) => {
    await logOut()
    navigate("/")
  }
  function Navbar() {
    return (
      <nav className="navbar">
        <img src="images/logo323.png" className="logo2" />
        <div className="navbar__container">
          <form className="navbar__search">
            <input type="text" placeholder="Search for anything" className="search_input" />
            <button type="submit" className="search_button">Search</button>
          </form>
          <ul className="navbar__links">
            <li>
              <Link to="/studenthome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li>
              <Link to="/Details" style={{ textDecoration: 'none', color: 'black' }}>Details</Link>
            </li>
            <li>
              <Link to="/StudentProj" style={{ textDecoration: 'none', color: 'black' }}>Available Projects</Link>
            </li>
            <li>
            <Button onClick={handleLogout} className = "logout"> Log out</Button>
            </li>
          </ul>
        </div>
        <img src = "images/631.jpg" className="logo4" width = "900"/>
        <div style={{ width: "40%", marginLeft: '700px', marginTop: '900px' }}>
          <Lottie loop={true} animationData={student} classname="animation2" />
        </div>
        <div className="row3">
        <div className="col5">
              <h2 className="col6">Learning is a treasure that will</h2>
              <h3>follow its owner everywhere</h3>
        </div>
        </div>
      </nav>
    );
  }
  function Item({ ProjectName, Professor, Department }) {
    return (
      <div>
        <h1>Applied For</h1>
        <h2>{ProjectName}</h2>
        <p>Professor:{Professor}</p>
        <p>Offered to: {Department}</p>
      </div>
    );
  }
  const AppliedProject = () => {
    const { user } = useUserAuth();

    useEffect(() => {
      const projectsRef = ref(database, "users/" + user.uid + "/projects");
      const itemsRef = ref(database, "Projects");

      const getAppliedProjects = () => {
        var newItems = [];

        onValue(projectsRef, (snapshot) => {
          // console.log(snapshot.val())
          snapshot.forEach((element) => {
            if (element.val() === "Applied") {
              onValue(child(itemsRef, element.key), (snapshot) => {
                const newval = snapshot.val()
                newItems.push(newval);
              });
            }
          });
          setItems(newItems);
          // console.log(items)
        });
      };
      getAppliedProjects();
      // console.log(items)

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
      </div>
    );
  };


  return (
    <>
      <Navbar />
      {/* <AppliedProject/> */}
    </>
  );
};

export default StudentHome;