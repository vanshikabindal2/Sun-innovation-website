import React from "react";
import {
  Headphones,
  ShieldCheck,
  Target,
} from "lucide-react";
import "./WhychooseAbout.css";

const wcu2Features = [
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Round-the-clock assistance for a seamless and hassle-free experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security and scalable infrastructure for your business.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Data-backed strategies with real-time ROI tracking and measurable growth.",
  },
];

const WhyChooseAbout = () => {
  return (
    <section className="wcu2-section">

      <div className="wcu2-circle-left"></div>
      <div className="wcu2-circle-right"></div>

      <div className="wcu2-wrapper">

        {/* Heading */}
        <div className="wcu2-heading">

          <div className="wcu2-badge">
            <span className="wcu2-dot"></span>
            WHY CHOOSE US?
          </div>

          <h2>
            We combine technical excellence with a
            <br />
            client-first approach.
          </h2>

        </div>


        {/* Cards */}
        <div className="wcu2-grid">

          {wcu2Features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="wcu2-card" key={index}>

                <div className="wcu2-icon">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3>{item.title}</h3>

                <div className="wcu2-divider"></div>

                <p>{item.description}</p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseAbout;