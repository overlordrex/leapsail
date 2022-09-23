import React from "react";
import "../css/Investment.css";
import Header from "../components/navBar";
import InvestmentHero from "../components/investmentHero";
import Estimator from "../components/estimator";
import Footer from '../components/footer';
import HowItWork from "../components/howIt";
import Reward from "../components/rewarding";
import MakeInvestment from "../components/makeInvestment";
import Demystify from "../components/demystify";
import Yield from "../components/yield";

function Investment () {
  return (
    <div>
      <Header/>
      <InvestmentHero/>
      <Estimator/>
      <HowItWork/>
      <Reward/>
      <MakeInvestment/>
      <Demystify/>
      <Yield/>
      <Footer/>
    </div>
  )
}

export default Investment;