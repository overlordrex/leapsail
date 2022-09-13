import React from "react";
import '../css/Login.css';
import Header from "../components/headerDashboard";
import LoginForm from "../components/loginForm";
import LoginFooter from "../components/loginFooter";

function Login() {
  return (
    <div>
      <Header/>
      <LoginForm/>
      <LoginFooter/>
    </div>
  )
}

export default Login;