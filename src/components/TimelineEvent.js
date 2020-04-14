import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <ul className="timeline-event">
      <li className="event-person">{props.person}</li>
      <li className="event-time"><Timestamp time={props.timestamp} /></li>
      <li className="event-status">{props.status}</li>
    </ul>
  )
}

export default TimelineEvent;