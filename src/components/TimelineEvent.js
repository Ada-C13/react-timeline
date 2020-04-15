import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <div className="timeline-event">
      <h4 className="event-person">{props.person}</h4>
      <p className="event-time"><Timestamp time={props.timeStamp}/></p>
      <p className="event-status">{props.status}</p>
    </div>
  )
}

export default TimelineEvent;