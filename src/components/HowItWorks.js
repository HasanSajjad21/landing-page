// src/components/HowItWorks.js
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step" data-aos="fade-up">
          <h3>Step 1</h3>
          <p>Sign up and create your quiz or join a multiplayer session.</p>
        </div>
        <div className="step" data-aos="fade-up">
          <h3>Step 2</h3>
          <p>Answer questions and compete with friends in real-time.</p>
        </div>
        <div className="step" data-aos="fade-up">
          <h3>Step 3</h3>
          <p>Check the leaderboard and track your performance.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
