import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="Timeline-event">
      <h4 className="person">
        {props.person}
      </h4>
      <p className="status">
        {props.status}
      </p>
      <h5 className="timestamp">
        <em><Timestamp time={props.timeStamp} /></em>
      </h5>
    </section>
  );
};

export default TimelineEvent;