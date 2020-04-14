import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <li className="timeline-event">
      <p className="event-person">{props.data.events[0].person}</p>
      <Timestamp time={props.data.events[0].timeStamp} />
      <p className="event-status">{props.data.events[0].status}</p>
    </li>
  )
}

export default TimelineEvent;