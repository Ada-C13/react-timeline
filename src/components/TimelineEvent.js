import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  const person = props.person;
  const status = props.status;
  const stamp = props.timeStamp
  const key = props.key;

  return(
    <div className="timeline-event">
      <h2 className="event-person">{person}</h2>
      <article className="event-status">{status}</article>
      <div className="event-time"><Timestamp time={stamp}/></div>
    </div>
  );
}

export default TimelineEvent;