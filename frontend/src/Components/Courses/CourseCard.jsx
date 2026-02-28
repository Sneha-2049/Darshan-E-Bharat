// src/Components/Courses/CourseCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const CourseCard = ({ course, isEnrolled }) => {
  return (
    <div className="student-course-card">

      {/* Thumbnail */}
      <div className="student-course-image">
        <img
          src={
            course.thumbnail
              ? `http://localhost:8080/${course.thumbnail}`
              : "/default-image.jpg"
          }
          alt={course.courseName}
        />

        {isEnrolled && (
          <span className="badge enrolled-badge">
            Enrolled
          </span>
        )}
      </div>

      {/* Content */}
      <div className="student-course-content">

        {/* Title */}
        <h3 className="course-title">
          {course.courseName}
        </h3>

        {/* Instructor */}
        <p className="course-instructor">
          👨‍🏫 {course.teacher?.firstName} {course.teacher?.lastName}
        </p>

        {/* Description (limited lines) */}
        <p className="student-course-description">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="course-meta-row">
          <span>🎥 {course.lectures?.length || 0} Lectures</span>

          {course.publishDate && (
            <span>
              📅 {new Date(course.publishDate).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="student-course-footer">

          <div className="price-section">
            <span className="student-course-price">
              ₹ {course.price}
            </span>
          </div>

          <Link
            to={`/course/${course._id}`}
            className="student-view-btn"
          >
            View Course
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;