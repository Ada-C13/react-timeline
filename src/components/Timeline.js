import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (prop) => {
  
  const events = prop.array.map((event) => {
    return(
      <TimelineEvent 
        person={event.person}
        status={event.status}
        timestamp={event.timeStamp}
        key={event.timeStamp}
      />
    );
  });

  return(
    <ul className="Timeline">
      {events}
    </ul>
  )
 
}

export default Timeline;