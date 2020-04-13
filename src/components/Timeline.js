import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (prop) => {
  
  const events = prop.array.map((event) => {
    return(
      <TimelineEvent 
        person={event.person}
        status={event.status}
        timestamp={event.TimeStamp}
        key={event.TimeStamp}
      />
    );
  });

  return(
    <ul>
      {events}
    </ul>
  )
 
}

export default Timeline;