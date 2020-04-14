import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (event) => {
  return(
    <div className='timeline-event'>
      <p className='event-person'>{event.person}</p>
      <p className='event-status'>{event.status}</p>
      <p className='event-time'><Timestamp timestamp={event.timestamp}/></p>
    </div>
  );
}

export default TimelineEvent;