import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventColection = props.events.map((event, i) => {
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
      {eventColection}
    </ul>
  )
};

export default Timeline;