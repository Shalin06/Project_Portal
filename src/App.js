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
            </Routes>
          </UserAuthContextProvider>
    </>
  );
}

export default App;