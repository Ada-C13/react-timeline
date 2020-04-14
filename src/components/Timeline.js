import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventColevtion = props.events.map((event, i) => {
    return(
    <TimelineEvent
    person = {event.person}
    status = {event.status}
    timestamp = {event.timeStamp}
    key = {i}/>
    );
  });

  return(
    <ul className = "timeline">
      {eventColevtion}
    </ul>
  )
};

export default Timeline;