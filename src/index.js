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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
  </Routes>
</BrowserRouter>
);