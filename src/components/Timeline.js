import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props.events)

  return (
    props.events.map((event, i) => (
      <TimelineEvent 
        key ={i}
        person={event.person}
        status={event.status}
        timestamp={event.timestamp}
      />
    ))
  )
}

export default Timeline;