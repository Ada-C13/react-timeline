import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

const timelinePosts = timelineData.events.map((event) => {
  return (
    {
      person: event.person,
      status: event.status,
      timeStamp: event.timeStamp
    }
  );
});

function App() {
  console.log(timelinePosts);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelinePosts}/>
      </main>
    </div>
  );
}

export default App;
