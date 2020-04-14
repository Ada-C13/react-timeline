import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div>
      <h3>{props.person}</h3>
      <p>{props.status}</p>
      <Timestamp time={props.timestamp} />
    </div>
  )
}

export default TimelineEvent;