import React from "react";
import {
  ShieldCheck,
  FlaskConical,
  UsersRound,
  Award,
} from "lucide-react";
import './Corevalues.css';
const values = [
  {
    title: "Integrity",
    description:
      "We act with honesty, transparency, and ethical responsibility in everything we do.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies to deliver future-ready solutions.",
    icon: FlaskConical,
  },
  {
    title: "Collaboration",
    description:
      "We partner closely with clients, ensuring transparency and shared success.",
    icon: UsersRound,
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest quality in every project, every time.",
    icon: Award,
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-values-container">

        {/* Heading */}
        <div className="core-values-heading">
          <div className="core-values-badge">
            <span className="core-values-dot"></span>
            OUR CORE VALUES
          </div>

          <h2>
            The principles that guide every decision, project, and
            <br />
            relationship.
          </h2>
        </div>

        {/* Cards */}
        <div className="core-values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div className="core-value-card" key={index}>

                <div className="core-value-icon">
                  <Icon size={23} strokeWidth={2} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;