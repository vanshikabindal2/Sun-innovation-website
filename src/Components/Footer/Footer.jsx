import React from "react";
import {

  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import linkdein from '../../assets/linkdein.png'
const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Heading */}
      <div className="footer-top">
        <h2>LET'S DISCUSS</h2>

        <button className="footer-arrow">
          ↗
        </button>
      </div>

      {/* Main Footer Card */}
      <div className="footer-card">

        {/* Company */}
        <div className="footer-company">

          <img
            src={logo}
            alt="Sun Innovation"
            className="footer-logo"
          />

          <p>
            Sun Innovation is committed to delivering innovative
            technology solutions with quality, creativity and
            customer satisfaction. We transform ideas into
            powerful digital experiences.
          </p>

         

          {/* Social Icons */}
          <div className="social-links">

        


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/sun_innovation_web_tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={insta}
                alt="Instagram"
              />
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.facebook.com/people/Sun-Innovation/61589393351254/     "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={fb}
                alt="LinkedIn"
              />
            </a>


            {/* FACEBOOK */}

            <a
              href="https://www.linkedin.com/in/jeet-singh-suninnovation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src={linkdein}
                alt="Facebook"
              />
            </a>

          </div>
        </div>


        {/* Useful Links */}
        <div className="footer-column">

          <h3>USEFUL LINKS</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About </a></li>
            <li><a href="/service">Services</a></li>
            
            <li><a href="/contact">Contact</a></li>
           
          </ul>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>OUR SERVICES</h3>


<ul>
  <li><Link to="/service">Website Design</Link></li>
  <li><Link to="/service">Graphic Design</Link></li>
  <li><Link to="/service">UI/UX Design</Link></li>
  <li><Link to="/service">Digital Marketing</Link></li>
  <li><Link to="/service">App Development</Link></li>
  <li><Link to="/service">E-commerce</Link></li>

</ul>

        </div>


        {/* Contact */}
        <div className="footer-column contact-column">

          <h3>CONTACT INFO</h3>

          <div className="contact-item">

            <span className="contact-icon">
              <FaMapMarkerAlt />
            </span>

            <p>
             C-94, Block-C, Anup Nagar, Bindapur,<br /> Uttam Nagar West, Delhi, 110059

            </p>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              <FaPhoneAlt />
            </span>

            <p>+91 9311135172</p>

          </div>


          


          <div className="contact-item">

            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <p>suninnovationwebtech@gmail.com</p>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="copyright">

        <p>
          © 2026 Sun Innovation. All Rights Reserved.
        </p>

      </div>


     

    </footer>
  );
};

export default Footer;