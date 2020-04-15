import React from 'react';
import './App.css';
import timeline from './data/timeline.json';
import Timeline from './components/Timeline';


function App() {

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Look! Here is the title!</h1>
      </header>
      <main className="App-main">
      
      <Timeline events={timeline.events}/>
      </main>
    </div>
  );
}

export default App;
