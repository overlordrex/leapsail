import React from "react";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";

function Reward () {
  return (
    <section className="rewarding-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={one} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 topping">
            <h3 className="mb-3">Investment is rewarding</h3>
            <p>We offer 10% monthly returns on your investment
            and you choose for how long you want us to
            grow your money.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 topping">
            <h3 className="mb-3">It’s open to you</h3>
            <p>Investment is not a millionaires-only club. We can 
            start our own small club if you want. No matter your 
            level, you need some extra cash and we can make 
            it happen for you.</p>
          </div>
          <div className="col-md-6">
            <img src={two} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <img src={three} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 topping">
            <h3 className="mb-3">We’re always gist ready</h3>
            <p>If you want to confirm that we’re legit, just call us.
            We have faces, lol. Don’t get overwhelmed reading 
            many pages and filling countless forms. We can 
            provide all the guidance you require.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reward;