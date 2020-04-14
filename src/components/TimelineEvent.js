import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className="TimelineEvent">
      <h2>{props.person}</h2>
      <p>{props.status}</p>
      <footer><Timestamp time={props.timestamp}/></footer>
    </div>
  );
}

export default TimelineEvent;