import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <TimelineEvent person = "Adele Goldberg" status = "In Smalltalk, everything happens somewhere else." timestamp = "2018-05-18T22:12:03Z"/>
        <TimelineEvent person = "Erica Baker" status = "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention." timestamp = "2018-05-18T22:19:40Z"/>
      </main>
    </div>
  );
}



export default App;
