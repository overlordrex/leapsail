import React from 'react';
import './App.css';
import Carousel from './components/carousel';
import GetStarted from './components/getStarted';
import Hero from './components/hero';
import Header from './components/navBar';
import WhyLeapsail from './components/whyLeapsail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <GetStarted/>
      <Carousel/>
      <WhyLeapsail/>
    </div>
  );
}

export default App;
