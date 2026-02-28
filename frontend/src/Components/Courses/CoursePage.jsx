import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import "./Courses.css";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        /* ===========================
           FETCH ALL PUBLISHED COURSES
        =========================== */
        const courseRes = await fetch(
          "http://localhost:8080/api/courses"
        );
        const courseData = await courseRes.json();

        setCourses(Array.isArray(courseData) ? courseData : []);

        /* ===========================
           FETCH USER PURCHASED COURSES
        =========================== */
        if (token) {
          const userRes = await fetch(
            "http://localhost:8080/api/users/me",
            {
              headers: { "x-auth-token": token }
            }
          );

          const userData = await userRes.json();

          setPurchasedCourses(
            userData.purchasedCourses?.map(
              (item) => item.course
            ) || []
          );
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="student-course-page">
      <h1 className="student-course-title">
        Explore Courses
      </h1>

      {loading ? (
        <p className="loading-text">
          Loading courses...
        </p>
      ) : courses.length === 0 ? (
        <p className="no-course-text">
          No courses available yet.
        </p>
      ) : (
        <div className="student-course-grid">
          {courses.map((course) => {
            const isEnrolled =
              purchasedCourses.includes(course._id);

            return (
              <CourseCard
                key={course._id}
                course={course}
                isEnrolled={isEnrolled}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CoursePage;