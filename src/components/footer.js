import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import google from "../img/google.png";
import apple from "../img/apple.png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-5">
             <img src={logo} alt="" className="img-fluid"/>
             <div className="py-5"><small className="footer-text">All Rights Reserved © Leapsail.com</small></div>
             
             <h6 className="fw-bold">Address:</h6>
             <small className="footer-text">23, Ezekiel street, Off Toyin street, Ikeja</small>
              <div className="mt-5">
                <Link to="/"><img src={google} alt="" title="Download on Playstore" className="img-fluid" width={120} /></Link>
                <Link to="/"><img src={apple} alt="" title="Download on Appstore" className="img-fluid me-3" width={120} /></Link>
              </div>
            </div>
            <div className="col-sm-2 mb-3">
              <h3>Product</h3>
              <ul className="list-unstyled links">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/">Pricing</Link></li>
                <li><Link to="/">Partners</Link></li>
                <li><Link to="/">Affiliates</Link></li>
                <li><Link to="/">Students</Link></li>
              </ul>
            </div>
            <div className="col-sm-2 mb-3">
              <h3>Team</h3>
              <ul className="list-unstyled links">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Find a Partner</Link></li>
                <li><Link to="/">In the News</Link></li>
              </ul>
            </div>
            <div className="col-sm-2 mb-3">
              <h3>Resources</h3>
              <ul className="list-unstyled links">
                <li><Link to="/">Knowledge Base</Link></li>
                <li><Link to="/">Guides</Link></li>
                <li><Link to="/">Daily Webinars</Link></li>
                <li><Link to="/">Community</Link></li>
                <li><Link to="/">Customer Stores</Link></li>
                <li><Link to="/">Video Tutorials</Link></li>
                <li><Link to="/">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row lower">
          <div className="col-md-9 mb-3">
            <div className="">
              <ul id="menu" className="list-unstyled">
                <li>Status</li>
                <li>Security</li>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
                <li>Accessibility Statement</li>
                <li><i className="bi bi-globe"></i> English</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mb-3">
           <ul className="social list-unstyled">
              <li><i className="bi bi-instagram icon-border fs-5"></i></li>
              <li><i className="bi bi-twitter icon-border fs-5"></i></li>
              <li><i className="bi bi-linkedin icon-border fs-5"></i></li>
              <li><i className="bi bi-facebook icon-border fs-5"></i></li>
              <li><i className="bi bi-youtube icon-border fs-5"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;