import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <div className="Post">
      <h2>{props.person}</h2>
      <p>{props.status}</p>
      <p>{<Timestamp props={props.timeStamp} />}</p>
    </div>
  );
}

export default TimelineEvent;