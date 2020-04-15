import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className="timeline-event" >
      <p1 className= "event-person">{props.person} </p1>
      <p1 className= "event-status">{props.status}</p1>
      <p1 className= "event-time"><Timestamp time={props.timeStamp} /></p1>
    </div>
  )
}

export default TimelineEvent;



