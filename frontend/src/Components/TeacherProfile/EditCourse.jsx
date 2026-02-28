import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditCourse.css";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [courseData, setCourseData] = useState({
    courseName: "",
    category: "",
    duration: "",
    price: "",
    description: "",
    learningPoints: ""
  });

  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/courses/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourseData({
          ...data,
          learningPoints: data.learningPoints?.join(", ")
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(courseData).forEach(key =>
      formData.append(key, courseData[key])
    );

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    const res = await fetch(
      `http://localhost:8080/api/courses/${id}`,
      {
        method: "PUT",
        headers: {
          "x-auth-token": token
        },
        body: formData
      }
    );

    if (res.ok) {
      alert("Course Updated Successfully 🎉");
      navigate("/teacher-profile");
    }
  };

  return (
    <div className="edit-course-container">
      <h1>Edit Course</h1>

      <form onSubmit={handleSubmit} className="edit-course-form">
        <input
          type="text"
          name="courseName"
          value={courseData.courseName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          value={courseData.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={courseData.price}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={courseData.description}
          onChange={handleChange}
        />

        <textarea
          name="learningPoints"
          value={courseData.learningPoints}
          onChange={handleChange}
        />

        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
        />

        <button type="submit" className="update-btn">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourse;