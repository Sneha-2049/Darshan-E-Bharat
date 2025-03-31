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
import Footer from "./Components/Footer/Footer";

import Marketplace from "./Components/Marketplace/Marketplace";
import Cart from "./Components/Cart/Cart";
import AboutPage from "./Components/About/AboutPage";  // Import About Page

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

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <SnackbarProvider maxSnack={3}>
    <Router>
      <div className="App">
        <Navbar />
        <div className= "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />  {/* About Page Route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CoursePage />} />  {/* Courses Page */}
          <Route path="/quizcard" element={<QuizCard sendIndex={handleChildData} />} />  {/* Quizcard Page */}
          <Route path="/quiz" element={<RequiredAuth><Quiz index={index} /></RequiredAuth>} />  {/* Quizcard Page */}
          <Route path= "/login" element={<Login onLogin={handleLogin} />} />  {/* Login Page */}
          <Route path= "/signup" element={<Signup />} />  {/* Signup Page */}
          <Route path="/course/:id" element={<CourseDetails />} />  {/* Course Details Page */}
          <Route
          path="/marketplace"
          element={<Marketplace cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
        </Routes>
        </div>
        {/* Footer Component included globally */}
        <Footer isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      </div>
    </Router>
    </SnackbarProvider>
  );
}

export default App;
