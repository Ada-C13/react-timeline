import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
      </header>
      <main className="App-main">
      <div className="TimelineEvent">
        <Timeline data={timelineData.events}/>
      </div>
      </main>
    </div>
  );
};

export default App;
