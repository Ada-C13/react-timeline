import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <div className="timelineEvent">
      <li className="event-person">{props.person}</li>
      <li className="event-clocked"><Timestamp clocked={props.timeStamp} /></li>
      <li className="event-status">{props.status}</li>
    </div> 
  );
}

export default TimelineEvent;