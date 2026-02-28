import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ManageCourse.css";

const ManageCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const formRef = useRef(null);
    const lectureListRef = useRef(null); // 🔥 scroll target after update

    const [course, setCourse] = useState(null);
    const [lectureData, setLectureData] = useState({
        lectureTitle: "",
        lectureDescription: "",
        videoUrl: ""
    });

    const [editingLectureId, setEditingLectureId] = useState(null);
    const [loading, setLoading] = useState(false);

    /* ===========================
       FETCH COURSE DETAILS
    =========================== */
    const fetchCourse = async () => {
        const res = await fetch(`http://localhost:8080/api/courses/${id}`);
        const data = await res.json();
        setCourse(data);
    };

    useEffect(() => {
        fetchCourse();
    }, [id]);

    /* ===========================
       HANDLE INPUT CHANGE
    =========================== */
    const handleChange = (e) => {
        setLectureData({
            ...lectureData,
            [e.target.name]: e.target.value
        });
    };

    /* ===========================
       ADD / UPDATE LECTURE
    =========================== */
    const handleSubmitLecture = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let url;
            let method;

            if (editingLectureId) {
                url = `http://localhost:8080/api/courses/${id}/lecture/${editingLectureId}`;
                method = "PUT";
            } else {
                url = `http://localhost:8080/api/courses/${id}/add-lecture`;
                method = "POST";
            }

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": token
                },
                body: JSON.stringify(lectureData)
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                setLoading(false);
                return;
            }

            // Reset form
            setLectureData({
                lectureTitle: "",
                lectureDescription: "",
                videoUrl: ""
            });

            setEditingLectureId(null);

            await fetchCourse();

            // 🔥 Scroll to lecture list after update
            setTimeout(() => {
                lectureListRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 300);

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }

        setLoading(false);
    };

    /* ===========================
       DELETE LECTURE
    =========================== */
    const handleDeleteLecture = async (lectureId) => {
        const confirmDelete = window.confirm("Are you sure to delete this lecture?");
        if (!confirmDelete) return;

        await fetch(
            `http://localhost:8080/api/courses/${id}/lecture/${lectureId}`,
            {
                method: "DELETE",
                headers: { "x-auth-token": token }
            }
        );

        fetchCourse();
    };

    /* ===========================
       EDIT LECTURE + SCROLL
    =========================== */
    const handleEditLecture = (lecture) => {
        setLectureData({
            lectureTitle: lecture.lectureTitle,
            lectureDescription: lecture.lectureDescription,
            videoUrl: lecture.videoUrl
        });

        setEditingLectureId(lecture._id);

        // Scroll to form
        setTimeout(() => {
            formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    };

    /* ===========================
       TOGGLE PUBLISH
    =========================== */
    const handleTogglePublish = async () => {
        await fetch(
            `http://localhost:8080/api/courses/${id}/publish`,
            {
                method: "PATCH",
                headers: { "x-auth-token": token }
            }
        );

        fetchCourse();
    };

    /* ===========================
       YOUTUBE EMBED FORMATTER
    =========================== */
    const getEmbedUrl = (url) => {
        if (!url) return "";

        try {
            const videoIdMatch =
                url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);

            if (videoIdMatch && videoIdMatch[1]) {
                return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
            }

            return url;
        } catch (error) {
            return "";
        }
    };

    if (!course) return <p>Loading...</p>;

    return (
        <div className="manage-course-container">

            {/* HEADER */}
            <div className="manage-header">
                <div>
                    <h1>{course.courseName}</h1>
                    <p>{course.category} • {course.duration}</p>
                </div>

                <button
                    className="back-btn"
                    onClick={() => navigate("/teacher-profile")}
                >
                    ← Back
                </button>
            </div>

            {/* COURSE INFO */}
            <div className="course-info-card">
                <img
                    src={`http://localhost:8080/${course.thumbnail}`}
                    alt="thumbnail"
                />

                <div className="course-info-content">
                    <p>{course.description}</p>

                    <div className="course-stats">
                        <span>💰 ₹ {course.price}</span>
                        <span>🎥 {course.lectures.length} Lectures</span>
                        <span>👥 {course.enrolledStudents?.length || 0} Students</span>
                        <span>
                            Status:
                            {course.isPublished ? (
                                <span className="published"> Published</span>
                            ) : (
                                <span className="draft"> Draft</span>
                            )}
                        </span>
                    </div>

                    <button
                        className="publish-btn"
                        onClick={handleTogglePublish}
                    >
                        {course.isPublished ? "Unpublish Course" : "Publish Course"}
                    </button>
                </div>
            </div>

            {/* ADD / EDIT LECTURE */}
            <div className="add-lecture-section" ref={formRef}>
                <h2>
                    {editingLectureId ? "Edit Lecture" : "Add New Lecture"}
                </h2>

                <form onSubmit={handleSubmitLecture}>
                    <input
                        type="text"
                        name="lectureTitle"
                        placeholder="Lecture Title"
                        value={lectureData.lectureTitle}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="lectureDescription"
                        placeholder="Lecture Description"
                        value={lectureData.lectureDescription}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="videoUrl"
                        placeholder="YouTube URL"
                        value={lectureData.videoUrl}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading
                            ? "Saving..."
                            : editingLectureId
                                ? "Update Lecture"
                                : "Add Lecture"}
                    </button>
                </form>
            </div>

            {/* LECTURE LIST */}
            <div className="lecture-list" ref={lectureListRef}>
                <h2>All Lectures</h2>

                {course.lectures.length === 0 ? (
                    <p>No lectures added yet.</p>
                ) : (
                    course.lectures.map((lecture) => (
                        <div key={lecture._id} className="lecture-card">
                            <div className="lecture-info">
                                <h3>{lecture.lectureTitle}</h3>
                                <p>{lecture.lectureDescription}</p>
                                <p className="lecture-date">
                                    Uploaded: {new Date(lecture.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <iframe
                                src={getEmbedUrl(lecture.videoUrl)}
                                title="lecture-video"
                                allowFullScreen
                            ></iframe>

                            <div className="lecture-actions">
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEditLecture(lecture)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDeleteLecture(lecture._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default ManageCourse;