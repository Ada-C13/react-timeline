import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo}/>
        <h1 className="App-title">Computer Time(line)</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events}/>
      </main>
    </div>
  );
}

export default App;
