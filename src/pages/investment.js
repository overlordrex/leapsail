import React from "react";
import "../css/Investment.css";
import Header from "../components/navBar";
import InvestmentHero from "../components/investmentHero";
import Estimator from "../components/estimator";
import Footer from '../components/footer';

function Investment () {
  return (
    <div>
      <Header/>
      <InvestmentHero/>
      <Estimator/>
      <Footer/>
    </div>
  )
}

export default Investment;