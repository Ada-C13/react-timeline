import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

/* This component is the traditional outer component of the React App. The App component will read in the data from the JSON file and pass the timeline events to the Timeline component which it will contain. */

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">These are the times of your life...</h1>
      </header>
      <main className="App-main">
      </main>
    </div>
  );
}

export default App;
