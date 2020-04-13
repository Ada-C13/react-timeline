import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props) 
  return(
  <div className = "TimelineEvent">
    <h1>{props.person}</h1>
    <ul>
      <li>{props.status}</li>
      <li>{Timestamp(props.timestamp)}</li>
    </ul>
  </div>
  );
};

export default TimelineEvent;