import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
  <div className="TimelineEvent" class="timeline-event">
    <div class="event-person">{props.person}</div>
    <div class="event-status">{props.status}</div>
    <div class="event-time">
      <Timestamp time={props.timeStamp} />
    </div>
    
  </div>);
}

export default TimelineEvent;