import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (event) => {
  
  return(
    <section className="timeline-event">
      <oi className="event-person">{event.person}</oi>
      <oi className="event-status">{event.status}</oi>
      <oi className="event-time"><Timestamp time={event.timeStamp}/></oi>
    </section>
  );

}

export default TimelineEvent;