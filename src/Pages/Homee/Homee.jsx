import React, { useEffect, useState } from "react";
import "./Homee.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image:
      "https://www.pon.harvard.edu/wp-content/uploads/images/posts/group-decisionmaking.jpeg",
    smallTitle: "YOUR TRUSTED PARTNER",
    title: (
      <>
        Innovative <br />
        <span>Solutions</span> For A <br />
        Digital Future
      </>
    ),
    description:
      "Transform your business with cutting-edge technology and tailored solutions that drive success.",
  },
  {
    image:
      "https://images.pexels.com/photos/7988674/pexels-photo-7988674.jpeg",
    smallTitle: "SMART DIGITAL SOLUTIONS",
    title: (
      <>
        Build Your <br />
        <span>Digital</span> Presence <br />
        With Us
      </>
    ),
    description:
      "Create powerful websites and digital experiences designed to grow your business.",
  },
  {
    image:
      "https://media.istockphoto.com/id/2162645329/photo/teamwork-meeting-and-ideas-for-solution-or-decision-for-business-workplace-or-company-group.jpg?s=612x612&w=0&k=20&c=GTm_8uuh-QYmJQrWh2eNiQxVxaw-Vq7tN36GtjH44hc=",
    smallTitle: "POWERING YOUR BUSINESS",
    title: (
      <>
        Technology <br />
        <span>That Drives</span> <br />
        Growth
      </>
    ),
    description:
      "From web development to digital solutions, we help businesses move forward.",
  },
];

const Homee = () => {
    const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <section className="home-hero">

      {/* Background Image */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      ></div>

      {/* Blue Overlay */}
      <div className="hero-blue-overlay"></div>

      {/* Orange Circle */}
      <div className="orange-circle"></div>

      {/* Content */}
      <div className="hero-content" key={currentSlide}>

        <p className="hero-small-title">
          {slide.smallTitle}
        </p>

        <h1 className="hero-title">
          {slide.title}
        </h1>

        <p className="hero-description">
          {slide.description}
        </p>

        <div className="hero-buttons">
             <button
        className="about-btn"
        onClick={() => navigate("/about")}
      >
        ABOUT MORE
        <span>→</span>
      </button>

      <button
        className="service-btn"
        onClick={() => navigate("/service")}
      >
        OUR SERVICES
        <span>→</span>
      </button>

        </div>

      </div>

      {/* Slider Arrows */}
      <div className="slider-arrows">
        <button onClick={nextSlide} className="slider-arrow">
          →
        </button>

        <button onClick={prevSlide} className="slider-arrow">
          ←
        </button>
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${
              currentSlide === index ? "active" : ""
            }`}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default Homee;