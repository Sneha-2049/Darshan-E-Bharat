import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Homepage-components/Home";
import Contact from "./Components/Contact/Contact";
import CoursePage from "./Components/Courses/CoursePage";
import CourseDetails from "./Components/Courses/CourseDetails";
import QuizCard from "./Components/Quiz/QuizCard";
import Quiz from "./Components/Quiz/Quiz";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import RequiredAuth from "./Components/RequiredAuth";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/UserProfile/Profile";
import TeacherProfile from "./Components/TeacherProfile/TeacherProfile"; 
import CreateCourse from "./Components/TeacherProfile/CreateCourse";
import EditCourse from "./Components/TeacherProfile/EditCourse";
import Marketplace from "./Components/Marketplace/Marketplace";
import Cart from "./Components/Cart/Cart";
import AboutPage from "./Components/About/AboutPage";
import ManageCourse from "./Components/TeacherProfile/ManageCourse";
import EnrollCourse from "./Components/Courses/EnrollCourse";
import "./App.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/enroll/:id" element={<EnrollCourse />} />
              <Route
                path="/quizcard"
                element={<QuizCard sendIndex={handleChildData} />}
              />
              <Route
                path="/quiz"
                element={
                  <RequiredAuth>
                    <Quiz index={index} />
                  </RequiredAuth>
                }
              />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/course/:id" element={<CourseDetails />} />

              {/* ✅ USER PROFILE */}
              <Route path="/profile" element={<Profile />} />

              {/* ✅ TEACHER PROFILE */}
              <Route path="/teacher-profile" element={<TeacherProfile />} />
              <Route path="/create-course" element={<CreateCourse />} />
              <Route path="/edit-course/:id" element={<EditCourse />} />
              <Route path="/manage-course/:id" element={<ManageCourse />} />

              <Route
                path="/marketplace"
                element={<Marketplace cart={cart} addToCart={addToCart} />}
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                  />
                }
              />
            </Routes>
          </div>
          <Footer isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;