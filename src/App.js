import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import './components/Timeline.css';

const events = [
  {
    person: "Adele Goldberg",
    status: "In Smalltalk, everything happens somewhere else.",
    timeStamp: "2018-05-18T22:12:03Z"
  },
  {
    person: "Erica Baker",
    status: "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention.",
    timeStamp: "2018-05-18T22:19:40Z"
  }
];

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's social media feed</h1>
      </header>
      <main className="App-main">
        <Timeline events={events} />
      </main>
    </div>
  );
}

export default App;
