import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.data.map((event, index) => {
    return (
      <li key={index}>
        <TimelineEvent 
          person={event.person}
          status={event.status}
          timestamp={event.timestamp}
        />
      </li>

    )
  });

  
  return(
    <ul className='timeLine'> {events} </ul>
  );
}

export default Timeline;