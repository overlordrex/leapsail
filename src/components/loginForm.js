import React from "react";

function LoginForm() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="row">
                <div className="col-md-6 left-form">
                  <h4>Hey Dear!</h4>
                </div>
                <div className="col-md-6 right-form">
                  <h5 className="mb-4">Kindly login to your account</h5>
                  <form className='row'>
                    <div className="mb-4">
                      <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter email address" required/>
                    </div>
                    <div className="mb-4">
                      <input id="password" className="form-control" type="password" maxLength="20" placeholder="Enter password" required/>
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn brand-bg text-white px-4 py-3 fs-6 rounded-pill" style={{width: "100%"}}>Log in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm;