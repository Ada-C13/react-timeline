import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const timelineEventComponents = props.events.map((event, i) => {
    return (
      <TimelineEvent 
      person={event.person}
      status={event.status}
      timestamp={event.timeStamp}
      key={i}
      />
    );
  });

  return (
    <div className="timeline">
      {timelineEventComponents}
    </div>
  );
}

export default Timeline;