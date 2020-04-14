import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props) 
  return(
  <div className = "timeline-eventt">
    <h1 className = "event-person">{props.person}</h1>
    <ul>
      <li>{props.status}</li>
      <li>{Timestamp(props.timestamp)}</li>
    </ul>
  </div>
  );
};

export default TimelineEvent;