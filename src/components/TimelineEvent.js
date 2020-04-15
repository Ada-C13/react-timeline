import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
  <div className="TimelineEvent timeline-event">
    <div className="event-person">{props.person}</div>
    <div className="event-status">{props.status}</div>
    <div className="event-time">
      <Timestamp time={props.timeStamp} />
    </div>
    
  </div>);
}

export default TimelineEvent;