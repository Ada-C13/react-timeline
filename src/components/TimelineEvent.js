import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import logo from '../logo.svg';

//Create a template for a single status update
const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <h2 className="event-person"><img src={logo} />{props.person}</h2>
      <p className="event-status">{props.status}</p>
      <time className="event-time">
        <em><Timestamp time={props.Timestamp}/></em>
      </time>
    </section>
  );
}

export default TimelineEvent;