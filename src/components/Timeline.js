import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events.map((event) => {
    return (
      <TimelineEvent 
        person={event.person}
        status={event.status}
        time={event.timeStamp}
        key={event.status}
      />
    );
  });
  
  return (
    <ul className="Timeline">
      {events}
    </ul>
  );
}

export default Timeline;