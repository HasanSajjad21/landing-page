// src/components/Features.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="feature-items">
        <div className="feature-item" data-aos="fade-right">
          <h3>Feature 1</h3>
          <p>Exciting multiplayer quiz games.</p>
        </div>
        <div className="feature-item" data-aos="fade-left">
          <h3>Feature 2</h3>
          <p>AI-powered question generation.</p>
        </div>
        <div className="feature-item" data-aos="fade-right">
          <h3>Feature 3</h3>
          <p>Real-time leaderboards and scoring.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
