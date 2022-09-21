import React from "react";

function Estimator() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
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
                  <div className="d-flex flex-row mb-3 col-sm-5">
                    <div className="me-2 circle">1</div>
                    <div className="me-2 circle-two">3</div>
                    <div className="me-2 circle-three">6</div>
                    <div className="me-2 circle-four">9</div>
                  </div>
                  <div className="col-sm-3">
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Estimator