import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (events) => {
  console.log(events);
  const eventComponents = events.events.map((event) => {
    return(
      <TimelineEvent
        person = {event.person}
        status = {event.status}
        timestamp = {event.timestamp}
      />
    );
  });

  return eventComponents;
}

export default Timeline;