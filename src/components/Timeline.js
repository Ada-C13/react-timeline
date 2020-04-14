import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const timelineComponents = props.events.map( (event) => 
  {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timestamp={event.timestamp}
      />
    );
  });

  return (
    <p className="Timeline timeline">
      {timelineComponents}
    </p>
  );
}

export default Timeline;