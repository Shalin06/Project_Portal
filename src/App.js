import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentHome  from "./components/StudentHome";
import ProfessorHome  from "./components/ProfessorHome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Details from "./components/Details";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProfProject from "./components/ProfProject"
import StudentProj from "./components/StudentProj"
import Research from "./components/Research"
import Faculty from "./components/Faculty"
import Login1 from "./components/Login1"
import Bio from "./components/bio"
import Chemical from "./components/chemical"
import Chemistry from "./components/chemistry"
import Civil from "./components/civil"
import CS from "./components/computer"
import Electrical from "./components/electrical"
import Arts from "./components/Libral_arts"
import Math from "./components/math"
import Material from "./components/material"
import Research1 from "./components/reserch1"
import Research2 from "./components/reserch2"
import Research3 from "./components/reserch3"
import Research4 from "./components/reserch4"
import Research5 from "./components/reserch5"
import Announcment from "./components/annoucment"
import Event from "./components/event"
function App() {
  return (
    <>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/details"
                element={
                  <ProtectedRoute>
                    <Details />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ProfProject"
                element={
                  <ProtectedRoute>
                    <ProfProject />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/StudentProj"
                element={
                  <ProtectedRoute>
                    <StudentProj/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/studenthome"
                element={
                  <ProtectedRoute>
                  <StudentHome/>
                </ProtectedRoute>
                }
              />
              <Route
                path="/profhome"
                element={
                  <ProtectedRoute>
                  <ProfessorHome/>
                </ProtectedRoute>
                }
              />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login1" element={<Login1/>}/>
            <Route path="/research" element={<Research />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/bio" element={<Bio/>}/>
            <Route path="/chemical" element={<Chemical/>}/>
            <Route path="/chemistry" element={<Chemistry/>}/>
            <Route path="/civil" element={<Civil/>}/>
            <Route path="/computer" element={<CS/>}/>
            <Route path="/electrical" element={<Electrical/>}/>
            <Route path="/libral_arts" element={<Arts/>}/>
            <Route path="/math" element={<Math/>}/>
            <Route path="/meterial" element={<Material/>}/>
            <Route path="/reserch1" element={<Research1/>}/>
            <Route path="/reserch2" element={<Research2/>}/>
            <Route path="/reserch3" element={<Research3/>}/>
            <Route path="/reserch4" element={<Research4/>}/>
            <Route path="/reserch5" element={<Research5/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/annoucment" element={<Announcment/>}/>
          </Routes>
          </UserAuthContextProvider>
    </>
  );
}

export default App;