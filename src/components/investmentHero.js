import React from "react";
import { Link } from "react-router-dom";

function InvestmentHero () {
  return (
    <section className="investmentbanner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 left-invest">
            <h2 className="mb-5">Your profits can fit<br/>perfectly into your<br/>daily routine.</h2>
            <Link className='btn bg-white text-white px-5 py-3 rounded-pill brand-bg brand-color fs-6' to="/invest">Make Investment</Link>
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentHero;