import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/headerDashboard';
import LoginFooter from '../components/loginFooter';

const dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    localStorage.clear();
  };
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 text-center'>
            <h1>Hi, {user.name}</h1>
            <Link to={'/login'} onClick={handleClick}>
              back
            </Link>
          </div>
        </div>
      </div>
      <LoginFooter/>
    </div>
  );
};

export default dashboard;
