// src/components/Hero.js
import React from 'react';
import heroAnimation from './hero-animation.gif'; // Assuming you have an animation image or gif

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to QuizMaster</h1>
        <p>Your ultimate platform to test your knowledge and compete with friends.</p>
        <button className="btn cta">Join Now</button>
      </div>
      <div className="hero-animation">
        <img src={heroAnimation} alt="Hero Animation" />
      </div>
    </section>
  );
};

export default Hero;
