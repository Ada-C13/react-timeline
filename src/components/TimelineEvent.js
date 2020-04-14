import React from 'react';
import './TimelineEvent.css';

const TimelineEvent = (props) => {
  return(
    <div className = "timeline-event">
      <div className = "event-person"><strong>{props.person}</strong></div>
      <div className = "event-status">{props.status}</div>
      <div className = "event-time">{props.timeStamp}</div> 
    </div>
  );
}

export default TimelineEvent;