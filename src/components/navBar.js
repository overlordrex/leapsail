/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import ng from "../img/ng.png";
import ballon from "../img/baloon.png";
import customer from "../img/customer.png";
import success from "../img/success.png";
import investment from "../img/inv.png";
import visa from "../img/vis.png";
import ticketing from "../img/ticket.png";
import tours from "../img/tourss.png";
import hotel from "../img/reserve.png";
function Header() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
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
                <li className="nav-item dropdown">
                  <Link className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" to="/">Why Leapsail</Link>
                  <div className="dropdown-menu dropdown-large">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-6 col-12 left-menu">
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={ballon} alt="" className='img-fluid'/> </div>
                          <div className='p-2'>
                            <h6>Why Choose Leapsail</h6>
                            <p>Over 8,000 Users trust Lit. Here's why.</p>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={success} alt="" className='img-fluid' width={112}/> </div>
                          <div className='p-2'>
                            <h6>Success rates</h6>
                            <p>Get the best transactions success rates in the industry.</p>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={customer} alt="" className='img-fluid' width={100}/> </div>
                          <div className='p-2'>
                            <h6>Customer</h6>
                            <p>See Lit's checkout form and Dashboard in action.</p>
                          </div>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-12 right-menu">
                        <div className="mb-3">
                          <div className='p-2'>
                            <h6>YOUR GROWTH STAGE</h6>
                            <p>For Enterpreneurs<br/>For Corprates<br/>For Global Brands</p>
                          </div>
                        </div> 
                        <div className="mb-3">
                          <div className='p-2'>
                            <h6>YOUR BUSINESS TYPE</h6>
                            <p>For Bloggers<br/>For Ticketers<br/>For Global Brands</p>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                  <div className="dropdown-menu dropdown-large">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-6 col-12 left-menu">
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={investment} alt="" className='img-fluid'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Investment</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={visa} alt="" className='img-fluid' /> </div>
                          <div className='p-2 mt-2'>
                            <h6>Visa</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={ticketing} alt="" className='img-fluid'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Ticketing</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={hotel} alt="" className='img-fluid'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Hotel Reservation</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={tours} alt="" className='img-fluid'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Tours</h6>
                          </div>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-12 right-menu">
                        <div className="mb-3">
                          <div className='p-2'>
                            <h6>YOUR GROWTH STAGE</h6>
                            <p>For Enterpreneurs<br/>For Corprates<br/>For Global Brands</p>
                          </div>
                        </div> 
                        <div className="mb-3">
                          <div className='p-2'>
                            <h6>YOUR BUSINESS TYPE</h6>
                            <p>For Bloggers<br/>For Ticketers<br/>For Global Brands</p>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
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
                  <a className='btn brand-bg text-white px-4 fs-6 rounded-pill' href="/">Create Account</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/"><img src={ng} alt="" className='img-fluid' width={28} /></Link>
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