

import React, { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaLaptopCode,
  FaShoppingCart,
} from "react-icons/fa";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Business Owner",
    service: "Web Development",
    icon: <FaCode />,
    color: "blue",
    avatar: "AM",
    review:
      "The website looks modern, professional and works perfectly on all devices. The team understood our requirements and delivered beyond our expectations.",
  },
  {
    name: "Neha Sharma",
    role: "Founder",
    service: "App Development",
    icon: <FaMobileAlt />,
    color: "pink",
    avatar: "NS",
    review:
      "The app development process was smooth and the final product is exactly what we needed. The team was responsive and very professional.",
  },
  {
    name: "Riya Kapoor",
    role: "Small Business Owner",
    service: "Graphic Design",
    icon: <FaPaintBrush />,
    color: "orange",
    avatar: "RK",
    review:
      "Creative designs, quick response and excellent attention to detail. They truly understood our brand and brought our ideas to life beautifully.",
  },
  {
    name: "Karan Verma",
    role: "E-commerce Store Owner",
    service: "SEO",
    icon: <FaSearch />,
    color: "green",
    avatar: "KV",
    review:
      "Our website visibility improved significantly within a few months. The SEO work was handled professionally and delivered real results.",
  },
  {
    name: "Ananya Gupta",
    role: "Marketing Manager",
    service: "Digital Marketing",
    icon: <FaBullhorn />,
    color: "purple",
    avatar: "AG",
    review:
      "Great communication and a clear digital marketing strategy. We saw real growth in our online presence and customer engagement.",
  },
  {
    name: "Vikram Singh",
    role: "Product Manager",
    service: "Software Development",
    icon: <FaLaptopCode />,
    color: "cyan",
    avatar: "VS",
    review:
      "They built a custom software solution for our business that is reliable, scalable and easy to manage. Highly recommended.",
  },
  {
    name: "Pooja Verma",
    role: "Online Store Owner",
    service: "E-commerce",
    icon: <FaShoppingCart />,
    color: "violet",
    avatar: "PV",
    review:
      "Our online store is beautiful, fast and user-friendly. The team handled everything from design to deployment professionally.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  const maxIndex = Math.max(
    0,
    testimonials.length - cardsPerView
  );

  /* ========================================
     RESPONSIVE CARDS
  ======================================== */

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 700) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1100) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener(
      "resize",
      updateCardsPerView
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateCardsPerView
      );
    };
  }, []);


  /* ========================================
     RESET INDEX ON RESPONSIVE CHANGE
  ======================================== */

  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, maxIndex)
    );
  }, [maxIndex]);


  /* ========================================
     AUTO SLIDER
  ======================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex]);


  /* ========================================
     NEXT
  ======================================== */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };


  /* ========================================
     PREVIOUS
  ======================================== */

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };


  /* ========================================
     CALCULATE SLIDE POSITION
  ======================================== */

  const getTranslateX = () => {
    if (!sliderRef.current || !trackRef.current) {
      return 0;
    }

    const card = trackRef.current.querySelector(
      ".testimonial-card"
    );

    if (!card) {
      return 0;
    }

    const cardWidth = card.offsetWidth;

    const trackStyle = window.getComputedStyle(
      trackRef.current
    );

    const gap = parseFloat(trackStyle.gap) || 0;

    return currentIndex * (cardWidth + gap);
  };


  const translateX = getTranslateX();


  return (
    <section className="testimonial-section">

      {/* Background Shapes */}

      <div className="testimonial-shape shape-one"></div>
      <div className="testimonial-shape shape-two"></div>


      <div className="testimonial-container">

        {/* ========================================
            HEADING
        ======================================== */}

        <div className="testimonial-heading">

          <div className="testimonial-small-title">
            <span>👥</span>
            Our Happy Clients
          </div>

          <h2>
            What Our Clients Say
            <br />
            <span>About Our Work</span>
          </h2>

          <p>
            We are proud to work with amazing clients who
            trust us with their ideas. Here's what they have
            to say about their experience with our services.
          </p>

        </div>


        {/* ========================================
            SLIDER
        ======================================== */}

        <div className="testimonial-slider-wrapper">

          {/* Previous */}

          <button
            className="testimonial-arrow testimonial-prev"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>


          {/* Slider */}

          <div
            className="testimonial-slider"
            ref={sliderRef}
          >

            <div
              className="testimonial-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${translateX}px)`,
              }}
            >

              {testimonials.map((item, index) => (

                <div
                  className="testimonial-card"
                  key={index}
                >

                  {/* Service */}

                  <div
                    className={`service-badge ${item.color}`}
                  >
                    <span>{item.icon}</span>
                    {item.service}
                  </div>


                  {/* Stars */}

                  <div className="testimonial-stars">

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>


                  {/* Quote */}

                  <div className="quote-mark">
                    “
                  </div>


                  {/* Review */}

                  <p className="testimonial-review">
                    {item.review}
                  </p>


                  {/* Client */}

                  <div className="testimonial-client">

                    <div
                      className={`client-avatar ${item.color}`}
                    >
                      {item.avatar}
                    </div>

                    <div>

                      <h4>
                        {item.name}
                      </h4>

                      <span>
                        {item.role}
                      </span>

                    </div>

                  </div>


                  {/* Bottom Service */}

                  <div className="testimonial-bottom">
                    {item.service}
                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Next */}

          <button
            className="testimonial-arrow testimonial-next"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>

        </div>


        {/* ========================================
            DOTS
        ======================================== */}

        <div className="testimonial-dots">

          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (

            <button
              key={index}
              className={`testimonial-dot ${
                currentIndex === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCurrentIndex(index)
              }
              aria-label={`Go to slide ${
                index + 1
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonial;