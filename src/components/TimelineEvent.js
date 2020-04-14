import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <header className="event-person">{props.person}</header>
      <p className="event-time"><Timestamp time={props.timestamp} /></p>
      <p className="event-status">{props.status}</p>
    </section>
  )
}

export default TimelineEvent;