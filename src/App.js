
import React from 'react';
import './App.css';
import Clock from './component/Clock';
import StopWatch from './component/StopWatch';
import Timer from './component/Timer.jsx';



function App() {
  
  return (
    <>
    <div className="App">
      <h1> Time </h1>
      <Clock />
      
      <p> <StopWatch /></p>

      <p> <Timer /></p>

    </div>
    </>
  );
}

export default App;
