
import React from 'react';
import pic1 from '../pic1jpeg.jpeg'

export default function Header() {
  return (
    <div>
      <section Class="main-navigation">
        <div Class="nav-logo">
          <img src={pic1} className='logo' alt="logo" />
            <h3><span>E</span>voting</h3>
        </div>
        <div Class="nav-list">
            <a href="#home">Home</a>
            <a href="#profile">About</a>
            <a href="#services-section">Cnadidates</a>
            <a href="#recent-section">Result</a>
            <a href="#contact-section">Contact</a>
        </div>
        <div Class="registration-sec">
            <a href="">Sign up</a>
            <a href="">Login</a>
        </div>
    </section>

    </div>
  )
  }
