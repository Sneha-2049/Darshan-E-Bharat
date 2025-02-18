// // /src/components/CourseDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './Courses.css';

// const CourseDetails = () => {
//   const { id } = useParams(); // Get course ID from URL
  

//   // Example static course details (you can fetch this dynamically)
//   const course = {
//     id,
//     title: 'React for Beginners',
//     description: 'Learn React from scratch.',
//     instructor: 'John Doe',
//     price: 'Free',
//     content: 'Course content goes here...',
//     duration: '4 weeks',
//     image: 'path-to-image.jpg',
//   };

//   return (
//     <div className="course-details">
//       <img src={course.image} alt={course.title} />
//       <h2>{course.title}</h2>
//       <p>{course.description}</p>
//       <p><strong>Instructor:</strong> {course.instructor}</p>
//       <p><strong>Price:</strong> {course.price}</p>
//       <p><strong>Duration:</strong> {course.duration}</p>
//       <p><strong>Course Content:</strong> {course.content}</p>
//     </div>
//   );
// };

// export default CourseDetails;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To access the dynamic ID in the URL
import './Courses.css';

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);

  // Array of courses (same as in CourseList.js)
  const courses = [
    {
      id: 1,
      title: 'Introduction to Indian Philosophy',
      description: 'Dive into the philosophical thoughts of ancient Indian schools like Vedanta, Buddhism, and Jainism.',
      instructor: 'Dr. Ravi Kumar',
      price: '₹499',
      image: '/assets/img1.jpg',
    },
    {
      id: 2,
      title: 'The Art and Architecture of Ancient India',
      description: 'Explore the historical monuments, temples, and sculptures from the Mauryan period to the Mughal era.',
      instructor: 'Prof. Sita Sharma',
      price: '₹799',
      image: '/assets/img2.jpg',
    },
    {
      id: 3,
      title: 'Traditional Indian Music and Dance Forms',
      description: 'Learn about the rich classical music and dance forms like Bharatanatyam, Kathak, and Hindustani music.',
      instructor: 'Ananya Rao',
      price: '₹599',
      image: '/assets/img3.jpg',
    },
    {
      id: 4,
      title: 'The History of Indian Independence Movement',
      description: 'Study the events, leaders, and movements that led to India’s independence from British colonial rule.',
      instructor: 'Dr. Amit Verma',
      price: '₹399',
      image: '/assets/img4.jpg',
    },
    {
      id: 5,
      title: 'Indian Festivals and Rituals',
      description: 'Explore the cultural and spiritual significance of Indian festivals like Diwali, Holi, Eid, and more.',
      instructor: 'Priya Desai',
      price: '₹299',
      image: '/assets/img5.jpg',
    },
    {
      id: 6,
      title: 'Indian Literature: From Ancient to Modern',
      description: 'Understand the evolution of Indian literature, from the ancient texts like Mahabharata to contemporary authors.',
      instructor: 'Prof. Neha Reddy',
      price: '₹649',
      image: '/assets/img6.jpg',
    },
    {
      id: 7,
      title: 'Yoga and Meditation in Indian Tradition',
      description: 'Study the origins, practices, and health benefits of Yoga and Meditation in the Indian spiritual tradition.',
      instructor: 'Rishikesh Yoga School',
      price: '₹499',
      image: '/assets/img7.jpg',
    },
    {
      id: 8,
      title: 'Indian Textile and Handicrafts',
      description: 'Learn about the traditional textile and handicraft techniques from various regions of India.',
      instructor: 'Shalini Gupta',
      price: '₹399',
      image: '/assets/img8.jpg',
    },
  ];

  // Find the course based on the ID from the URL
  useEffect(() => {
    const foundCourse = courses.find((course) => course.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [id]);

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="course-details">
      <img src={course.image || 'default-image.jpg'} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Price:</strong> {course.price}</p>
      <p><strong>Duration:</strong> 4 weeks</p> {/* You can add duration to the course data if neede*/}
      <p><strong>Course Content:</strong> detailed content of course{/* Add content to the course data if needed */}</p>

      {/* Enroll Button */}
      <button className="enroll-button">
         Enroll Now
      </button>

    </div>
  );
};

export default CourseDetails;
