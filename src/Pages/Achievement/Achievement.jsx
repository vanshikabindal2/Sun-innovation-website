import React from "react";
import {
  Users,
  GraduationCap,
  FolderKanban,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import "./Achieve.css";

const achievements = [
  {
    number: "5000+",
    title: "Students Trained",
    icon: Users,
    color: "blue",
    description:
      "Students trained through practical learning, expert guidance and industry-focused programs.",
  },
  {
    number: "120+",
    title: "Expert Trainers",
    icon: GraduationCap,
    color: "purple",
    description:
      "Experienced trainers helping students build strong technical and professional skills.",
  },
  {
    number: "300+",
    title: "Live Projects",
    icon: FolderKanban,
    color: "green",
    description:
      "Real-world projects that give students practical experience and portfolio-ready skills.",
  },
  {
    number: "85%",
    title: "Placement Support",
    icon: TrendingUp,
    color: "orange",
    description:
      "Dedicated placement assistance including interview preparation and career guidance.",
  },
];

const Achievement = () => {
  return (
    <section className="achievements-section">
      
      {/* Decorative Background */}
      <div className="achievement-shape shape-one"></div>
      <div className="achievement-shape shape-two"></div>

      <div className="achievement-container">

        {/* Heading */}
        <div className="achievement-heading">

          <div className="small-heading">
            <span></span>
            <p>OUR ACHIEVEMENTS</p>
            <span></span>
          </div>

          <h2>
            Our Track Record of{" "}
            <span>Excellence</span>
          </h2>

          <p className="heading-description">
            Numbers that speak for our commitment to quality education
            and student success
          </p>

        </div>

        {/* Cards */}
        <div className="achievement-grid">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className={`achievement-card ${item.color}`}
                key={index}
              >

                {/* Decorative corner */}
                <div className="card-corner"></div>

                {/* Icon */}
                <div className="achievement-icon">
                  <Icon size={34} strokeWidth={2} />
                </div>

                {/* Main Content */}
                <div className="card-main">

                  <h3>{item.number}</h3>

                  <h4>{item.title}</h4>

                  <div className="card-line"></div>

                </div>

                {/* Hover Content */}
                <div className="card-hover-content">

                  <div className="hover-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.number}</h3>

                  <h4>{item.title}</h4>

                  <div className="card-line"></div>

                  <p>{item.description}</p>

                 

                </div>

                {/* Bottom Hint */}
                <div className="hover-hint">
                  Hover / tap to know more
                  <ArrowRight size={17} />
                </div>

                {/* Dots */}
                <div className="card-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Achievement;