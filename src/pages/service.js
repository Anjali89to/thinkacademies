import React, { useState } from "react";
import "../styles/service.css"; // Make sure this path is correct

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Open Modal with selected plan
  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setSuccessMessage("");
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan("");
    setFormData({ name: "", email: "", phone: "" });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission without API
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("✅ Booking successful!");
    setFormData({ name: "", email: "", phone: "" });
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000); // auto-close after 2s
  };

  return (
    <div className="digital-marketing-container">
      <h2 className="heading">Our Digital Marketing Services</h2>
      <div className="three-boxes-container">
        {["Basic", "Standard", "Professional"].map((plan, idx) => {
          const prices = ["₹10999/month", "₹17,999/month", "₹27,999/month"];
          const descriptions = [
            "Perfect for Small Businesses & Startups",
            "For Growing Businesses Ready to Scale",
            "Advanced Features for Maximum Efficiency",
          ];

          return (
            <div className="box" key={idx}>
              <h3>{plan} Plan</h3>
              <p><strong>{descriptions[idx]}</strong></p>
              <p className="price">{prices[idx]}</p>
              <ul>
                <li>SEO (Search Engine Optimization)</li>
                <li>Social Media Optimization (SMO)</li>
                <li>Pay-Per-Click (PPC) Ads</li>
                <li>Content Marketing</li>
                <li>Website Optimization</li>
                <li>Google My Business (GMB)</li>
                <li>Reporting & Analytics</li>
                <li>Support</li>
              </ul>
              <button
                className="pricing-button"
                onClick={() => handleOpenModal(`${plan} Plan - ${prices[idx]}`)}
              >
                Book Now
              </button>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Get Started</h2>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />

              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
              />

              <label>Selected Plan:</label>
              <input type="text" value={selectedPlan} readOnly />

              <button type="submit" className="submit-button">Submit</button>
              <button type="button" className="close-button" onClick={handleCloseModal}>Cancel</button>

              {successMessage && (
                <p style={{ marginTop: "10px", color: "green" }}>{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
