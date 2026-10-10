import React, { useEffect } from "react"
import "./Service.css";
import service from "../../assets/service.png";
import { useNavigate } from "react-router-dom";

const Service = () => {
      const navigate = useNavigate();
  
  useEffect(() => {
  const sections = document.querySelectorAll(".service-row");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  };
}, []);
  return (
    <>
      <section
        className="service-banner"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="service-overlay">
          <div className="service-content">
            <h1>Our Services</h1>
            <p>We provide innovative solutions to help your business grow.</p>
          </div>
        </div>
      </section>

        <section className="services-main">

      {/* ================= TOP INTRO ================= */}
      <div className="services-intro">
        <span className="services-tag">
          <span className="services-dot"></span>
          WHAT WE OFFER
        </span>

        <p>
          Our clients have access to a wide range of specialized digital strategy,
          <br />
          web design, web development and digital services.
        </p>
      </div>


      {/* ================= APPLICATION DEVELOPMENT ================= */}
      <div className="service-row service-row-one">

        {/* LEFT CONTENT */}
        <div className="service-contentt">
          <h2>Application Development</h2>

          <p>
            At Sun innovation , we build innovative applications that transform
            businesses using cutting-edge technology and experienced
            development teams.
          </p>

          <p>
            From mobile apps to enterprise solutions, we deliver high-quality
            applications that exceed expectations.
          </p>

          <div className="service-box">
            <h4>
              <span className="check-circle">✓</span>
              Development Services:
            </h4>

            <div className="service-list">
              <div>
                <span>✓</span> Mobile Apps
              </div>

              <div>
                <span>✓</span> Web Applications
              </div>

              <div>
                <span>✓</span> Enterprise Solutions
              </div>

              <div>
                <span>✓</span> API Integration
              </div>

              <div>
                <span>✓</span> Cloud Apps
              </div>

              <div>
                <span>✓</span> Database Solutions
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://img.magnific.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Application Development"
          />
        </div>

      </div>


      {/* ================= WEB DESIGN & DEVELOPMENT ================= */}
      <div className="service-row service-row-two">

        {/* LEFT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://img.magnific.com/premium-vector/laptop-desk-with-software-web-design-programming-creation-app-software-development-abstract-design-elements-computer-technology-screen-laptop-online-education-technology-web-design_733288-1191.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Web Design and Development"
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className="service-contentt">
          <h2>Web Design &amp; Development</h2>

          <p>
            We design and develop high-performance web solutions, blending
            creative design with robust development for secure, scalable digital
            experiences.
          </p>

          <p>
            From responsive websites to complex web apps, we optimize UX across
            devices to boost engagement and conversions.
          </p>

          <div className="service-box">
            <h4>
              <span className="check-circle">✓</span>
              What We Offer:
            </h4>

            <div className="service-list">
              <div>
                <span>✓</span> Web Designing
              </div>

              <div>
                <span>✓</span> Responsive Websites
              </div>

              <div>
                <span>✓</span> Web Development
              </div>

              <div>
                <span>✓</span> WordPress Development
              </div>

              <div>
                <span>✓</span> Custom Web Apps
              </div>

              <div>
                <span>✓</span> UI/UX Strategy
              </div>

              <div>
                <span>✓</span> CMS Development
              </div>

              <div>
                <span>✓</span> E-commerce Solutions
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    <br />
    <br/>

{/* 2 */}
        <section className="services-main">

     


      {/* ================= APPLICATION DEVELOPMENT ================= */}
      <div className="service-row service-row-one">

        {/* LEFT CONTENT */}
        <div className="service-contentt">
          <h2>Wordpress Development</h2>

          <p>
             At Sun innovation, we create professional, responsive, and
  user-friendly WordPress websites that help businesses build a
  strong online presence.
          </p>

          <p>
            From business websites and blogs to e-commerce stores, we deliver
  customized WordPress solutions with modern designs, powerful
  functionality, and seamless performance.

          </p>

          <div className="service-box">
            <h4>
              <span className="check-circle">✓</span>
              Development Services:
            </h4>
<div className="service-list">
  <div>
    <span>✓</span> WordPress Website Development
  </div>

  <div>
    <span>✓</span> Custom WordPress Theme Development
  </div>

  <div>
    <span>✓</span> WordPress Plugin Development
  </div>

  <div>
    <span>✓</span> WooCommerce Development
  </div>

  <div>
    <span>✓</span> WordPress Website Customization
  </div>

  <div>
    <span>✓</span> WordPress Maintenance & Support
  </div>
</div>
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNirCvGuC9B5PsI71DAB4mzsgiUY5V4g1wwBSCMmC3grn_Vquoi8zENwf_&s=10"
            alt="Wordpress Development"
          />
        </div>

      </div>


      {/* ================= digital marketing ================= */}
      <div className="service-row service-row-two">

        {/* LEFT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://digifame.in/wp-content/uploads/2023/12/What-is-Digital-Marketing-768x512-1.jpg"
            alt="Digital marketing"
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className="service-contentt">
          <h2>Digital Marketing</h2>

          <p>
  We create result-driven digital marketing strategies that combine SEO,
  content, social media, and data-driven insights to build strong online
  visibility and grow your brand.
</p>

<p>
  From search engine optimization to social media campaigns, we help businesses
  reach the right audience, increase engagement, generate quality leads, and
  drive measurable conversions.
</p>

          <div className="service-box">
            <h4>
              <span className="check-circle">✓</span>
              What We Offer:
            </h4>

          <div className="service-list">


  <div>
    <span>✓</span> Social Media Marketing
  </div>

  <div>
    <span>✓</span> Google Ads & PPC
  </div>

  <div>
    <span>✓</span> Content Marketing
  </div>

  <div>
    <span>✓</span> Local SEO
  </div>

  <div>
    <span>✓</span> Email Marketing
  </div>

  <div>
    <span>✓</span> Online Reputation Management
  </div>

  <div>
    <span>✓</span> Lead Generation
  </div>
</div>
          </div>
        </div>

      </div>

    </section>

    <br/>
    <br/>
     <section className="services-main">

     
{/* 4 */}

      {/* ================= APPLICATION DEVELOPMENT ================= */}
      <div className="service-row service-row-one">

        {/* LEFT CONTENT */}
        <div className="service-contentt">
          <h2>Graphic Design</h2>

         <p>
  At Sun Innovation, we transform ideas into impactful visual experiences
  through creative and professional graphic design. Our designs are crafted
  to strengthen your brand identity and leave a lasting impression.
</p>

<p>
  From logos and brand creatives to social media graphics, banners, and
  promotional materials, we create visually compelling designs that connect
  with your audience and bring your brand vision to life.
</p>

          <div className="service-box">
            <h4>
              <span className="check-circle">✓</span>
              Development Services:
            </h4>
<div className="service-list">
 <div>
  <span>✓</span> Logo & Brand Identity Design
</div>

<div>
  <span>✓</span> Social Media Graphic Design
</div>

<div>
  <span>✓</span> Banners & Poster Design
</div>

<div>
  <span>✓</span> Brochure & Flyer Design
</div>

<div>
  <span>✓</span> Business Card Design
</div>

<div>
  <span>✓</span> Marketing & Promotional Designs
</div>

<div>
  <span>✓</span> Creative Advertisement Design
</div>

<div>
  <span>✓</span> Custom Graphic Design Solutions
</div>
</div>

          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxr-TFlYjUuNAlewsY8cM2vC0ms1VWWZvAIraqdz-khcdqdzhbhabqfc6&s=10"
            alt="Graphic Design"
          />
        </div>

      </div>


      {/* ========SEO================= */}
      <div className="service-row service-row-two">

        {/* LEFT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://impulzo.com/wp-content/uploads/2025/12/SEO-.jpg"
            alt="SEO"
          />
        </div>


        {/* RIGHT CONTENT */}
        <div className="service-contentt">
          <h2>SEO</h2>

   <p>
  We create result-driven digital marketing strategies that help businesses
  build a strong online presence, reach the right audience, and grow their
  brand effectively.
</p>

<p>
  From SEO and social media marketing to content marketing and paid campaigns,
  we focus on increasing visibility, generating quality leads, boosting
  engagement, and driving measurable business growth.
</p>

          <div className="service-box">
            <h4>
              <span className="check-circle">✓</span>
              What We Offer:
            </h4>

          <div className="service-list">
  <div>
  <span>✓</span> On-Page SEO
</div>

<div>
  <span>✓</span> Off-Page SEO
</div>

<div>
  <span>✓</span> Technical SEO
</div>

<div>
  <span>✓</span> Keyword Research
</div>

<div>
  <span>✓</span> Local SEO
</div>

<div>
  <span>✓</span> SEO Content Optimization
</div>

<div>
  <span>✓</span> SEO Audit & Analysis
</div>
</div>

 
          </div>
          {/* newww */}
          
        </div>

      </div>

      <br/>
   <div className="service-row service-row-one">

        {/* LEFT CONTENT */}
        <div className="service-contentt">
          <h2>Ai Automation</h2>

         <p>
  At Sun Innovation, we simplify business processes with intelligent AI automation solutions. From automating repetitive tasks to streamlining workflows, our solutions help businesses save time, improve efficiency, and boost productivity. We turn smart ideas into automated solutions that drive growth and deliver better results.
</p>



          <div className="service-box">
            <h4>
  <span className="check-circle">✓</span>
  Automation Services:
</h4>
<div className="service-list">
  <div>
    <span>✓</span> AI Chatbot Development
  </div>

  <div>
    <span>✓</span> Business Process Automation
  </div>

  <div>
    <span>✓</span> Workflow Automation
  </div>

  <div>
    <span>✓</span> AI-Powered Customer Support
  </div>

  <div>
    <span>✓</span> Lead Generation Automation
  </div>

  <div>
    <span>✓</span> Data Entry & Processing Automation
  </div>

  <div>
    <span>✓</span> AI Integration & Smart Solutions
  </div>

  <div>
    <span>✓</span> Custom AI Automation Solutions
  </div>
</div>


          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="service-image-wrap">
          <img
            src="https://nmgprod.s3.amazonaws.com/media/file/99/d9/3b3a95fdf420077619d01ebdfdff/cover_image__oEE6I0XU__AI_support.jpeg.1600x900_q85_crop_upscale.webp"
            alt="Graphic Design"
          />
        </div>

      </div>


    </section>
    <br/>
 <section className="contact-grow-banner">
      <div className="contact-grow-overlay">
        <div className="contact-grow-content">
          
          <h2>Contact us for robust web design & development <br/>services in India
</h2>

          <p>
           As the best web design and development service provider, we guarantee the highest caliber web design service at competitive rates to support the online success of your organization. Utilize our top-notch web development services to accelerate lead conversions for your company.


          </p>

         <button
      className="contact-grow-btn"
      onClick={() => navigate("/contact")}
    >
      Contact us now!
    </button>

        </div>
      </div>
    </section>

    </>
  );
};

export default Service;