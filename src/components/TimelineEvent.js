import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <h2 className="event-person"> { props.person } </h2>
      <p className="event-status"> { props.status } </p>
      <time className="event-timestamp"> <Timestamp time={props.timeStamp}/></time>
    </div>
  );

}

export default TimelineEvent;