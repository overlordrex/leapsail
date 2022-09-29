import React from "react";
import FirstLayer from "../components/firstLayer";
import Header from "../components/navBar";
// import SecondLayer from "../components/secondLayer";

function InvestPage() {
  return (
    <section style={{background: "#E5E5E5"}}>
      <Header/>
      <FirstLayer/>
      {/* <SecondLayer/> */}
    </section>
  )
}

export default InvestPage;