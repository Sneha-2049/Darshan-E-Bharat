import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await fetch(
          `http://localhost:8080/api/courses/${id}`
        );
        const courseData = await courseRes.json();
        setCourse(courseData);

        if (token) {
          const userRes = await fetch(
            "http://localhost:8080/api/users/me",
            { headers: { "x-auth-token": token } }
          );
          const userData = await userRes.json();
          setUser(userData);

          const purchased = userData.purchasedCourses?.find(
            (c) => c.course === id || c.course?._id === id
          );

          if (purchased) setIsEnrolled(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id, token]);

  if (!course) return <p>Loading...</p>;

  const demoLectures = course.lectures?.slice(0, 2) || [];
  const allLectures = course.lectures || [];

  return (
    <div className="cd2-wrapper">

      {/* HEADER */}
      <div className="cd2-header">
        <h1>{course.courseName}</h1>
        <p className="cd2-instructor">
          👨‍🏫 {course.teacher?.firstName} {course.teacher?.lastName}
        </p>

        <div className="cd2-meta">
          <span>
            📅{" "}
            {course.publishDate
              ? new Date(course.publishDate).toLocaleDateString("en-IN")
              : "Not Published"}
          </span>
          <span>🎥 {course.lectures?.length || 0} Lectures</span>
          <span>⏳ {course.duration}</span>
        </div>
      </div>

      <div className="cd2-main">

        {/* SIDEBAR */}
        <div className="cd2-sidebar">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Course Overview
          </button>

          <button
            className={activeTab === "demo" ? "active" : ""}
            onClick={() => setActiveTab("demo")}
          >
            Demo Lectures
          </button>

          <button
            className={activeTab === "lectures" ? "active" : ""}
            onClick={() => setActiveTab("lectures")}
          >
            Full Lectures
          </button>
        </div>

        {/* CONTENT */}
        <div className="cd2-content">

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="cd2-overview-card">
              <div className="cd2-overview-top">

                <img
                  src={
                    course.thumbnail
                      ? `http://localhost:8080/${course.thumbnail}`
                      : "/default-image.jpg"
                  }
                  alt="thumbnail"
                  className="cd2-thumbnail"
                />

                <div className="cd2-overview-text">
                  <h2>About This Course</h2>
                  <p>{course.description}</p>

                  {!isEnrolled && (
                    <button
                      className="cd2-enroll-btn"
                      onClick={() => navigate(`/enroll/${id}`)}
                    >
                      Enroll Now
                    </button>
                  )}

                  {isEnrolled && (
                    <div className="cd2-enrolled-badge">
                      ✅ You are enrolled
                    </div>
                  )}
                </div>
              </div>

              <div className="cd2-learning-section">
                <h3>What You'll Learn</h3>
                <ul>
                  {course.learningPoints?.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* DEMO */}
          {activeTab === "demo" && (
            <div className="cd2-video-section">
              {!token ? (
                <p>Please login to watch demo lectures.</p>
              ) : demoLectures.length === 0 ? (
                <p>No demo lectures available.</p>
              ) : (
                demoLectures.map((lecture) => (
                  <div key={lecture._id} className="cd2-video-card">
                    <h4>
                      {lecture.lectureTitle}
                      <span className="cd2-lecture-date">
                        {" "}•{" "}
                        {lecture.publishDate
                          ? `Published: ${new Date(lecture.publishDate).toLocaleDateString("en-IN")}`
                          : `Uploaded: ${new Date(lecture.createdAt).toLocaleDateString("en-IN")}`}
                      </span>
                    </h4>
                    <iframe
                      src={lecture.videoUrl}
                      title="demo"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              )}
            </div>
          )}

          {/* FULL LECTURES */}
          {activeTab === "lectures" && (
            <div className="cd2-video-section">
              {!isEnrolled ? (
                <p>Please enroll to access full lectures.</p>
              ) : (
                allLectures.map((lecture) => (
                  <div key={lecture._id} className="cd2-video-card">
                    <h4>
                      {lecture.lectureTitle}
                      <span className="cd2-lecture-date">
                        {" "}•{" "}
                        {lecture.publishDate
                          ? `Published: ${new Date(lecture.publishDate).toLocaleDateString("en-IN")}`
                          : `Uploaded: ${new Date(lecture.createdAt).toLocaleDateString("en-IN")}`}
                      </span>
                    </h4>
                    <iframe
                      src={lecture.videoUrl}
                      title="lecture"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;