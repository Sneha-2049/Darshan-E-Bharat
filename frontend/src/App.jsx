import React, {useState} from  'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact/Contact";
import CoursePage from './Components/Courses/CoursePage';  // Import CoursesPage
import CourseDetails from './Components/Courses/CourseDetails';  // Course Details page
import QuizCard from './Components/Quiz/QuizCard';  
import Quiz from './Components/Quiz/Quiz'; 
import Login from './Components/Login';  // Import Login
import Signup from './Components/Signup';  // Import Signup 
import RequiredAuth from './Components/RequiredAuth';  // Import RequiredAuth

import "./App.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix missing marker icons in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {
  const [index, setIndex] = useState(() => {
    return localStorage.getItem("index") || "";
  });
    const handleChildData = (data) => {
    setIndex(data); 
    localStorage.setItem("index", data);
  };
  console.log("Rendering App Component");

  return (
    <SnackbarProvider maxSnack={3}>
    <Router>
      <div className="App">
        <Navbar />
        <div className= "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursePage />} />  {/* Courses Page */}
          <Route path="/quizcard" element={<QuizCard sendIndex={handleChildData} />} />  {/* Quizcard Page */}
          <Route path="/quiz" element={<RequiredAuth><Quiz index={index} /></RequiredAuth>} />  {/* Quizcard Page */}
          <Route path= "/login" element={<Login />} />  {/* Login Page */}
          <Route path= "/signup" element={<Signup />} />  {/* Signup Page */}
          <Route path="/course/:id" element={<CourseDetails />} />  {/* Course Details Page */}
        </Routes>
        </div>
      </div>
    </Router>
    </SnackbarProvider>
  );
}

export default App;
