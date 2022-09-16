import React from "react";


function SignUp() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center mb-5">Welcome! Create your account.</h4>
                <form className=''>
                  <div className="row">
                    <div className="col mb-4">
                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" required/>
                    </div>
                    <div className="col mb-4">
                      <input className="form-control" type="text" maxLength="20" placeholder="Last Name" required/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-3">
                      <select className="form-select">
                        <option selected>Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                    <div className="col mb-3">
                      <input className="form-control" type="date" min="1900-08-01" max="2004-01-01" placeholder="Age" required/>
                      <small className="fmt">Age: 18 &gt;</small>
                    </div>
                  </div>
                  <div className="mb-4">
                    <input className="form-control" type="tel" maxLength="14" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}" required/>
                    <small className="fmt">Format: 080-23-456-789</small>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn brand-bg text-white px-4 py-3 fs-6 rounded-pill" style={{width: "100%"}}>Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;