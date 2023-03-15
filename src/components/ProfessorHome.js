import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { database } from "../firebase";
import {ref,set} from "firebase/database";
import { Link } from 'react-router-dom';
const ProfessorHome = () => {
const items = [
    {
      id: 1,
      Projectname: "Project 1",
      Professor: "Dip",
      Department: "CSE",
      Deadline: "12/10/12"
    },
    {
      id: 2,
      Projectname: "Project 2",
      Professor: "Dip",
      Department: "CSE",
      Deadline: "12/10/12"
    },
    {
      id: 3,
      Projectname: "Project 3",
      Professor: "Dip",
      Department: "CSE",
      Deadline: "12/10/12"
    },
  ];
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
  function ItemList() {
    return (
      <div className="item-list">
        {items.map((item) => (
          <Item
            key={item.id}
            ProjectName={item.Projectname}
            Department={item.Department}
            Professor={item.Professor}
            Deadline={item.Deadline}
          />
        ))}
      </div>
    );
  }

    return (
      <>
        <Navbar/>
        <ItemList/>
      </>
    );
  };
  
  export default ProfessorHome;