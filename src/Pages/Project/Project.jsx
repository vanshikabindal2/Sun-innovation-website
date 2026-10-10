
// import React from "react";
// import "./Project.css";
// import project from "../../assets/project.png";
// import P1 from "../../assets/P1.png";
// import p2 from "../../assets/p2.png";
// import p3 from "../../assets/p3.png";
// import p4 from "../../assets/p4.png";
// import p5 from "../../assets/p5.png";
// import p6 from "../../assets/p6.png";
// import p7 from "../../assets/p7.png";
// import p8 from "../../assets/p8.png";
// import p9 from "../../assets/p9.png";
// import p10 from "../../assets/p10.png";
// import p11 from "../../assets/p11.png";
// import p12 from "../../assets/p12.png";

// const projects = [
//   {
//     image: P1,
//   },
//   {
//     image: p2,
//   },
//   {
//     image: p3,
//   },
//   {
//     image: p4,
//   },
//   {
//     image: p5,
//     name: "Education Platform",
//   },
//   {
//     image: p6,
//     name: "Portfolio Website",
//   },
//   {
//     image: p7,
//     name: "Authentication Dashboard",
//   },
//   {
//     image: p8,
//     name: "AI Chatbot",
//   },
//   {
//     image: p9,
//     name: "Logistics Website",
//   },
//   {
//     image: p10,
//     name: "Fashion Website",
//   },
//    {
//     image: p11,
//     name: "Business Website",
//   },
//   {
//     image: p12,
//     name: "Business Website",
//   },
// ];

// const Project = () => {
//   return (
//     <div className="projects-page ">

//       {/* ================= BANNER ================= */}

//       <section className="projects-banner">

//         <div className="projects-banner-content">

//           <span className="projects-banner-small">
//             OUR PORTFOLIO
//           </span>

//           <h1>Our Projects</h1>

//           <p>
//             Explore our latest creative and digital work
//           </p>

//         </div>

//       </section>


//       {/* ================= PROJECT SECTION ================= */}

//       <section className="projects-section">

//         <div className="projects-heading">

//           <div className="projects-label">
//             <span></span>
//             OUR WORK
//           </div>

//           <h2>
//             Projects We Are{" "}
//             <strong>Proud Of</strong>
//           </h2>

//           <p>
//             A collection of websites, applications and digital
//             experiences crafted with creativity and modern technology.
//           </p>

//         </div>


//         {/* ================= PROJECT GRID ================= */}

//         <div className="projects-grid">

//           {projects.map((project, index) => (

//             <div
//               className="project-card"
//               key={index}
//             >

//               <div className="project-image">

//                 <img
//                   src={project.image}
//                   alt={project.name}
//                 />

//                 <div className="project-number">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//               </div>


           

//             </div>

//           ))}

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Project;
import React from "react";
import "./Project.css";

import P1 from "../../assets/P1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import p11 from "../../assets/p11.png";
import p12 from "../../assets/p12.png";


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    image: P1,
    name: "Packers & Movers",
  },
  {
    image: p2,
    name: "Green Tech – Green Wall Showcase",
  },
  {
    image: p3,
    name: "Hotel Website",
  },
  {
    image: p4,
    name: "Pet Website",
  },
  {
    image: p5,
    name: "Cricket Website",
  },
  {
    image: p6,
    name: "CISO Website",
  },
  {
    image: p7,
    name: "Travel website",
  },
  {
    image: p8,
    name: "Auxai",
  },
  {
    image: p9,
    name: "CCi Website",
  },
  {
    image: p10,
    name: "The Epopee India",
  },
  {
    image: p11,
    name: "D square Construction",
  },
  {
    image: p12,
    name: "Yashobhoomi / India International (IICC)",
  },
];


const Project = () => {
  return (
    <div className="projects-page">

      {/* =====================================================
          PROJECT BANNER
      ===================================================== */}

      <section className="projects-banner">

        <div className="projects-banner-overlay"></div>

        <div className="projects-banner-content">

          <span className="projects-banner-small">
            OUR PORTFOLIO
          </span>

          <h1>Our Projects</h1>

          <p>
            Explore our latest creative and digital work
          </p>

        </div>

      </section>


      {/* =====================================================
          PROJECT SECTION
      ===================================================== */}

      <section className="projects-section">

        {/* ================= SECTION HEADING ================= */}

        <div className="projects-heading">

          <div className="projects-label">
            <span></span>
            OUR WORK
          </div>

          <h2>
            Projects We Are{" "}
            <strong>Proud Of</strong>
          </h2>

          <p>
            A collection of websites, applications and digital
            experiences crafted with creativity and modern technology.
          </p>

        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={index}
            >

              <div className="project-image">

                {/* Project Image */}

                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />


                {/* Image Overlay */}

                <div className="project-overlay"></div>


                {/* Project Number */}

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* Project Title */}

                <div className="project-title">

                  <span>
                    {project.name}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
};


export default Project;