import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData.events);
  return (
    <section className="App">
      <header className="App-header">
        <h1 className="App-title">{`${timelineData.person}'s Social Media Feed`}</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events}/>
      </main>
    </section>
  );
}

export default App;
