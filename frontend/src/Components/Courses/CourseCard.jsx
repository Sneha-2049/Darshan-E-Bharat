// /src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <a href='https://www.youtube.com/watch?v=vCEDptvB5Q4'><img src={course.image || 'default-image.jpg'} alt={course.title} />
      </a>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Price:</strong> {course.price}</p>
      <Link to={`/course/${course.id}`} className="btn">View Details</Link>
    </div>
  );
};

export default CourseCard;
