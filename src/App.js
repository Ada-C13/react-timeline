import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

const feedFodder = timelineData.events.map((event) => {
  return (
    {
      person: event.person,
      status: event.status,
      timeStamp: event.timeStamp
    }
  );
});

function App() {
  console.log(timelineData);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Moment Feed</h1>
      </header>
      <main className="App-main">
        <Timeline events={feedFodder} />
      </main>
    </div>
  );
}

export default App;