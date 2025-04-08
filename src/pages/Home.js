import React from 'react';
import '../styles/Home.css';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero hero-flex">
        <div className="hero-text">
          <h1>Unlock Your Brand's True Potential</h1>
          <p>
            At Thinkacademies, we don't just market — we ignite digital revolutions. 
            Our AI-powered strategies are built to captivate, convert, and accelerate your growth. 
            From powerful SEO to scroll-stopping social media, we turn your vision into visible impact.
          </p>
          <a href="https://thinkacademies.com/digital-marketing" target="_blank" rel="noopener noreferrer">
            <button className="hero-btn">Explore Services</button>
          </a>
        </div>

        <div className="hero-image-container">
          <img
            src="https://divethru.com/wp-content/uploads/2022/11/app-2.png"
            alt="Hero Visual"
            className="hero-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-single">
        <div className="services-content">
          <div className="services-text">
            <h2>Our Services</h2>
            <p><strong>01. Website Development & Performance:</strong> Custom-designed, high-performance websites tailored to your business needs, optimized for speed, user experience, and conversions.</p>
            <p><strong>02. Search Engine Optimization (SEO):</strong> Boost your website's ranking on major search engines, increase organic traffic and maximize online visibility.</p>
            <p><strong>03. Performance Marketing:</strong> Data-driven marketing strategies that deliver measurable results, PPC, display ads, and retargeting campaigns to accelerate growth.</p>
            <p><strong>04. Growth Marketing:</strong> Boost your website's ranking on major search engines, increase organic traffic and maximize online visibility.</p>
            <p><strong>05. Social Media Optimization & Management:</strong> Build a strong brand presence across platforms like Facebook, Instagram, LinkedIn, and more. Engage your audience with captivating content and community management.</p>
          </div>
          <div className="services-image">
            <img
              src="https://th.bing.com/th/id/OIP.arJs23r322aXTpKwrjawhwAAAA?pid=ImgDet&w=164&h=246&c=7&dpr=1.5"
              alt="Service"
              className="service-img"
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlight-section">
        <div className="highlight-box">
          <h3> Expert Mentors</h3>
          <p>Learn from professionals with years of real-world experience.</p>
        </div>
        <div className="highlight-box">
          <h3>Project-Based Learning</h3>
          <p>Build hands-on projects to strengthen your skills and portfolio.</p>
        </div>
        <div className="highlight-box">
          <h3> Career Support</h3>
          <p>Get job-ready with resume help, mock interviews, and career coaching.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-heading">
          <h2>Our Features</h2>
          <p>Explore the unique features of our services that set us apart in the digital marketing space.</p>
        </div>

        <div className="features-boxes">
          <div className="features-box">
            <h3>Google My Business (GMB) Optimization</h3>
            <p>Optimize GMB profiles for better local search performance.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_My_Business_logo_2020.svg"
              alt="GMB Optimization"
            />
          </div>
          <div className="features-box">
            <h3>SEO-Driven Strategy</h3>
            <p>Maximize your website's visibility with our SEO-focused strategies that deliver measurable results.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/SEO_Logo.png"
              alt="SEO Strategy"
            />
          </div>
          <div className="features-box">
            <h3>Content Creation & Marketing</h3>
            <p>Develop content that resonates with your audience and drives engagement across channels.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Content_creation.svg/1920px-Content_creation.svg.png"
              alt="Content Creation"
            />
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <div className="contact-us-content">
          <div className="contact-image">
            <img src="https://www.codeologyai.com/DM/30.svg" alt="Contact Us" />
          </div>

          <div className="contact-form">
            <h2>Contact Us</h2>
            <form action="https://example.com/submit" method="POST">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
              
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message" rows="4" required></textarea>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
