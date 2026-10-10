import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

const Conatct = () => {
  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // WEB3FORMS SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: "c183532c-418e-4c87-914e-4ecc869d78bf",

            name: formData.name,

            email: formData.email,

            phone: formData.phone,

            message: formData.message,

            subject:
              "New Contact Form Submission - Sun Innovation Web Tech",

            from_name: "Sun Innovation Web Tech Website",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert(
          "Thank you! Your message has been sent successfully."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      alert(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          CONTACT BANNER
      ===================================================== */}

      <section
        className="about-banner contact-banner"
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className="about-overlay"></div>
      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="contact-section">

        <div className="contact-container">

          {/* =================================================
              LEFT SIDE - CONTACT INFORMATION
          ================================================= */}

          <div className="contact-info">

            <h2>Contact Information</h2>


            {/* OFFICE ADDRESS */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-details">

                <h4>Office Address</h4>

                <p>
                  C-94, Block-C, Anup Nagar, Bindapur,
                  Uttam Nagar West, Delhi, 110059
                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div className="contact-details">

                <h4>Call Us</h4>

                <p>
                  +91 9311135172
                </p>

              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-details">

                <h4>Email Us</h4>

                <p>
                  suninnovationwebtech@gmail.com
                </p>

              </div>

            </div>


            {/* WORKING HOURS */}

            <div className="contact-item">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div className="contact-details">

                <h4>Working Hours</h4>

                <p>
                  Mon - Sat : 10:00 AM - 6:00 PM
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE - CONTACT FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            {/* FORM HEADER */}

            <div className="contact-form-header">

              <h2>Contact Us</h2>

            </div>


            {/* FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />


              {/* EMAIL + PHONE */}

              <div className="form-row">

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No. *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* MESSAGE */}

              <textarea
                name="message"
                placeholder="Please share your requirements *"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >

                {loading ? "Sending..." : "Submit"}

                {!loading && <FaArrowUp />}

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAP
      ===================================================== */}

      {/* <section className="contact-map-section">

        <div className="contact-map-container">

          <iframe
            title="Sun Innovation Web Tech Location"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </section> */}

    </div>
  );
};

export default Conatct;
