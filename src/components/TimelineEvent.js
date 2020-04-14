import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <section class="timeline-event">
      <li class="event-person">{props.person}</li>
      <li class="event-status">{props.status}</li>
      <li class="event-time"><Timestamp time={props.timeStamp} /></li>
    </section>
  );

}

export default TimelineEvent;