
import React from 'react';
import pic1 from '../pic1jpeg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    // <div>
    //   <section Class="main-navigation">
    //     <div Class="nav-logo">
    //       <img src={pic1} className='logo' alt="logo" />
    //         <h3><span>E</span>voting</h3>
    //     </div>

    //     <div Class="nav-list">
    //         <a href="/home">Home</a>
    //         <a href="/profile">About</a>
    //         <a href="/services-section">Candidates</a>
    //         <a href="/recent-section">Result</a>
    //         <a href="/contact-section">Contact</a>
    //         {/* <input class="form-control me-2 w-50 h-25 p-3 p-3" id='sb' type="search" placeholder="Search" aria-label="Search"/>
    //         <button class="btn btn-outline-success w-25" type="submit">Search</button> */}
    //         </div>
    //         <div class="search-bar">
    //         <input class="form-control me-2 w-50 h-25 p-3 p-3" id='sb' type="search" placeholder="Search" aria-label="Search"/>
    //         <button class="btn btn-outline-light " type="submit">Search</button>
    //     </div>
    //     <div Class="registration-sec">
    //     <FontAwesomeIcon icon={faUserPlus} size="lg" style={{color: "/f5f5f5",}} />
    //         {/* <a href="">Sign up</a> */}
    //         <a href="">Login</a>
    //     </div>
    // </section>

    // </div>
    //--------------------------------------------------------------------------------------------
    // <div>
    // <div class="px-3 py-2 bg-dark text-white ">
    //   <div class="container">
    //     <div class="d-flex z-1 flex-wrap align-items-center justify-content-center justify-content-lg-start">
    //       <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
    //       <img src={pic1} className='logo' alt="logo" /> <h4 class="my-2 mx-2">Evoting</h4>

    //       </a>

    //       <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
    //         <li>
    //           <a href="/" class="nav-link text-white">
    //             <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" class="nav-link text-white">
    //             <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" class="nav-link text-white">
    //             <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
    //             Candidate
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" class="nav-link text-white">
    //             <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
    //             Result
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/" class="nav-link text-white">
    //             <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    // <div class="px-3 py-2 border-bottom mb-3">
    //   <div class="container d-flex flex-wrap justify-content-center">
    //     <form class="col-12 d-flex col-lg-auto mb-2 mb-lg-0 me-lg-auto">

    //       <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
    //       <button type='button' className="btn btn-outline-dark mx-2">search</button>
    //     </form>

    //     <div class="text-end">
    //       <button type="button" class="btn btn-light text-dark me-2">Login</button>
    //       <button type="button" class="btn btn-primary">Sign-up</button>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div>
      <div style={{ backgroundColor: "#235733", zIndex: "3"}}>
        <header class="py-2 mb-2 border-bottom ">
          <div class="container d-flex flex-wrap justify-content-center ">
            <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
              <img src={pic1} className='logo' alt="logo" />
              {/* <h4 class="my-2 mx-2">Evoting</h4> */}
              <span class="fs-4 mx-2">Evoting</span>
            </a>
            <form class="col-12 d-flex col-lg-auto mb-3 mb-lg-0" role="search">

              <input type="search" class="form-control h-75 my-2" placeholder="Search..." aria-label="Search" />
              <button type='button' className="btn btn-outline-light h-75 my-2 mx-2">search</button>
            </form>
          </div>
        </header>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <nav class="border-bottom">
          <div class="container d-flex flex-wrap">
            <ul class="nav me-auto">
              <li class="nav-item"><a href="/" class="nav-link bi d-block mx-auto mb-1 text-dark px-2 active" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="/" class="nav-link bi d-block mx-auto mb-1 text-dark px-2 active">About</a></li>
              <li class="nav-item"><a href="/" class="nav-link bi d-block mx-auto mb-1 text-dark px-2 active">Candidates</a></li>
              <li class="nav-item"><a href="/" class="nav-link bi d-block mx-auto mb-1 text-dark px-2 active">Result</a></li>
              <li class="nav-item"><Link to="/contactinfo" class="nav-link bi d-block mx-auto mb-1 text-dark px-2 active">Contact</Link></li>
            </ul>
            
            <div class="text-end">
              <Link to="/login">
              <button type="button" class="btn btn-outline-dark me-2">Login</button>
              </Link>
              <Link to="/sigup">
              <button type="button" class="btn btn-dark">  Sign-up</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
