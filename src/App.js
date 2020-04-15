import React from "react";
import "./App.css";
import timelineData from "./data/timeline.json";
import TimelineEvent from "./components/TimelineEvent";
import Timeline from "./components/Timeline";

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Ada-lovelace">Ada Lovelace's social media</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events}/>
      </main>
    </div>
  );
}

export default App;