import React from 'react';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
function Header() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className='container'>
          <Link className='navbar-brand' to="/">
            <img src={logo} alt="" className='logo img-fluid' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className='me-auto'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Why Leapsail</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Learn</Link>
                </li>
              </ul>
            </div>
            <div className='ml-auto'>
              <ul className='navbar-nav'>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Support</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Login</Link>
                </li>
                <li className='nav-item'>
                  <a className='btn btn-warning text-white px-4 rounded-pill' href="/">Create Account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
    
  );
}
export default Header;