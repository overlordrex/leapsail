import './App.css';
import GetStarted from './components/getStarted';
import Hero from './components/hero';
import Header from './components/navBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <GetStarted/>
    </div>
  );
}

export default App;
