import React from 'react';
import '../styles/Contact.css'; // Make sure this CSS file exists or use Tailwind instead

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out for any queries or support!</p>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Type your message here..." required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
