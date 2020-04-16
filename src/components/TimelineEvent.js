import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  const person = props.person;
  const status = props.status;
  const stamp = props.timeStamp
  const key = props.key;

  return(
    <div className="TimelineEvent">
      <h2>{person}</h2>
      <article>{status}</article>
      <Timestamp time={stamp}/>
    </div>
  );
}

export default TimelineEvent;