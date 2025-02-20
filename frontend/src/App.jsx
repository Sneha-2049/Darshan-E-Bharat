import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact/Contact";
import CoursePage from './Components/Courses/CoursePage';  // Import CoursesPage
import CourseDetails from './Components/Courses/CourseDetails';  // Course Details page
import QuizCard from './Components/Quiz/QuizCard';  
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
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className= "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursePage />} />  {/* Courses Page */}
          <Route path="/quiz" element={<QuizCard />} />  {/* Quiz Page */}
          <Route path="/course/:id" element={<CourseDetails />} />  {/* Course Details Page */}
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
