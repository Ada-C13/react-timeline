import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
    <div className='timeline-event'>
      <h2 className='event-person'>{props.person}</h2>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'>{<Timestamp props={props.timeStamp} />}</p>
    </div>
  );
}

export default TimelineEvent;