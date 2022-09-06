import React from "react";
import tour from "../img/tour.png";
import webinar from "../img/webinar.png";
import educational from "../img/educational.png";
import Finance from "../img/finance.png";
import Investment from "../img/investment.png";

function GetStarted() {
  return(
    <section className="getstarted">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="mb-2">Work in the way that works for you!</h1>
            <h6>What would you like to manage with Leapsail.com?</h6>
          </div>
        </div>
        <div className="row justify-content-center text-center products">
          <div className="col-10 col-md-10 col-xxl-9">
            <div className="d-flex flex-row mt-5">
              <img src={tour} alt="tours" title="Tours" className="img-fluid me-3" />
              <img src={webinar} alt="tours" title="Webinar" className="img-fluid me-3" />
              <img src={educational} alt="tours" title="Educational" className="img-fluid me-3" />
              <img src={Finance} alt="tours" title="Finance" className="img-fluid me-3" />
              <img src={Investment} alt="tours" title="Investment" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted;