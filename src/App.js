import React from 'react';
import './App.css';
// this is where to get the data from to pass down
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  // Set data(props) equal to a variable before the component can read it
  // The variable is how the component will know how to read it and format it when it comes back up
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
