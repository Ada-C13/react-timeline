import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event) => {
    return (
      <TimelineEvent 
        person={event.person}
        status={event.status}
        timestamp={event.timeStamp}
        key={event.timeStamp}
      />
    )
  });
  
  return(
    <ul className='timeline'>
      {eventComponents}
    </ul>
  );
}

export default Timeline;