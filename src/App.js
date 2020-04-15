import React from 'react';
// import Logo from './appPhotos/logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Livbook</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events} />
      </main>
    </div>
  );
}

export default App;
