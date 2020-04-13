import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className ="TimelineEvent">
      <p>{props.person}</p>
      <p>{props.status}</p>
      <p>{props.timestamp}</p>
    </div>
  );
}

export default TimelineEvent;