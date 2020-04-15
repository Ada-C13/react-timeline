import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((event, i) => {
    return (
      <TimelineEvent
        person={event.person}
        timestamp={event.timestamp}
        status={event.status}
        key={i}
      />
    );
  });
  
  return(
    <div className='timeline'>
      {timelineComponents}
    </div>
  ); 
}

export default Timeline;