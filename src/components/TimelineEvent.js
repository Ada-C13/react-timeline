import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className="timeline-event event-hover">
      <h3 className="event-person">{props.person}</h3>
      <p className="event-status">{props.status}</p>
      <p className="event-time"><Timestamp time={props.timestamp}/></p>
    </div>
  );
}

export default TimelineEvent;