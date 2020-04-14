import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <section className="TimelineEvent timeline-event timeline-event:hover">
      <h3 className="event-person">{props.person}</h3>
      <Timestamp time={props.timeStamp}  />
      <p className="event-status">{props.status}</p>
    </section>
  );
};

export default TimelineEvent;