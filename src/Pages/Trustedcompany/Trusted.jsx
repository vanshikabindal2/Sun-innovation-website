import React from "react";
import "./Trusted.css";

const companies = [
  {
    name: "Google",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    name: "TCS",
    logo: "https://cdn.simpleicons.org/tcs",
  },
  {
    name: "Wipro",
    logo: "https://cdn.simpleicons.org/wipro",
  },
  {
    name: "Accenture",
    logo: "https://cdn.simpleicons.org/accenture",
  },

  {
    name: "Infosys",
    logo: "https://cdn.simpleicons.org/infosys",
  },
  {
    name: "IBM",
    logo: "https://icon2.cleanpng.com/20180506/vbe/kisspng-ibm-system-i-computer-software-aiga-information-te-hi-technology-5aef0518997664.1273465215256138486286.jpg",
  },
  {
    name: "Amazon",
    logo: "https://www.citypng.com/public/uploads/preview/official-hq-amazon-a-letter-symbol-logo-icon-70175169479214184uavt0v1m.png",
  },
  {
    name: "Deloitte",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUabxhfhv1WHg6WRsRTnNkXzUVsmqBt930QPn60cM0X_e2XopvT_K9JPiL&s=10",
  },
  {
    name: "Capgemini",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0KwkIJ5_eAFzlxVfAWBFb4JsiyTWrP_0kjgc38p8PHwjVGJGrN4N438&s=10",
  },
];

const Trusted = () => {
  // Duplicate list for seamless infinite scrolling
  const sliderCompanies = [...companies, ...companies];

  return (
  
   <section className="trusted-section">

      {/* Heading */}
      <div className="trusted-heading">
        <h2>Trusted by Companies Building at Scale</h2>
      </div>

      {/* Slider */}
      <div className="trusted-slider">

        <div className="trusted-track">

          {sliderCompanies.map((company, index) => (
            <div
              className="company-card"
              key={`${company.name}-${index}`}
            >

              {/* Company Logo */}
              <div className="company-logo">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                />
              </div>

              {/* Company Name */}
              <span className="company-name">
                {company.name}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Trusted;