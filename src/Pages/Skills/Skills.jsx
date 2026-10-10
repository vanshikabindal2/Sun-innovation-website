import React from "react";
import "./Skills.css";

const services = [
    {
    title: "Web development",
    image:
      "https://images.pexels.com/photos/16129728/pexels-photo-16129728.jpeg",
  },
   {
    title: "E-commerce",
    image:
      "https://images.pexels.com/photos/7620574/pexels-photo-7620574.jpeg",
  },
  {
    title: "G.S.T",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "WordPress",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SEO",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "App Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Software Development",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
];

const Skills = () => {
  // Duplicate cards for seamless infinite slider
  const sliderItems = [...services, ...services];

  return (
    <section
      className="services-section"
      
    >
      {/* Background Overlay */}
      <div className="services-overlay"></div>

      <div className="services-container">

        {/* Heading */}
        <div className="services-heading">
          <span className="small-heading">WHAT WE DO</span>

          <h2>
            Sun Innovation <span>Web Tech</span>
          </h2>

          <p>
            VISION. INNOVATION. MISSION
          </p>
        </div>

        {/* Slider */}
        <div className="services-slider">
          <div className="services-track">

            {sliderItems.map((service, index) => (
              <div className="service-card" key={index}>

                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="image-overlay"></div>
                </div>

                <div className="service-title">
                  {service.title}
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;