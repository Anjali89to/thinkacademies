import React, { useState } from 'react';
import CountUp from 'react-countup';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Since no API call is needed, just reset the form and show a success message
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });  // Clear form after submission
    setTimeout(() => setFormSubmitted(false), 3000); // Hide success message after 3 seconds
  };

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
          <a href="/service" target="_blank" rel="noopener noreferrer">
            <button className="hero-btn">Explore Services</button>
          </a>
        </div>
        <div className="hero-image-container">
          <img
            src="https://divethru.com/wp-content/uploads/2022/11/app-2.png"
            alt="Marketing Strategy Illustration"
            className="hero-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-single">
        <div className="services-content">
          <div className="services-text">
            <h2>Our Services</h2>
            <p><strong>01. Website Development & Performance:</strong> High-performance websites tailored to your business, optimized for speed, UX, and conversions.</p>
            <p><strong>02. Search Engine Optimization (SEO):</strong> Elevate your site’s visibility on search engines and attract more organic traffic.</p>
            <p><strong>03. Performance Marketing:</strong> Data-driven campaigns including PPC, display ads, and retargeting to boost growth.</p>
            <p><strong>04. Growth Marketing:</strong> Strategic initiatives designed to scale your business through experimentation and analytics.</p>
            <p><strong>05. Social Media Optimization & Management:</strong> Build a strong brand presence on platforms like Instagram, Facebook, LinkedIn, and more.</p>
          </div>
          <div className="services-image">
            <img
              src="https://bowwe.com/upload/domain/37991/images/university/recruitment-specialist.webp?3820038"
              alt="Digital Service Representation"
              className="service-img"
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlight-section">
        <div className="highlight-box">
          <h3>
            <span className="highlight-number"><CountUp end={240} duration={2} />+</span>{' '}
            Organizations Satisfied
          </h3>
          <p>We’ve helped 240+ businesses achieve digital excellence.</p>
        </div>
        <div className="highlight-box">
          <h3>
            <span className="highlight-number"><CountUp end={256} duration={2} />+</span>{' '}
            Projects/Quarter
          </h3>
          <p>Delivering 256+ successful projects every quarter across domains.</p>
        </div>
        <div className="highlight-box">
          <h3>24/7 Chat & Calls Support</h3>
          <p>Round-the-clock assistance to help you stay on track anytime.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-heading">
          <h2>Our Features</h2>
          <p>Explore what makes our services stand out in the digital landscape.</p>
        </div>
        <div className="features-boxes">
          {[{
            title: "Google My Business (GMB)",
            img: "https://www.elearninfotech.com/img/skills/digitalmarketing/google-ads.webp",
            desc: "Enhance local visibility with optimized GMB listings."
          },
          {
            title: "SEO-Driven Strategy",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0I0lp5K9oTkcQNRqvnye0rY_tybaByhuUaP_BNgSH569apwOlMcyjWWiIfeK6k60HK8&usqp=CAU",
            desc: "Boost your search rankings with effective SEO techniques."
          },
          {
            title: "Content Creation",
            img: "https://th.bing.com/th/id/OIP.CLBVr2MZCQHk1-Mb_rWIAQHaHa?pid=ImgDet&w=159&h=159&c=7",
            desc: "Drive engagement with high-quality, relevant content across platforms."
          },
          {
            title: "Advanced Analytics",
            img: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png",
            desc: "Track, measure, and refine your digital campaigns with precision."
          },
          {
            title: "Social Media Marketing",
            img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
            desc: "Connect with your audience through curated social strategies."
          },
          {
            title: "Email Campaigns",
            img: "https://bowwe.com/upload/domain/37991/images/university/recruitment-specialist.webp?3820038",
            desc: "Send impactful emails that nurture leads and improve conversions."
          }].map((feature, i) => (
            <div className="features-box" key={i}>
              <img src={feature.img} alt={feature.title} className="feature-img" />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <div className="contact-us-content">
          <div className="contact-image">
            <img src="https://www.codeologyai.com/DM/30.svg" alt="Contact Us Illustration" />
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            {formSubmitted && (
              <p className="success-message">✅ Your message has been sent successfully!</p>
            )}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
