import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Signup from './pages/register';
import Investment from './pages/investment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/investment" element={<Investment/>}></Route>
  </Routes>
</BrowserRouter>
);