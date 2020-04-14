import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <div className="event-person"> { props.person } </div>
      <div className="event-status"> { props.status } </div>
      <div className="event-timestamp"> <Timestamp time={props.timestamp}/></div>
    </div>
  );

}

export default TimelineEvent;