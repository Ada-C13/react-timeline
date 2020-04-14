import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div>
      <ul className="timeline-event">
        <li className="event-person">{props.person}</li>
        <li className="event-time"><Timestamp time={props.time} /></li>
        <li className="event-status">{props.status}</li>
      </ul>
    </div>
  );
}

export default TimelineEvent;