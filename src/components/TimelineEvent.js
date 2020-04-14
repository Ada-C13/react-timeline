import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = () => {
  
  return(
    <div className="timeline-event">
      <div className="event-person">
        <p>Adele Goldberg</p>
      </div>

      <div className="event-status">
        <p>In Smalltalk, everything happens somewhere else.</p>
      </div>

      <div className="event-time">
        <Timestamp time="2018-05-18T22:12:03Z"/>
      </div>
    </div>
  );
}

export default TimelineEvent;