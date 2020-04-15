import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div>
      <h3 className="Timeline-name">{props.person}</h3>
      <p className="Timeline-status">{props.status}</p>
      <Timestamp time={props.timestamp} />
    </div>
  )
}

export default TimelineEvent;