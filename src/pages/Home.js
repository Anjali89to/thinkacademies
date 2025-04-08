import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to ThinkAcademies</h1>
        <p>Your gateway to success through smart education and career development.</p>

      </section>

      {/* Highlight Boxes Section */}
      <section className="highlight-section">
        <div className="highlight-box">
          <h3>🚀 Expert Mentors</h3>
          <p>Our industry experts guide you with real-world knowledge and skills.</p>
        </div>
        <div className="highlight-box">
          <h3>💻 Project-Based Learning</h3>
          <p>Learn by doing real projects to build your portfolio and confidence.</p>
        </div>
        <div className="highlight-box">
          <h3>🎯 Job Assistance</h3>
          <p>We help you land your dream job with resume reviews and mock interviews.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
