import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import Timestamp from './components/Timestamp';

function App() {
  console.log(timelineData);

  // Customize the code below
  // Then read in the /src/data/timeline.json file 
  // into an array of objects in /src/App.js. In the 
  // render function of the App component, render a TimeLine component 
  // using the array of objects as the events prop.
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada's Feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent person="Erica Baker" 
        status="Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention."
        timestamp="2018-05-18T22:19:40Z"/>
      </main>
    </div>
  );
}

export default App;
