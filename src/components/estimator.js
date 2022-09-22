import React from "react";
import ror from "../img/ror.png";
import coin from "../img/coin.png";

function Estimator() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="estimator-form">
              <h2 className="text-center">Investment Estimator</h2>  
              <form className="mt-5">
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Investment Income</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Duration (per annum)</label>
                  <div className="d-flex flex-row mb-3 col-sm-4">
                    <div className="me-2 circle">1</div>
                    <div className="me-2 circle-two">3</div>
                    <div className="me-2 circle-three">6</div>
                    <div className="me-2 circle-four">9</div>
                  </div>
                  <div className="col-sm-4 input-group">
                    <input type="number" className="form-control" />
                    <button className="btn btn-success border-rad" type="button" id="button-addon2">Go</button>
                  </div>
                </div>
                <div className="d-flex flex-row mb-3">
                  <div className="me-2"><p className="col-form-label ror">Positive ROR</p></div>
                  <div className=""><img src={ror} alt="" className="img-fluid"/></div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Monthly Payout</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Investment Income</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="text-center bg-brand estimate">
                 <h4 className="text-white">Estimate</h4> 
                </div>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label">Payout</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="col-md-5">
            <div className="text-center left-estimator">
              <img src={coin} alt="" className="img-fluid" />
              <h6 className="mt-4">Your investment journey is 
              only a few clicks away.</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Estimator