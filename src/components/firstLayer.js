import React from "react";
import one from "../img/4.png";
import two from "../img/5.png";
import SecondLayer from "./secondLayer";

function FirstLayer() {
  return (
    <section className="inner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
            <h6>sed do eiusmod tempor incididunt Lorem ipsum dolor<br/>
            consectetur adipiscing</h6>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 text-center mb-2">
            <div className="bg-white py-5 px-3 round">
              <img src={one} alt="" className="img-fluid"/>
              <h4 className="brand-color fs-1 fw-bolder">01</h4>
              <h5>Total Investment</h5>
            </div>
          </div>
          <div className="col-md-3 text-center mb-2">
            <div className="bg-white py-5 px-3 round">
              <img src={two} alt="" className="img-fluid"/>
              <h4 className="brand-color fs-1 fw-bolder">N10,000</h4>
              <h5>Monthly Payout</h5>
            </div>
          </div>
        </div>
      </div>
      <SecondLayer/>
    </section>
  )
}

export default FirstLayer;