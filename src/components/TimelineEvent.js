import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const name = props.person;
  const time = <Timestamp time={props.timeStamp} />;
  const status = props.status;
  return(
    <div className="timeline-event">
      <h3 className="event-person"> {name}</h3>
      <h5 className="event-time"> {time} </h5>
      <p className="event-status"> {status}</p>
    </div>
  )
};

export default TimelineEvent;