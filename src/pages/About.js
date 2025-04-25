import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 🚀 Hero Section with Two Columns */}
      <div className="hero-section-split">
        <div className="hero-left">
          <h1>Welcome to Think Academies</h1>
          <p>We help businesses grow through powerful and smart digital marketing strategies.</p>
        </div>
        <div className="hero-right">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOtAz5VpO3tlJJfDc47UAVV-coYaNF3rnV9LSuf=s1360-w1360-h1020"
            alt="ThinkAcademies"
          />
        </div>
      </div>

      {/* 🌟 Mid Hero Section with Scrolling Text */}
      <div className="mid-hero-scroll">
        <div className="scrolling-text">
          Boost Your Brand with Us — We design strategies that convert, engage, and inspire. Let's take your business to the next level.
        </div>
      </div>

      {/* 📦 Horizontal Info Boxes */}
      <div className="info-section">
        <div className="info-box">
          <h2>Our Mission</h2>
          <p>Deliver top-notch digital marketing services that help businesses thrive online.</p>
        </div>
        <div className="info-box">
          <h2>Our Services</h2>
          <p>SEO, PPC, Social Media, Content Marketing, Branding, and more.</p>
        </div>
        <div className="info-box">
          <h2>Why Us</h2>
          <p>We combine data-driven decisions with creative storytelling to generate results.</p>
        </div>
      </div>

      {/* 👥 Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <h3>Mandeep Singh</h3>
          </div>
          <div className="team-card">
            <h3>Jatin Pal</h3>
          </div>
          <div className="team-card">
            <h3>Shobhit Singh</h3>
          </div>
          <div className="team-card">
            <h3>Tanu Chaudhary</h3>
          </div>
        </div>
      </div>

      {/* 🏢 Gallery Section */}
      <div className="gallery-section">
        <h2>Our Office Gallery</h2>
        <div className="gallery-grid">
          <img src="https://lh3.googleusercontent.com/p/AF1QipOtAz5VpO3tlJJfDc47UAVV-coYaNF3rnV9LSuf=s1360-w1360-h1020" alt="Office 1" />
          <img src="https://lh3.googleusercontent.com/p/AF1QipNQ4wRYtObrrLtXOtS0priL1_JudZ0v4t4aSW4d=s1360-w1360-h1020-rw" alt="Office 2" />
          <img src="https://lh3.googleusercontent.com/p/AF1QipOyLkU2W1LdhsZd4Q5jtx3c5Md8NdeV8Qvvep0v=s1360-w1360-h1020" alt="Office 3" />
          <img src="https://lh3.googleusercontent.com/p/AF1QipPt7nIBFl_GdXCD1orTiB77W8zJUXVUZADNcOeW=s1360-w1360-h1020-rw" alt="Office 4" />
        </div>
      </div>
    </div>
  );
};

export default About;
