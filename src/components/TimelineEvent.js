import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="TimelineEvent">
      <p>{props.name}</p>
      <p>{props.status}</p>
      <Timestamp time={props.timestamp} />
    </div>
  )
}

export default TimelineEvent;