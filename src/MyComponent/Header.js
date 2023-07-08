
import React from 'react';
import pic1 from '../pic1jpeg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons'
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
            <a href="#services-section">Candidates</a>
            <a href="#recent-section">Result</a>
            <a href="#contact-section">Contact</a>
            {/* <input class="form-control me-2 w-50 h-25 p-3 p-3" id='sb' type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success w-25" type="submit">Search</button> */}
            </div>
            <div class="search-bar">
            <input class="form-control me-2 w-50 h-25 p-3 p-3" id='sb' type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light " type="submit">Search</button>
        </div>
        <div Class="registration-sec">
        <FontAwesomeIcon icon={faUserPlus} size="lg" style={{color: "#f5f5f5",}} />
            {/* <a href="">Sign up</a> */}
            <a href="">Login</a>
        </div>
    </section>

    </div>
  )
  }
