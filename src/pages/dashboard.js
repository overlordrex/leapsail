import React from 'react';
import {Link} from 'react-router-dom';

const dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    localStorage.clear();
  };
  return (
    <div>
      <h3>HI</h3>
      <h1>{user.name}</h1>
      <h4>welcome to leapsail.</h4>
      <Link to={'/login'} onClick={handleClick}>
        back
      </Link>
    </div>
  );
};

export default dashboard;
