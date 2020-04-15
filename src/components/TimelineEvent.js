import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div>
      <h1>{props.person} </h1>
      <p1>{props.status}</p1>
      <p1><Timestamp time={props.timeStamp} /></p1>
    </div>
  )
}

export default TimelineEvent;



