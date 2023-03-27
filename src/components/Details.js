import React from "react";
import { useState,useEffect} from 'react';
import { useNavigate } from "react-router";
import {Button } from "react-bootstrap"
import { useUserAuth } from "../context/UserAuthContext";
import {ref, onValue,update,set} from "firebase/database";
import { database } from "../firebase";
import { Link} from "react-router-dom";

const Details = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  // const [info , setInfo] = useState({
  //   UserName :"",
  //   Profession: "",
  //   Department: "",
  // });
const {logOut} = useUserAuth()
const handleLogout = async(e) =>{
  await logOut()
  navigate("/")
}

const Form = () => {
  
  const [UserName, setUsername] = useState('');
  const [Department, setDepartment] = useState('');
  const [Profession, setProfession] = useState('');

  useEffect(() => {
    const userRef = ref(database,'users/'+ user.uid);
    onValue(userRef, (snapshot) => {
      if(snapshot.exists){
        setUsername(snapshot.val().UserName || '');
        setDepartment(snapshot.val().Department || '');
        setProfession(snapshot.val().Profession || '');
      }
    });

    return () => {
     
    };
  }, []);
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
            {Profession === 'Professor' ? (
              <li><Link to="/profhome">Home</Link></li>) :
              (
              <li><Link to="/studenthome">Home</Link></li> 
             )} 
            <li>
              <Link to="/Details">Details</Link>
            </li>
            {Profession === 'Professor' ? (
              <li><Link to="/profProject">Add Projects</Link></li>) :
              (
              <li><Link to="/StudentProj">Available Projects</Link></li> 
             )}
            <li>
                <Button onClick={handleLogout}> Log out</Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const info =  {UserName, Department,Profession}
    // if(UserName && Department && Profession){
      alert("hi")
      set(ref(database,"users/"+user.uid),info
      )
      alert('data stored')
      if(Profession === "Professor"){
        navigate("/profhome")
      }
      else{
        navigate("/studenthome")
      }
    }
  // };

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={UserName} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Department:
        <select value={Department} onChange={handleDepartmentChange}>
          <option value="">{Department}</option>
          <option value="CSE">CSE</option>
          <option value="ME">ME</option>
          <option value="BB">BB</option>
        </select>
      </label>
      <br />
      <label>
        Profession:
        <select value={Profession} onChange={handleProfessionChange}>
          <option value="">{Profession} </option>
          <option value="Professor">Professor</option>
          <option value="Student">Student</option>
        </select>
      </label>
      <br />
      <br />
      <button type="submit">Save</button>
    </form>
    </>
  );
};

  return (
    <>
    <Form/>
    </>
  );
}
export default Details;