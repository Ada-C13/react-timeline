import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PostCollection from './components/PostCollection';
import timeline from './data/timeline.json';
import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';
// import TimelineEvent from './components/TimelineEvent';

function App() {

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Look! Here is the title!</h1>
      </header>
      <main className="App-main">
      {/* <Timestamp props={timeline.events}/> */}  {/* not sure if we are supposed to use this here or not */ }
      <Timeline events={timeline.events}/>
      </main>
    </div>
  );
}

export default App;
