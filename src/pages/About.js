import React from 'react';
import '../styles/About.css'; // Make sure this file exists

const About = () => {
  return (
    <div className="about-container">
      <h1>About ThinkAcademies</h1>
      <p className="intro">
        ThinkAcademies is your trusted partner in learning, growth, and career transformation.
      </p>

      <div className="about-section">
        <h2>🌟 Our Mission</h2>
        <p>
          Our mission is to empower students and professionals by providing hands-on training,
          expert mentorship, and real-world projects to bridge the gap between education and employment.
        </p>
      </div>

      <div className="about-section">
        <h2>🚀 Why Choose Us?</h2>
        <ul>
          <li>✔️ Project-based learning approach</li>
          <li>✔️ Personalized mentorship from industry experts</li>
          <li>✔️ Job readiness through mock interviews and resume support</li>
          <li>✔️ Cutting-edge curriculum designed by professionals</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>👨‍🏫 Our Team</h2>
        <p>
          Our instructors and mentors are professionals from top companies who are passionate about teaching and helping students succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
