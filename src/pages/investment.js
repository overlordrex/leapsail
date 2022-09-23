import React from "react";
import "../css/Investment.css";
import Header from "../components/navBar";
import InvestmentHero from "../components/investmentHero";
import Estimator from "../components/estimator";
import Footer from '../components/footer';
import HowItWork from "../components/howIt";
import Reward from "../components/rewarding";

function Investment () {
  return (
    <div>
      <Header/>
      <InvestmentHero/>
      <Estimator/>
      <HowItWork/>
      <Reward/>
      <Footer/>
    </div>
  )
}

export default Investment;