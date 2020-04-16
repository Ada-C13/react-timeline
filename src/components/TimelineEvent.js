import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className="timeline-event" >
      <h3 className= "event-person">{props.person} </h3>
      <p3 className= "event-status">{props.status}</p3>
      <p1 className= "event-time"><Timestamp time={props.timeStamp} /></p1>
    </div>
  )
}

export default TimelineEvent;



