// /src/components/CourseList.js
import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import './Courses.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Replace with API call or data fetching logic
    const fetchedCourses = [
        {
          id: 1,
          title: 'Introduction to Indian Philosophy',
          description: 'Dive into the philosophical thoughts of ancient Indian schools like Vedanta, Buddhism, and Jainism.',
          instructor: 'Dr. Ravi Kumar',
          price: '₹499',
          image: '/assets/img1.jpg', // Add the path to an image related to philosophy (e.g., a statue or a meditative scene)
        },
        {
          id: 2,
          title: 'The Art and Architecture of Ancient India',
          description: 'Explore the historical monuments, temples, and sculptures from the Mauryan period to the Mughal era.',
          instructor: 'Prof. Sita Sharma',
          price: '₹799',
          image: '/assets/img2.jpg', // Add the path to an image of an iconic monument like the Taj Mahal
        },
        {
          id: 3,
          title: 'Traditional Indian Music and Dance Forms',
          description: 'Learn about the rich classical music and dance forms like Bharatanatyam, Kathak, and Hindustani music.',
          instructor: 'Ananya Rao',
          price: '₹599',
          image: '/assets/img3.jpg', // Image suggestion: a dancer performing Bharatanatyam or a musician with traditional instruments
        },
        {
          id: 4,
          title: 'The History of Indian Independence Movement',
          description: 'Study the events, leaders, and movements that led to India’s independence from British colonial rule.',
          instructor: 'Dr. Amit Verma',
          price: '₹399',
          image: '/assets/img4.jpg', // Image suggestion: a historic black-and-white photo from the independence movement
        },
        {
          id: 5,
          title: 'Indian Festivals and Rituals',
          description: 'Explore the cultural and spiritual significance of Indian festivals like Diwali, Holi, Eid, and more.',
          instructor: 'Priya Desai',
          price: '₹299',
          image: '/assets/img5.jpg', // Image suggestion: vibrant colors during Diwali or Holi
        },
        {
          id: 6,
          title: 'Indian Literature: From Ancient to Modern',
          description: 'Understand the evolution of Indian literature, from the ancient texts like Mahabharata to contemporary authors.',
          instructor: 'Prof. Neha Reddy',
          price: '₹649',
          image: '/assets/img6.jpg', // Image suggestion: an image of ancient manuscripts or a modern author
        },
        {
          id: 7,
          title: 'Yoga and Meditation in Indian Tradition',
          description: 'Study the origins, practices, and health benefits of Yoga and Meditation in the Indian spiritual tradition.',
          instructor: 'Rishikesh Yoga School',
          price: '₹499',
          image: '/assets/img7.jpg', // Image suggestion: a person practicing yoga in nature or an ashram
        },
        {
          id: 8,
          title: 'Indian Textile and Handicrafts',
          description: 'Learn about the traditional textile and handicraft techniques from various regions of India.',
          instructor: 'Shalini Gupta',
          price: '₹399',
          image: '/assets/img8.jpg', // Image suggestion: vibrant handwoven fabrics or traditional embroidery
        },
      ];
      
      setCourses(fetchedCourses);
      
    setCourses(fetchedCourses);
  }, []);

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
