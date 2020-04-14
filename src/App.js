import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import './components/TimelineEvent.css';
import './components/Timeline.css';



function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's social media feed</h1>
        {/* <Link href="special.css" rel="stylesheet" type="component/TimelineEvent.css"></LINK> */}
      </header>
      <main className="App-main">
        <Timeline events = {timelineData["events"]}/>
      </main>
    </div>
  );
}

export default App;
