import React from 'react';
import '../styles/Achievements.css'; // Make sure path is correct

const Achievements = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Our Proud Achievements</h1>
        <p>ThinkAcademies has made a mark in education!</p>
      </div>
      <div className="achievements-section">
        <div className="box">
          <h3>1000+ Students</h3>
          <p>We’ve trained over 1000 successful learners!</p>
        </div>
        <div className="box">
          <h3>Top Placements</h3>
          <p>Our candidates are placed in top companies.</p>
        </div>
        <div className="box">
          <h3>AI-Based Tests</h3>
          <p>We use smart technology to evaluate talent.</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
