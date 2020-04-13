import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <ul>
      <li>Person: {props.person}</li>
      <li>Status: {props.status}</li>
      <li>Time: {props.timestamp}</li>
    </ul>
  );

}

export default TimelineEvent;