import React from 'react';
import './App.css';
// this is where to get the data from to pass down
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Social Media Timeline!</h1>
      </header>
      <main className="App-main">
        <timelineData />
        <Timeline events={timelineData.events} />
      </main>
    </div>
  );
}

export default App;
