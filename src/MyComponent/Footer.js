import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook } from '@fortawesome/free-regular-svg-icons';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div style={{ backgroundColor: "lightyellow"}}>
      <div class="container  " >
        <footer class="py-5 mx-0">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-body-secondary">Home</Link></li>
                <li class="nav-item mb-2"><Link to="/about" class="nav-link p-0 text-body-secondary">About</Link></li>
                <li class="nav-item mb-2"><Link to="/candidate" class="nav-link p-0 text-body-secondary">Candidates</Link></li>
                <li class="nav-item mb-2"><Link to="/result" class="nav-link p-0 text-body-secondary">Result</Link></li>
                <li class="nav-item mb-2"><Link to="/contactinfo" class="nav-link p-0 text-body-secondary">Contact</Link></li>
                
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link to="/" class="nav-link p-0 text-body-secondary">Home</Link></li>
                <li class="nav-item mb-2"><Link to="/about" class="nav-link p-0 text-body-secondary">About</Link></li>
                <li class="nav-item mb-2"><Link to="/candidate" class="nav-link p-0 text-body-secondary">Candidates</Link></li>
                <li class="nav-item mb-2"><Link to="/result" class="nav-link p-0 text-body-secondary">Result</Link></li>
                <li class="nav-item mb-2"><Link to="/contactinfo" class="nav-link p-0 text-body-secondary">Contact</Link></li>
              </ul>
            </div>

            {/* <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div> */}

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                  <button class="btn btn-danger px-2" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            
            <ul class="list-unstyled d-flex">
            
              <li class="ms-3"><Link to="/"  class="link-body-emphasis"><svg class="bi" width="24" height="24"></svg>Facebook</Link></li>
              <li class="ms-3"><Link to="/"  class="link-body-emphasis"><svg class="bi" width="24" height="24"></svg>Twitter</Link></li>
              <li class="ms-3"><Link to="/"  class="link-body-emphasis"><svg class="bi" width="24" height="24"></svg>Instagram</Link></li>
            </ul>
            <p class="float-end"><a href="#"><FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" /></a></p>
            
            

          </div>
        </footer>
      </div>
    </div>
  )
}
