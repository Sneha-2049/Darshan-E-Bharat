// /src/components/CoursesPage.js
import React from 'react';
import CourseList from './CourseList';
import './Courses.css';

const CoursePage = () => {
  return (
    <div className="course-page">
      <h1>Discover India's Heritage</h1>
      <p>Empower yourself with knowledge about India's ancient wisdom, art, traditions, and history. 
        Our courses are designed to inspire the youth to reconnect with their roots and embrace the rich legacy 
        that has shaped our nation. Join us in preserving and celebrating India's heritage for a brighter future.Browse through our amazing courses and enhance your skills!</p>
      <CourseList />
    </div>
  );
};

export default CoursePage;
