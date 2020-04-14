import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props) 
  return(
  <div >
    <ul className = "timeline-event">
    <li className = "event-person" ><strong>{props.person}</strong></li>
      <li className = "event-status">{props.status}</li>
      <li className = "event-time">{Timestamp(props.timestamp)}</li>
    </ul>
  </div>
  );
};

export default TimelineEvent;