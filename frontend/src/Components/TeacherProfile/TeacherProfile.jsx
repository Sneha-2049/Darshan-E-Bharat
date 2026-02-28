import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherProfile.css";

const TeacherProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [teacherDetails, setTeacherDetails] = useState({});
  const [courses, setCourses] = useState([]);

  /* ===========================
     FETCH DATA
  ============================ */
  const fetchData = async () => {
    try {
      // Teacher details
      const userRes = await fetch("http://localhost:8080/api/users/me", {
        headers: { "x-auth-token": token }
      });
      const userData = await userRes.json();
      setTeacherDetails(userData);

      // Teacher courses
      const courseRes = await fetch(
        "http://localhost:8080/api/courses/teacher",
        {
          headers: { "x-auth-token": token }
        }
      );
      const courseData = await courseRes.json();
      setCourses(courseData || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ===========================
     DELETE COURSE
  ============================ */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:8080/api/courses/${id}`, {
        method: "DELETE",
        headers: { "x-auth-token": token }
      });

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  /* ===========================
     TOGGLE PUBLISH
  ============================ */
  const handlePublish = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/courses/${id}/publish`, {
        method: "PATCH",
        headers: { "x-auth-token": token }
      });

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="teacher-dashboard">

      {/* ================= HEADER ================= */}
      <div className="dashboard-header">
        <div>
          <h1>
            {teacherDetails.firstName} {teacherDetails.lastName}
          </h1>
          <p className="expertise">
            {teacherDetails.expertise} | {teacherDetails.experience}
          </p>
          <p>{teacherDetails.email}</p>
        </div>

        <button
          className="create-course-btn"
          onClick={() => navigate("/create-course")}
        >
          + Create Classroom
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="stats-section">
        <div className="stat-card">
          <h3>Coins</h3>
          <p>💰 {teacherDetails.coins || 0}</p>
        </div>

        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>{courses.length}</p>
        </div>

        <div className="stat-card">
          <h3>Total Enrollments</h3>
          <p>
            {courses.reduce(
              (sum, c) => sum + (c.enrollmentCount || 0),
              0
            )}
          </p>
        </div>
      </div>

      {/* ================= COURSE GRID ================= */}
      <div className="teacher-course-grid">
        {courses.length === 0 ? (
          <p>No courses created yet.</p>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="teacher-course-card">

              {/* Thumbnail */}
              <img
                src={`http://localhost:8080/${course.thumbnail}`}
                alt="thumbnail"
              />

              {/* Title */}
              <h3>{course.courseName}</h3>

              {/* Description */}
              <p>{course.description}</p>

              {/* Meta Info */}
              <div className="course-meta">
                <span className="price">₹ {course.price}</span>
                <span>👥 {course.enrollmentCount || 0} Students</span>
                <span
                  className={`status ${
                    course.isPublished ? "published" : "draft"
                  }`}
                >
                  {course.isPublished ? "Published" : "Draft"}
                </span>
              </div>

              {/* Publish Date */}
              {course.publishDate && (
                <p className="publish-date">
                  📅 Published on:{" "}
                  {new Date(course.publishDate).toLocaleDateString()}
                </p>
              )}

              {/* ================= ACTION BUTTONS ================= */}
              <div className="teacher-course-actions">

                <div className="action-row">
                  <button
                    className="manage-btn"
                    onClick={() =>
                      navigate(`/manage-course/${course._id}`)
                    }
                  >
                    Manage
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/edit-course/${course._id}`)
                    }
                  >
                    Edit
                  </button>
                </div>

                <div className="action-row">
                  <button
                    className="publish-btn"
                    onClick={() => handlePublish(course._id)}
                  >
                    {course.isPublished
                      ? "Unpublish"
                      : "Publish"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </button>
                </div>

              </div>

            </div>
          ))
        )}
      </div>

      {/* ================= QUIZ SECTION ================= */}
      <div className="quiz-section">
        <h2>Quiz Performance</h2>
        {teacherDetails.quizResults?.length > 0 ? (
          teacherDetails.quizResults.map((quiz, idx) => (
            <div key={idx} className="quiz-card">
              <h4>{quiz.topic}</h4>
              <p>Score: {quiz.score}</p>
              <p>Coins: {quiz.coins}</p>
            </div>
          ))
        ) : (
          <p>No quiz attempts yet.</p>
        )}
      </div>

    </div>
  );
};

export default TeacherProfile;