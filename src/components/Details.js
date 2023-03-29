import React from "react";
import { useState,useEffect} from 'react';
import { useNavigate } from "react-router";
import {Button } from "react-bootstrap"
import { useUserAuth } from "../context/UserAuthContext";
import {ref, onValue,update,set} from "firebase/database";
import { database } from "../firebase";
import { Link} from "react-router-dom";
import detail from './deatil.json';
import Lottie from "lottie-react"

const Details = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
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
        {Profession === 'Professor' ? (
              <Link to="/profhome" ><img src="images/logo323.png" className="logo2" /></Link>) :
              (
              <Link to="/studenthome"><img src="images/logo323.png" className="logo2" /></Link>
             )} 
        <div className="navbar__container">
          <form className="navbar__search">
            <input type="text" placeholder="Search for anything" className="search_input"/>
            <button type="submit" className="search_button">Search</button>
          </form>
          <ul className="navbar__links">
            {Profession === 'Professor' ? (
              <li><Link to="/profhome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>) :
              (
              <li><Link to="/studenthome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li> 
             )} 
            <li>
              <Link to="/Details" style={{ textDecoration: 'none', color: 'black' }}>Details</Link>
            </li>
            {Profession === 'Professor' ? (
              <li><Link to="/profProject" style={{ textDecoration: 'none', color: 'black' }}>Add Projects</Link></li>) :
              (
              <li><Link to="/StudentProj" style={{ textDecoration: 'none', color: 'black' }}>Available Projects</Link></li> 
             )}
            <li>
                <Button onClick={handleLogout} className = "logout"> Log out</Button>
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
    <div className="container2">
    <form onSubmit={handleSubmit} className = "deatil_form">
      <div className="col4">
          <h2>Details Form</h2>
      </div>
      <label className="username_label">
        Username :
        <input type="text" value={UserName} onChange={handleUsernameChange} className = "username_input"/>
      </label>
      <br />
      <label div className="department_select">
        Department :
        <select value={Department} onChange={handleDepartmentChange} className = "department_option" >
          <option value="" className="d_option">{Department}</option>
          <option value="CSE">CSE</option>
          <option value="ME">ME</option>
          <option value="AI">AI</option>
          <option value="EE">EE</option>
          <option value="IH">IH</option>
          <option value="CH">CH</option>
          <option value="CI">CI</option>
        </select>
      </label>
      <br />
      <label className="profession_select">
        Profession :
        <select value={Profession} onChange={handleProfessionChange} className = "profession_option" >
          <option value="">{Profession} </option>
          <option value="Professor">Professor</option>
          <option value="Student">Student</option>
        </select>
      </label>
      <br />
      <br />
      <button type="submit" className="detail_save">Save</button>
    </form>
    
    </div>
    </>
  );
};

  return (
    <>
    <Form/>
    <div style={{ width: "40%", marginLeft: '150px', marginTop: '-750px' }}>
          <Lottie loop={true} animationData={detail} classname="animation2" />
    </div>
    </>
  );
}
export default Details;