import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const stats = [
  {
    number: 10,
    suffix: "+",
    title: "Years of Excellence",
    description: "Industry leadership since 2016",
  },
  {
    number: 250,
    suffix: "+",
    title: "Happy Clients",
    description: "Trusted by businesses worldwide",
  },
  {
    number: 250,
    suffix: "+",
    title: "Projects Delivered",
    description: "Successful implementations",
  },
];

const Stats = () => {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            {...stat}
            started={started}
          />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({
  number,
  suffix,
  title,
  description,
  started,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth counting
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentNumber = Math.floor(easeOut * number);

      setCount(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, [started, number]);

  return (
    <div className="stat-item">

      <div className="stat-number">
        {count}
        <span>{suffix}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default Stats;