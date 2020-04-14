import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>

      <p className="event-time">{Timestamp(props.timestamp)}</p>
    </div>
  );
}

export default TimelineEvent;