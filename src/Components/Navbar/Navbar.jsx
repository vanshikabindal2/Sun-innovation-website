import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = ({ onApplyClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleApplyClick = () => {
    closeMenu();
    onApplyClick();
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img src={logo} alt="Sun Innovation" />
        </Link>


        {/* ================= DESKTOP MENU ================= */}
        <div className="nav-menu">

          <Link to="/" className="active">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/service">
            Service
          </Link>

          <Link to="/project">
            Project
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* ================= DESKTOP APPLY BUTTON ================= */}
        <button
          type="button"
          className="apply-btn"
          onClick={handleApplyClick}
        >
          Apply Now
          <span>↗</span>
        </button>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* ================= MOBILE SLIDER ================= */}
      <div
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
      >

        {/* Close Button */}
        <button
          type="button"
          className="mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ×
        </button>


        {/* Mobile Logo */}
        <div className="mobile-menu-logo">

          <Link
            to="/"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Sun Innovation"
            />
          </Link>

        </div>


        {/* ================= MOBILE LINKS ================= */}
        <div className="mobile-nav-links">

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/service"
            onClick={closeMenu}
          >
            Service
          </Link>

          <Link
            to="/project"
            onClick={closeMenu}
          >
            Project
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </div>


        {/* ================= MOBILE APPLY BUTTON ================= */}
        <button
          type="button"
          className="mobile-apply-btn"
          onClick={handleApplyClick}
        >
          Apply Now
          <span>↗</span>
        </button>

      </div>


      {/* ================= OVERLAY ================= */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

    </nav>
  );
};

export default Navbar;