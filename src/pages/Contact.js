import React, { useState } from 'react';
import '../styles/Contact.css'; // Or use Tailwind if preferred

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Since no API call is needed, just reset the form and show a success message
    setResponseMsg("✅ Message sent successfully!");
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out for any queries or support!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Send Message</button>

        {responseMsg && <p className="response">{responseMsg}</p>}
      </form>
    </div>
  );
};

export default Contact;
