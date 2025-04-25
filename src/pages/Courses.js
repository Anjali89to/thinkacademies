import React from 'react';
import '../styles/Courses.css';

const Courses = () => {
  const courseList = [
    { title: "Web Development", desc: "Learn HTML, CSS, JS, React & more." },
    { title: "Data Science", desc: "Explore Python, Pandas, Machine Learning." },
    { title: "Digital Marketing", desc: "Master SEO, Ads, Social Media & Analytics." }
  ];

  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-boxes">
        {courseList.map((course, idx) => (
          <div className="course-card" key={idx}>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
