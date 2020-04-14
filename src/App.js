import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tina's Social Media Feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent person="Becca" status="Hacking away at Ada projects"/>
        <TimelineEvent person="Henry" status="Grocery shopping and meal prep"/>
        {/* <Timeline events={timelineData.events}/> */}

      </main>
    </div>
  );
}

export default App;
