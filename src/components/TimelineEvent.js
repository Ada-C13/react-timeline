import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

//Create a template for a single status update
const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>
      <time className="event-time">
        <Timestamp time={props.Timestamp}/>
      </time>
    </section>
  );
}

export default TimelineEvent;