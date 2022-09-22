import React from "react";
import "../css/Investment.css";
import Header from "../components/navBar";
import InvestmentHero from "../components/investmentHero";
import Estimator from "../components/estimator";
import Footer from '../components/footer';
import HowItWork from "../components/howIt";

function Investment () {
  return (
    <div>
      <Header/>
      <InvestmentHero/>
      <Estimator/>
      <HowItWork/>
      <Footer/>
    </div>
  )
}

export default Investment;