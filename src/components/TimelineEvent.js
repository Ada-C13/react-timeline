import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

// using destructuring to extract elements of props
const TimelineEvent = ({person, timeStamp, status}) => {
  return (
    <div className="timeline-event">
      <div className="event-person">{person}</div>
      <div className="event-time"><Timestamp time={timeStamp} /></div>
      <div className="event-status">{status}</div>
    </div>
  );
}

export default TimelineEvent;