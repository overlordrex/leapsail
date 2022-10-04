import React from 'react';

const dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <h3>HI</h3>
      <h1>{user.name}</h1>
      <h4>welcome to leapsail.</h4>
    </div>
  );
};

export default dashboard;
