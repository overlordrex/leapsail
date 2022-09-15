import React from "react";
import Header from "../components/headerDashboard";
import SignUp from "../components/signUp";
import "../css/Register.css";
import LoginFooter from "../components/loginFooter";

function Signup() {
  return (
    <div>
      <Header/>
      <SignUp/>
      <LoginFooter/>
    </div>
  )
}

export default Signup;