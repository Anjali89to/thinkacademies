import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/DigitalMarketing.css";

// ✅ Services Data
const services = [
  {
    title: "Website Development & Performance",
    description:
      "Custom-designed, high-performance websites tailored to your business needs, optimized for speed, user experience, and conversions.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website's ranking on major search engines, increase organic traffic and maximize online visibility.",
  },
  {
    title: "Performance Marketing",
    description:
      "Data-driven marketing strategies that deliver measurable results, PPC, display ads, and retargeting campaigns to accelerate growth.",
  },
  {
    title: "Growth Marketing",
    description:
      "Boost your website's ranking on major search engines, increase organic traffic and maximize online visibility.",
  },
  {
    title: "Social Media Optimization & Management",
    description:
      "Build a strong brand presence across platforms like Facebook, Instagram, LinkedIn, and more. Engage your audience with captivating content and community management.",
  },
];

// ✅ Courses Data
const courses = [
  {
    title: "Web Developer Course",
    description: (
      <div>
        <p><strong>Perfect for Small Businesses & Startups</strong></p>
        <ul className="course-list">
          <li>Static Website</li>
          <li><span className="highlight-blue">Free</span> Hosting (1 Year)</li>
          <li>Custom Website Design</li>
          <li>Subdomain – <span className="highlight-blue">Free</span></li>
          <li>Mobile Optimization & Responsive Design – <span className="highlight-blue">Free</span></li>
          <li>SEO-Friendly URLs – <span className="highlight-blue">Free</span></li>
          <li>Google My Business (GMB) Listing – <span className="highlight-blue">Free</span></li>
          <li>3 Digital Visiting Cards – <span className="highlight-blue">Free</span></li>
          <li>Google Location Map Integration</li>
          <li>Social Media Integration</li>
          <li>Basic SSL Certificate – <span className="highlight-blue">Free!</span></li>
          <li>XML Sitemap & URL Submission</li>
          <li>Google Analytics Setup – <span className="highlight-blue">Free!</span></li>
          <li>Website Training (Up to 2 Hrs)</li>
        </ul>
        <div className="book-buttons">
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    ),
    fees: "10999/month",
  },
  {
    title: "SEO Course",
    description: (
      <div>
        <p><strong>Ideal for growing businesses</strong></p>
        <ul className="course-list">
          <li>Keywords Optimized - 30</li>
          <li>Pages Optimized - 5</li>
          <li>SEO Audit & Analysis - <span className="highlight-blue">Free!</span></li>
          <li>Meta Title & Description Optimization - <span className="highlight-blue">Free!</span></li>
          <li>Header (H1, H2, H3) Optimization - <span className="highlight-blue">Free!</span></li>
          <li>Image Optimization & Alt Tags - <span className="highlight-blue">Free!</span></li>
          <li>URL Structure Optimization - <span className="highlight-blue">Free!</span></li>
          <li>Robots.txt & XML Sitemap Setup - <span className="highlight-blue">Free!</span></li>
          <li>Google Search Console & Analytics Setup - <span className="highlight-blue">Free!</span></li>
          <li>On-Page SEO Fixes - <span className="highlight-blue">Free!</span></li>
          <li>Off-Page SEO (Backlinks) - 50</li>
          <li>Website Speed Optimization - <span className="highlight-blue">Free!</span></li>
          <li>SSL & HTTPS Optimization - <span className="highlight-blue">Free!</span></li>
          <li>Fixing Broken Links & Redirections – <span className="highlight-blue">Free!</span></li>
          <li>SEO Reporting & Analysis – Monthly Report!</li>
          <li>Dedicated SEO Specialist – <span className="highlight-blue">Free!</span></li>
        </ul>
        <div className="book-buttons">
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    ),
    fees: "10999/month",
  },
  {
    title: "Basic Digital Marketing Package",
    description: (
      <div>
        <p><strong>The Ultimate Business Growth Package!</strong></p>
        <ul className="course-list">
          <li><strong>SEO:</strong> 10 Keywords, On-Page & Off-Page SEO, Technical SEO, Monthly Report</li>
          <li><strong>Social Media Optimization (SMO):</strong> 15 Social Media Posts, Facebook & Instagram, Organic Growth</li>
          <li><strong>Pay-Per-Click (PPC) Ads:</strong> Not Included</li>
          <li><strong>Content Marketing:</strong> 1 Blog/Month, Website Content Optimization, Social Media Captions</li>
          <li><strong>Website Optimization:</strong> Basic Audit, Mobile Optimization</li>
          <li><strong>Google My Business (GMB):</strong> Basic Setup & Optimization</li>
          <li><strong>Reporting & Analytics:</strong> Monthly Reports</li>
          <li><strong>Support:</strong> Email & Chat Support</li>
        </ul>
        <div className="book-buttons">
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    ),
    fees: "27,999",
  },
];

// ✅ Features Data
const features = [
  {
    title: "Real-World Training",
    description: "Hands-on, project-based learning with real case studies and tools.",
  },
  {
    title: "Expert Instructors",
    description: "Learn from experienced digital marketers and industry pros.",
  },
  {
    title: "Flexible Schedule",
    description: "Weekday/weekend batches with online and offline options.",
  },
  {
    title: "Career Support",
    description: "Resume building, interview prep & job placement assistance.",
  },
];

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing-container">
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-image-wrapper">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.9AtYwap7v7dligcoIQo51QHaE8&pid=Api"
              alt="Digital Marketing Girl"
              className="hero-image"
            />
            <div className="floating-icons">
              <FaFacebookF className="icon fb" />
              <FaInstagram className="icon ig" />
              <FaLinkedinIn className="icon li" />
            </div>
          </div>

          <div className="hero-content">
            <marquee behavior="scroll" direction="left" scrollamount="6">
              <h1 className="three-d-heading blue-marquee">
                Learn Digital Marketing with Real Skills
              </h1>
            </marquee>
            <p className="brand-message">
              <em>
                🚀 Whether you're a student, job-seeker or business owner — our
                practical, hands-on training helps you build confidence and
                visibility online.
                <br />
                Join <strong>Thinkacademies</strong> and take your first step
                toward digital mastery.
              </em>
            </p>
            <a href="#courses-section">
              <button className="learn-more-btn three-d-btn">Learn More</button>
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Our Services Section */}
      <section className="services-section">
        <h2 className="three-d-heading center">Our Services</h2>
        <div className="services-wrapper">
          <div className="services-list">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <h3>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services-image">
            <img
              src="https://th.bing.com/th/id/OIP.ialWyOANxMR_lCqRbPofIAHaE8?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="Our Services"
            />
          </div>
        </div>
      </section>

      {/* ✅ Courses Section */}
      <section className="courses-section" id="courses-section">
        <h2 className="three-d-heading">Our Top Courses</h2>
        <div className="course-boxes">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="fees">Fees: ₹{course.fees}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="features-section">
        <h2 className="three-d-heading center">Our Features</h2>
        <div className="features-boxes">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
