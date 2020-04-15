import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


const TimelineEvent = (props) => {
  const person = props.person
  const status = props.status
  const timestamp = props.timestamp

  return (
    <div className="timeline-event">
      <h3 className='event-person' >{person}</h3>
      <p className='event-status'>{status}</p>
      <Timestamp className='event-time' time={timestamp} />
    </div>
  )
}

export default TimelineEvent;


