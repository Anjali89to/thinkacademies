import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/DigitalMarketing.css";

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

const courses = [
  {
    title: "Web Developer Course",
    fees: "10999",
    features: [
      "Static Website",
      "Free Hosting (1 Year)",
      "Custom Website Design",
      "Free Subdomain",
      "Free Mobile Optimization & Responsive Design",
      "Free SEO-Friendly URLs",
      "Free Google My Business (GMB) Listing",
      "3 Digital Visiting Cards - Free",
      "Google Location Map Integration",
      "Social Media Integration",
      "Free Basic SSL Certificate",
      "XML Sitemap & URL Submission",
      "Free Google Analytics Setup",
      "Website Training (Up to 2 Hrs)",
    ],
  },
  {
    title: "SEO Course",
    fees: "10999",
    features: [
      "Keywords Optimized - 30",
      "Pages Optimized - 5",
      "Free SEO Audit & Analysis",
      "Free Meta Title & Description Optimization",
      "Free Header (H1, H2, H3) Optimization",
      "Free Image Optimization & Alt Tags",
      "Free URL Structure Optimization",
      "Free Robots.txt & XML Sitemap Setup",
      "Free Google Search Console & Analytics Setup",
      "Free On-Page SEO Fixes",
      "Off-Page SEO (Backlinks) - 50",
      "Free Website Speed Optimization",
      "Free SSL & HTTPS Optimization",
      "Free Fixing Broken Links & Redirections",
      "Monthly SEO Reporting",
      "Free Dedicated SEO Specialist",
    ],
  },
  {
    title: "Digital Marketing Course",
    fees: "27999",
    features: [
      "SEO: 10 Keywords, On-Page & Off-Page SEO, Technical SEO, Monthly Report",
      "SMO: 15 Social Media Posts, Facebook & Instagram, Organic Growth",
      "PPC Ads: Not Included",
      "Content Marketing: 1 Blog/Month, Website Content Optimization, Social Media Captions",
      "Website Optimization: Basic Audit, Mobile Optimization",
      "Google My Business: Basic Setup & Optimization",
      "Monthly Reports",
      "Email & Chat Support",
    ],
  },
];

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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    price: "",
  });

  const handleBookNowClick = () => {
    setShowForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nPrice: ₹${formData.price}`);
    setFormData({ name: "", email: "", phone: "", course: "", price: "" });
    setShowForm(false);
  };

  return (
    <div className="digital-marketing-container">
      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* Courses Section */}
      <section className="courses-section" id="courses-section">
        <h2 className="three-d-heading">Our Top Courses</h2>
        <div className="course-boxes">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <ul className="course-list">
                {course.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <span className="fees">Fees: ₹{course.fees}</span>
              <div className="book-buttons">
                <button
                  className="book-now-btn"
                  onClick={() => {
                    setFormData({ ...formData, course: course.title, price: course.fees });
                    handleBookNowClick();
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="form-section">
            <h3 className="form-heading">Fill Your Details</h3>
            <form className="booking-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                required
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Course Name"
                value={formData.course}
                readOnly
              />
              <input
                type="text"
                placeholder="Course Price"
                value={`₹${formData.price}`}
                readOnly
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        )}
      </section>

      {/* Features Section */}
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

