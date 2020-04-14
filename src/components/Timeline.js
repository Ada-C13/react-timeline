import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props.events)
  
  return (
    props.events.map((event) => (
      <TimelineEvent
         person={event.person}
         status={event.status}
         timestamp={event.timestamp}
      />
    ))
  )
}

export default Timeline;