import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <div className="timeline-event">
      <h4 className="event-person">{props.person}</h4>
    {/* why does changing props.time(few seconds) to props.timeStamp (2years) to just props(19hours) change what we see? */}
      <p className="event-time"><Timestamp time={props.timeStamp}/></p>
      <p className="event-status">{props.status}</p>
    </div>
  )
}

export default TimelineEvent;