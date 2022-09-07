import React from "react";
import steps from "../img/steps.png";

function Steppers() {
  return(
    <section className="steps">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src={steps} alt="" className="img-fluid" style={{maxWidth :"94%"}}/>
          </div>
          <div className="col-md-6 steppings">
            <h2>3 steps to get you started</h2>
            <div className="stepper d-flex flex-column mt-5 ml-2">
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="digits py-2 px-3 mb-1">01</div>
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h5 className="fw-bold">Create an account</h5>
                  <p className="lead pb-5">Signup for an account with your name, best email address and phone number.</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="digits py-2 px-3 mb-1">02</div>
                  <div className="line h-100"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h5 className="fw-bold">Book a slot</h5>
                  <p className="lead pb-5">You can speak with us or visit our office on <br/>appointment</p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="digits py-2 px-3 mb-1">03</div>
                  <div className="line h-100 d-none"></div>
                </div>
                <div style={{marginLeft: "40px", marginTop: "5px"}}>
                  <h5 className="fw-bold">Grow with Leapsail</h5>
                  <p className="lead pb-5">Watch your investment grow, realise your dreams and begin your new life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steppers;