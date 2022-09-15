/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../img/logo-color.png";

function LoginFooter() {
  return (
    <section className="login-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-5">
            <ul className="social list-unstyled">
              <li><a href="/"><i className="bi bi-instagram icon-border-white text-white fs-5"></i></a></li>
              <li><a href="/"><i className="bi bi-twitter icon-border-white text-white fs-5"></i></a></li>
              <li><a href="/"><i className="bi bi-linkedin icon-border-white text-white fs-5"></i></a></li>
              <li><a href="/"><i className="bi bi-facebook icon-border-white text-white fs-5"></i></a></li>
              <li><a href="/"><i className="bi bi-youtube icon-border-white text-white fs-5"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-5">
            <p className="text-white"><a href="#">Terms & Condition </a>| <a href="#">Careers </a>| <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginFooter;