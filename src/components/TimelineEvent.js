import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <section className="timeline-event">
      <oi className="event-person">{props.person}</oi>
      <oi className="event-status">{props.status}</oi>
      <oi className="event-time"><Timestamp time={props.timeStamp} /></oi>
    </section>
  );

}

export default TimelineEvent;