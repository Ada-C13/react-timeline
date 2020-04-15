import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <h4 className="event-person">
        {props.person}
      </h4>
      <p className="event-status">
        {props.status}
      </p>
      <h5 className="event-time">
        <em><Timestamp time={props.timeStamp} /></em>
      </h5>
    </section>
  );
};

export default TimelineEvent;