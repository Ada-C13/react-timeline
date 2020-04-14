import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  console.log(props);
  
  return (
    <div className="TimelineEvent">
      <h3>{props.person}</h3>
      <p>{props.status}</p>
      <Timestamp time={props.time} />
    </div>
  );
}

export default TimelineEvent;