import React from "react";
import FirstLayer from "../components/firstLayer";
import Footer from "../components/footer";
import Header from "../components/navBar";
import ThirdLayer from "../components/thirdLayer";
// import SecondLayer from "../components/secondLayer";

function InvestPage() {
  return (
    <section style={{background: "#E5E5E5"}}>
      <Header/>
      <FirstLayer/>
      {/* <SecondLayer/> */}
      <ThirdLayer/>
      <Footer/>
    </section>
  )
}

export default InvestPage;