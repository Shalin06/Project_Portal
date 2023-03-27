import React, { useState ,useEffect} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set,onValue,off,child} from "firebase/database";
import { Link } from 'react-router-dom';
const StudentHome = () => {
const navigate = useNavigate()
const {logOut} = useUserAuth()
const [items, setItems] = useState([])
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
          <li>
                 <Button onClick={handleLogout}> Log out</Button>
             </li>
        </ul>
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
            onValue(child(itemsRef,element.key), (snapshot) => {
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
      <Navbar/>
    {/* <AppliedProject/> */}
    </>
  );
};

export default StudentHome;