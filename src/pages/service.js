import React, { useState } from "react";
import "../styles/service.css"; // Ensure your CSS file is correctly named

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // Function to open the modal when a plan is clicked
  const handleOpenModal = (plan) => {
    console.log("Opening modal for plan:", plan); // Debug log
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    console.log("Closing modal"); // Debug log
    setIsModalOpen(false);
    setSelectedPlan("");
  };

  return (
    <div className="digital-marketing-container">
      <h2 className="heading">Our Digital Marketing Services</h2>
      <div className="three-boxes-container">
        {["Basic", "Standard", "Professional"].map((plan, idx) => {
          const prices = ["₹10999/month", "₹10999/month", "₹27,999/month"];
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
            <form className="modal-form">
              <label>Name:</label>
              <input type="text" placeholder="Your name" required />
              <label>Email:</label>
              <input type="email" placeholder="Your email" required />
              <label>Phone:</label>
              <input type="tel" placeholder="Your phone number" required />
              <label>Selected Plan:</label>
              <input type="text" value={selectedPlan} readOnly />
              <button type="submit" className="submit-button">Submit</button>
              <button type="button" className="close-button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service; 