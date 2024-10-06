// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">QuizMaster</div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true}>Home</Link></li>
        <li><Link to="features" smooth={true}>Features</Link></li>
        <li><Link to="how-it-works" smooth={true}>How It Works</Link></li>
      </ul>
      <div className="auth-buttons">
        <button className="btn">Log In</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
