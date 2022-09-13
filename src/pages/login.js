import React from "react";
import '../css/Login.css';
import Header from "../components/headerDashboard";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div>
      <Header/>
      <LoginForm/>
    </div>
  )
}

export default Login;