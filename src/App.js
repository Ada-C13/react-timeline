import React, { useState } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  // Customize the code below
  const [events, setEvents] = useState(timelineData.events)

  
  // Practice event handling (callback funciton)
  const onUpdateEvent = (updatedEvent) => {
    const newEvents = []

    events.forEach(event => {
      if (event.id === updatedEvent.id) {
        newEvents.push(updatedEvent);
      } else {
        newEvents.push(event);
      }
    });

    setEvents(newEvents);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s social media feed</h1>
      </header>

      <main className="App-main">
        <Timeline events={events} onUpdateEvent={onUpdateEvent}/> 
      </main>
    </div>
  );
}

export default App;
