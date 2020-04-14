import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <div className="timeline-event">
      <h3 className="event-person">{props.person} </h3>
      <h4 className="event-status">{props.status} </h4>
      <p className="event-time"><Timestamp/> </p>
    </div>
  );
};

export default TimelineEvent;