import React from "react";
import ForgotForm from "../components/forgotForm";
import Header from "../components/headerDashboard";
import LoginFooter from "../components/loginFooter";
import "../css/Login.css";

function ForgotPassword() {
  return (
    <div>
      <Header/>
      <ForgotForm/>
      <LoginFooter/>
    </div>
  )
}


export default ForgotPassword;