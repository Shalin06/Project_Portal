import React from "react";
import { useState,useEffect} from 'react';
import { useNavigate } from "react-router";
import {Button } from "react-bootstrap"
import { useUserAuth } from "../context/UserAuthContext";
import {ref, onValue,update,set,get} from "firebase/database";
import {ref as storageref,uploadBytesResumable,getDownloadURL,deleteObject} from "firebase/storage"
import { database, storage } from "../firebase";
import { Link} from "react-router-dom";
import detail from './deatil.json';
import Lottie from "lottie-react"
import { FaUserCircle } from 'react-icons/fa';
const Details = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const {logOut} = useUserAuth()
const handleLogout = async(e) =>{
  await logOut()
  navigate("/")
}
const [fileUploaded, setFileUploaded] = useState(false);
useEffect(() => {
  if(user.uid){
      async function getdata() {
      const fileRef = storageref(storage, `${user.uid}/Resume`);
      var fileExists = false;
      try {
        const url = await getDownloadURL(fileRef);
        fileExists = true;
      } catch (error) {
        if (error.code === "storage/object-not-found") {
          fileExists = false;
        }
      }
      if (fileExists) {
        setFileUploaded(true);
      }
    }
    getdata()
    }
}, [fileUploaded,user.uid]);
const Form = () => {
  const [UserName, setUsername] = useState('');
  const [Department, setDepartment] = useState('');
  const [Profession, setProfession] = useState('');
  const [username, setusername] = useState(null);
  useEffect(() => {
    const userRef = ref(database,'users/'+ user.uid);
    if(user.uid){
      async function getdata() {
        await get(userRef).then((snapshot)=>{
          if(snapshot.exists){
            if(!snapshot.val().email){
              setUsername(snapshot.val().UserName);
              setDepartment(snapshot.val().Department);
              setProfession(snapshot.val().Profession);
              if(user.uid){
                onValue(ref(database, `users/${user.uid}/UserName`), (snapshot) => {
                  if(snapshot.exists){
                    const username = snapshot.val();
                    console.log('Retrieved username:', username);
                    setusername(username.toUpperCase());
                  }
                });
              }
            }
          }
        });
      }
      getdata()
    }
  }, [user.uid]);
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
          </form>
          <ul className="navbar__links">
            {Profession === 'Professor' ? (
              <li><Link to="/profhome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>) :
              (
              <li><Link to="/studenthome" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li> 
             )} 
            <li>
              <Link to="/Details" style={{ textDecoration: 'none', color: 'black' }}><FaUserCircle/> {username}</Link>
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
const handleSubmit = async(event) => {
  event.preventDefault()
  await set(ref(database,"users/"+user.uid),{
    UserName,
    Department,
    Profession,
  }
  )
  alert('data stored')
  if(Profession === "Professor"){
    navigate("/profhome")
  }
  else{
    navigate("/studenthome")
  }
}  
const UploadFile = async(event) => {
  event.preventDefault();
  const file = event.target.files[0];
  var reader = new FileReader();
  reader.readAsArrayBuffer(file);
  const metadata = {
    contentType: `${file.type}`,
  };
  reader.onload = async function (event) {
    var blob = new Blob([event.target.result], { type: file.type });

    // Upload the file to Firebase Storage
    const resume_ref = storageref(storage, `${user.uid}/Resume`);
    const uploadTask = uploadBytesResumable(resume_ref, blob,metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            alert("unauthorized");
            break;
          case "storage/canceled":
            alert("canceled");
            break;
          case "storage/unknown":
            alert(error.message);
            break;
        }
      },
      () => {
        alert("resume uploaded")
        // setFileUploaded(true);
      }
    );
};
    
};
  
const handleDeleteFile = async () => {
  const fileRef = storageref(storage, `${user.uid}/Resume`);
  try {
    await deleteObject(fileRef);
    setFileUploaded(false);
  } catch (error) {
    console.error(error);
  }
};
  
const handleSeeFile = async (e) => {
  e.preventDefault()
  const fileRef = storageref(storage, `${user.uid}/Resume`);
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
     
    });
  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
    <Navbar/>
    <div className="container2">
    <nav>
    <form className = "deatil_form">
      <div className="col4">
          <h2>Details Form</h2>
      </div>
      <label className="username_label">
        Username :
        <input type="text" value={UserName || ''} onChange={handleUsernameChange} className = "username_input"/>
      </label>
      <br />
      <label className="department_select">
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
      <div>
        {!fileUploaded && (
          <div className="resume_upload1">
            <label htmlFor="resume_input">Upload Resume :</label>
            <input type="file" id="resume_input" onChange={ UploadFile} />
          </div>
        )}
        {fileUploaded && (
          <div>
            <p>Resume Uploaded</p>
            <button onClick={handleSeeFile} className="resume_see1">See File</button>
            <button onClick={handleDeleteFile} className="resume_see2">Delete File</button>
          </div>
        )}
      </div>
      <button onClick = {handleSubmit} className="detail_save">Save</button>
    </form>
    </nav>
    </div>
    </>
  );
};

  return (
    <>
    <Form/>
    <div style={{ width: "40%", marginLeft: '200px', marginTop: '-650px' }}>
          <Lottie loop={true} animationData={detail} className="animation2" />
    </div>
    </>
  );
}
export default Details;