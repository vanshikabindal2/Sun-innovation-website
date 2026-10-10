import React, { useState } from "react";
import "./Apply.css";

const Apply = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application Submitted:", formData);

    alert("Application submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

    onClose();
  };

  return (
    <div className="apply-overlay" onClick={onClose}>
      <div
        className="apply-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="apply-header">
          <h2>Apply for Service</h2>

          <button
            className="apply-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="apply-form">

          {/* NAME */}
          <div className="form-group">
            <label>
              Full Name <span>*</span>
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>
              Email Address <span>*</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label>
              Phone Number <span>*</span>
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* COURSE */}
          <div className="form-group">
            <label>
              Service Interest <span>🎓</span>
            </label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Web Development">
                Web Development
              </option>
              <option value="MERN Stack Development">
                App Development
              </option>
              <option value="Full Stack Development">
                Graphic Design
              </option>
              <option value="Digital Marketing">
                Digital Marketing
              </option>
              <option value="Graphic Design">
                GST
              </option>
              <option value="Graphic Design">
                E-commerce
              </option>
                <option value="Graphic Design">
                Ai-Automation
              </option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label>Message (Optional)</label>

            <textarea
              name="message"
              placeholder="Tell us about yourself and career goals..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="submit-application">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default Apply;