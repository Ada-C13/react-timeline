import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const events = props.events.map((event) => {
    return ( 
      <TimelineEvent
        person={event.person}
        status={event.status} 
        timestamp={event.timeStamp}
      />
    );
  });

  return (
    <div className="timeline">
      {events}
    </div>
  );
};

export default Timeline;