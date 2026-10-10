import React from "react";
import "./ContactBanner.css";
import { useNavigate } from "react-router-dom";

const ContactBanner = () => {
    const navigate = useNavigate();

  return (
    <section className="contact-grow-banner">
      <div className="contact-grow-overlay">
        <div className="contact-grow-content">
          
          <h2>Say hi and let’s grow together!</h2>

          <p>
            Our experts will guide you in the best possible way. Ping us today
            and get ready for the best web app development.
          </p>

          <button
      className="contact-grow-btn"
      onClick={() => navigate("/contact")}
    >
      Contact us now!
    </button>

        </div>
      </div>
    </section>
  );
};

export default ContactBanner;