import React from 'react';
import './App.css';
// this is where to get the data from to pass down
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent'

function App() {
  console.log(timelineData);
  
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Timeline - Leah's Social Media Feed!</h1>
      </header>
      <main className="App-main">
        <timelineData />
        <TimelineEvent />
      </main>
    </div>
  );
}

export default App;
