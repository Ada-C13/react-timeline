import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className="timeline-event">
      <div className="event-person">
        <p>{props.person}</p>
      </div>

      <div className="event-status">
        <p>{props.status}</p>
      </div>

      <div className="event-time">
        <Timestamp time={props.timeStamp}/>
      </div>
    </div>
  );
}

export default TimelineEvent;