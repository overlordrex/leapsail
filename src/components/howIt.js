import React from "react";
import signup from "../img/signup.png";
import process from "../img/process.png";
import account from "../img/setup.png";

function HowItWork(params) {
  return (
    <section className="how-it-work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">How it works</h2>
          </div>
        </div>
        <div className="row works text-center">
          <div className="col-md-4 mb-3 px-5">
            <div className="liner"><img src={signup} alt="" className="img-fluid"/></div>
            <h6 className="">Sign up</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
          <div className="col-md-4 mb-3 px-5">
            <div className="liner"><img src={process} alt="" className="img-fluid"/></div>
            <h6 className="">Investment Process</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
          <div className="col-md-4 mb-3 px-5">
            <div><img src={account} alt="" className="img-fluid"/></div>
            <h6 className="">Account Setup</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork;