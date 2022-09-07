import React from "react";
import one from "../img/carousel-investment.png";
import two from "../img/carousel-small.png";
import three from "../img/web.png";
import four from "../img/education.png";
import five from "../img/passport.png";
import six from "../img/japa.png";

function Carousel() {
  return (
    <section className="carousel-section">
      <div id="carouselExampleControls" className="carousel slide desktop" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <img src={one} alt="" className="img-fluid" />
                </div>
                <div className="col-md-5 investment">
                  <h2 className="mb-4">Investment</h2>
                  <h5 className="mb-4 desktop">Reap enticing investment rewards! Be confident<br/>in your investment because of the security we<br/>provide you. </h5>
                  <h5 className="mb-4 mobile">Reap enticing investment rewards! Be confident in your investment because of the security we provide you. </h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-md-5 investment">
                  <h2 className="mb-4">Pay Small Small</h2>
                  <h5 className="mb-4 desktop">No matter how solid your plans are,<br/>sometimes you don t have all the money.</h5>
                  <h5 className="mb-4 mobile">No matter how solid your plans are, sometimes you don t have all the money.</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="col-md-5 mt-5">
                  <img src={two} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <img src={three} alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-md-5">
                  <h2 className="mb-4">Webinar</h2>
                  <h5 className="mb-4 desktop">There are so many immigration questions begging<br/> to be answered. So many people are confused<br/> about how to process their immigration...</h5>
                  <h5 className="mb-4 mobile">There are so many immigration questions begging to be answered. So many people are confused about how to process their immigration...</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
              <div/>  
              <div className="row mt-5 justify-content-center">
                <div className="col-md-5 investment">
                  <h2 className="mb-4">Educational</h2>
                  <h5 className="mb-4 desktop">To be honest, we’re not interested in the course<br/> you want to study. That is your decision. But we<br/> can guide you on how to make the best decision...</h5>
                  <h5 className="mb-4 mobile">To be honest, we’re not interested in the course you want to study. That is your decision. But we can guide you on how to make the best decision...</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="col-md-5">
                  <img src={four} alt="" className="img-fluid" />
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <img src={five} alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-md-5 visa">
                  <h2 className="mb-4">Visa</h2>
                  <h5 className="mb-4 desktop">Reap enticing investment rewards! Be confident<br/> in your investment because of the security we<br/>provide you.</h5>
                  <h5 className="mb-4 mobile">Reap enticing investment rewards! Be confident in your investment because of the security we provide you.</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
              </div>  
              <div className="row mt-5 justify-content-center">
                <div className="col-md-5">
                  <h2 className="mb-4">Immigration</h2>
                  <h5 className="mb-4 desktop">No matter how solid your plans are,<br/>sometimes you don’t have all the<br/>money. </h5>
                  <h5 className="mb-4 mobile">No matter how solid your plans are, sometimes you don’t have all the money. </h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="col-md-5">
                  <img src={six} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id="carouselExampleControl" className="carousel slide mobile" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <img src={one} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 mt-3">
                  <h2 className="mb-4">Investment</h2>
                  <h5 className="mb-4 desktop">Reap enticing investment rewards! Be confident<br/>in your investment because of the security we<br/>provide you. </h5>
                  <h5 className="mb-4 mobile">Reap enticing investment rewards! Be confident in your investment because of the security we provide you. </h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-md-6 mb-3">
                  <h2 className="mb-4">Pay Small Small</h2>
                  <h5 className="mb-4 desktop">No matter how solid your plans are,<br/>sometimes you don t have all the money.</h5>
                  <h5 className="mb-4 mobile">No matter how solid your plans are, sometimes you don t have all the money.</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="col-md-6">
                  <img src={two} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <img src={three} alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-md-6 mt-3">
                  <h2 className="mb-4">Webinar</h2>
                  <h5 className="mb-4 desktop">There are so many immigration questions begging<br/> to be answered. So many people are confused<br/> about how to process their immigration...</h5>
                  <h5 className="mb-4 mobile">There are so many immigration questions begging to be answered. So many people are confused about how to process their immigration...</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
              <div/>  
              <div className="row mt-5 justify-content-center">
                <div className="col-md-6 mb-3">
                  <h2 className="mb-4">Educational</h2>
                  <h5 className="mb-4 desktop">To be honest, we’re not interested in the course<br/> you want to study. That is your decision. But we<br/> can guide you on how to make the best decision...</h5>
                  <h5 className="mb-4 mobile">To be honest, we’re not interested in the course you want to study. That is your decision. But we can guide you on how to make the best decision...</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="col-md-6">
                  <img src={four} alt="" className="img-fluid" />
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <img src={five} alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-md-6 mt-3">
                  <h2 className="mb-4">Visa</h2>
                  <h5 className="mb-4 desktop">Reap enticing investment rewards! Be confident<br/> in your investment because of the security we<br/>provide you.</h5>
                  <h5 className="mb-4 mobile">Reap enticing investment rewards! Be confident in your investment because of the security we provide you.</h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
              </div>  
              <div className="row mt-5 justify-content-center">
                <div className="col-md-6 mb-3">
                  <h2 className="mb-4">Immigration</h2>
                  <h5 className="mb-4 desktop">No matter how solid your plans are,<br/>sometimes you don’t have all the<br/>money. </h5>
                  <h5 className="mb-4 mobile">No matter how solid your plans are, sometimes you don’t have all the money. </h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="col-md-6">
                  <img src={six} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControl" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControl" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </section>
  )
}

export default Carousel;