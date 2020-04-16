import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const allEvents = props.events.map(event => {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        stamp={event.timeStamp}
        key={event.timeStamp}
      />
    );
  });
  
  return (
    <div className="timeline">
      {allEvents}
    </div>
  );
}

export default Timeline;