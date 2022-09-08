import React from "react";
import support from "../img//support.png";

function Support() {
  return (
    <section className="support-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <img src={support} alt="" className="img-fluid" />
          </div>
          <div className="col-md-5 twenty-four">
            <h2 className="mb-4">24/7 customer support</h2>
            <h6>Our team is here to give you personalized support within the 
            hour - available 24/7. Join daily live webinars, watch our 
            tutorials, or browse through our knowledge base</h6>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Support;