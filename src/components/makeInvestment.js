import React from "react";
import { Link } from "react-router-dom";

function MakeInvestment () {
  return (
    <section className="makeinvest">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h6 className="mb-5">Don’t wait for several months to go by without 
            increasing your income</h6>
            <Link className='btn brand-bg text-white px-5 py-3 rounded-pill' to="/invest">Make Investment</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeInvestment;