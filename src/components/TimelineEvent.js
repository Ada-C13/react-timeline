import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => { 
  return (
    <article className="timeline-event">
      <h3 className="event-person">{props.person}</h3>
      <p className="event-status">{props.status}</p>
      <Timestamp className="event-time" time={props.time} />
    </article>
  );
}

export default TimelineEvent;