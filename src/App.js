import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Social Media Feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent
        person="Charles Babbage"
        status="Chaps, no one made 'em like Byron made 'em. #LoveladieFanClub"
        timestamp="2020-10-31T23:58:42Z"
        />
      </main>
    </div>
  );
}

export default App;
