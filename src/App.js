import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';


function App() {
  console.log(timelineData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData["person"]}'s Timeline</h1>
      </header>
      <main className="App-main">
        <div className="timeline">
          <Timeline events={timelineData.events}/>
        </div>
      </main>
    </div>
  );
}

export default App;
