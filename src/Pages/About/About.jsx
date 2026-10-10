import React from "react";
import "./About.css";
import Aboutus from "../../assets/Aboutus.png";
import { FiCode, FiMonitor, FiTrendingUp, } from "react-icons/fi";
import { Rocket, Eye } from "lucide-react";
import Stats from "../stats/Stats";
import AboutusWhyChoose from "../WhyChooseAbout/WhyChooseAbout";
import CoreValues from "../Corevalues/CoreValues";
import ContactBanner from "../ContactBanner/ContactBanner";
const About = () => {
  return (
    <>
    <section
      className="about-banner"
      style={{ backgroundImage: `url(${Aboutus})` }}
    >
      <div className="about-overlay">
        
      </div>
    </section>
     <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <div className="about-label">
            <span>WHO WE ARE</span>
            <div className="label-line"></div>
          </div>

          <h2 className="about-title">
            Building the Future,
            <br />
            One Line of <span>Code</span> at a Time
          </h2>

          <p className="about-description">
            Sun Innovation Web Tech is a full-service digital studio crafting
            websites, applications, and smart digital solutions for businesses
            ready to grow. We combine creativity, technology, and strategy to
            build simple, powerful experiences around your business.
          </p>

          {/* BUTTON + FEATURES */}
          <div className="about-bottom">

            

            <div className="about-features">

              <div className="feature-item">
                <FiCode className="feature-icon" />
                <div>
                  <strong>Custom</strong>
                  <span>Development</span>
                </div>
              </div>

              <div className="feature-divider"></div>

              <div className="feature-item">
                <FiMonitor className="feature-icon" />
                <div>
                  <strong>Modern</strong>
                  <span>Solutions</span>
                </div>
              </div>

              <div className="feature-divider"></div>

              <div className="feature-item">
                <FiTrendingUp className="feature-icon" />
                <div>
                  <strong>Business</strong>
                  <span>Growth</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-area">

          <div className="yellow-shape top-shape"></div>

          <div className="image-wrapper">
            <img
              src='https://images.unsplash.com/photo-1758518729711-1cbacd55efdb?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Our development team"
            />
          </div>

          <div className="yellow-shape bottom-shape"></div>

        </div>

      </div>
    </section>

     <section className="mission-vision-section">
      <div className="mission-vision-container">

        {/* Mission Card */}
        <div className="info-card">
          <div className="card-heading">

            <div className="icon-box">
              <Rocket size={27} strokeWidth={2.2} />
            </div>

            <div>
              <h2>Our Mission</h2>
              <div className="heading-line"></div>
            </div>

          </div>

          <p>
           Our mission is to drive innovation through creative digital solutions, modern technology, and smart IT services that help businesses grow, adapt, and succeed in a rapidly changing digital world.
          </p>
        </div>


        {/* Vision Card */}
        <div className="info-card">
          <div className="card-heading">

            <div className="icon-box">
              <Eye size={27} strokeWidth={2.2} />
            </div>

            <div>
              <h2>Our Vision</h2>
              <div className="heading-line"></div>
            </div>

          </div>

          <p>
           Our vision is to shape the future through innovation, technology, and creative digital solutions. We aim to become a trusted technology partner, helping businesses embrace digital transformation, unlock new opportunities, and achieve sustainable growth in an ever-evolving digital world.
          </p>
        </div>

      </div>
    </section>
    {/* stats */}
    <Stats/>
{/* why choose us  */}
<AboutusWhyChoose/>
{/* core value */}
<CoreValues/>
{/* connact banner */}
<ContactBanner/>
    </>
  );
};

export default About;