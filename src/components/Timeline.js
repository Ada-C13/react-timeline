import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event) => {
    const postKey = `${event.person}${event.timeStamp}`;
    
    return (
      <TimelineEvent 
        person={event.person}
        status={event.status}
        timestamp={event.timeStamp}
        key={postKey}
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