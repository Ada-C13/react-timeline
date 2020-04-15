import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <div className="timeline-event">
      <div className="event-person">{props.person}</div>
      <div className="event-status">{props.status}</div>
      <Timestamp time={props.timeStamp}/>

    </div>
  );
}

export default TimelineEvent;