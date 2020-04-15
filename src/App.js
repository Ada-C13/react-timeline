import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="React logo decoration"/>
        <h3 className="App-title">{timelineData.person}'s Social Media Feed</h3>
      </header>
      <main className="App-main">
        <Timeline className="timeline" events={timelineData.events}/>
      </main>
    </div>
  );
}

export default App;