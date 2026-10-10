import React from "react";
import "./Whychoose.css";
import { useNavigate } from "react-router-dom";
const Whychoose = () => {
  const navigate = useNavigate();

  return (
    <section className="why-section">

      {/* Background Decorative Elements */}
      <div className="why-bg-circle circle-one"></div>
      <div className="why-bg-circle circle-two"></div>

      <div className="why-container">

        {/* ================= LEFT IMAGE AREA ================= */}
        <div className="why-visual">

          <div className="decor-dots dots-left">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          {/* Curved Line */}
          <div className="curved-line"></div>

          {/* Image 1 */}
          <div className="image-card image-one">
            <img
              src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg"
              alt="Team collaboration"
            />
          </div>

          {/* Image 2 */}
          <div className="image-card image-two">
            <img
              src="https://images.unsplash.com/photo-1641951820920-c90394aef512?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business meeting"
            />
          </div>

          {/* Image 3 */}
          <div className="image-card image-three">
            <img
              src="https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coding"
            />
          </div>

          {/* Image 4 */}
          <div className="image-card image-four">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
              alt="Laptop work"
            />
          </div>

          {/* Floating label */}
          <div className="floating-label label-top">
            <span>✦</span>
            Better Skills
            <br />
            Bigger Opportunities
          </div>

          {/* Bottom label */}
          <div className="floating-label label-bottom">
            <span>♧</span>
            Learn&nbsp; • &nbsp;Grow&nbsp; • &nbsp;Succeed
          </div>

        </div>


        {/* ================= RIGHT CONTENT ================= */}
        <div className="why-content">

          <div className="section-tag">
            WHY CHOOSE US
          </div>

          <h2>
            Learn Skills That
            <br />
            Companies{" "}
            <span>Actually Need</span>
          </h2>

          <p className="why-description">
            We offer high-quality professional services with affordable
            pricing. Our business-focused solutions come with dedicated
            support and maintenance to ensure your success.
          </p>


          {/* FEATURES */}
          <div className="features-grid">

            <div className="feature-item">
              <div className="feature-icon blue-icon">
                💼
              </div>

              <div>
                <h3>High-Quality</h3>
                <h3>Professional Services</h3>
                <p>
                  Get expert solutions tailored
                  <br />
                  to your business goals.
                </p>
              </div>
            </div>


            <div className="feature-item">
              <div className="feature-icon purple-icon">
                ₹
              </div>

              <div>
                <h3>Affordable Pricing</h3>
                <p>
                  Quality services that fit
                  <br />
                  your budget.
                </p>
              </div>
            </div>


            <div className="feature-item">
              <div className="feature-icon green-icon">
                ◎
              </div>

              <div>
                <h3>Business-Focused</h3>
                <h3>Solutions</h3>
                <p>
                  Strategies that drive
                  <br />
                  real results.
                </p>
              </div>
            </div>


            <div className="feature-item">
              <div className="feature-icon orange-icon">
                ♧
              </div>

              <div>
                <h3>Dedicated Support &</h3>
                <h3>Maintenance</h3>
                <p>
                  We're with you, every step
                  <br />
                  of the way.
                </p>
              </div>
            </div>

          </div>


          {/* BUTTON */}
<button
  className="explore-btn"
  onClick={() => navigate("/service")}
>
  Explore Our Services
  <span>→</span>
</button>

        </div>

      </div>


      {/* ================= STATS ================= */}
      <div className="why-stats">

        <div className="stat-box">
          <div className="stat-icon">♧</div>
          <div>
            <strong>500+</strong>
            <span>Happy Clients</span>
          </div>
        </div>

        <div className="stat-line"></div>

        <div className="stat-box">
          <div className="stat-icon">☆</div>
          <div>
            <strong>4.9/5</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>

        <div className="stat-line"></div>

        <div className="stat-box">
          <div className="stat-icon">♢</div>
          <div>
            <strong>5+</strong>
            <span>Years of Experience</span>
          </div>
        </div>

      </div>


      {/* Bottom decorative text */}
      <div className="growth-text">
        Your Growth
        <br />
        <span>Our Priority</span>
        <i>〰</i>
      </div>

    </section>
  );
};

export default Whychoose;