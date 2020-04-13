import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Timeline</h1>
      </header>
      <main className="App-main">
      <div className="TimelineEvent">
        <Timeline data={timelineData.events}/>
      </div>
      </main>
    </div>
  );
}

export default App;
