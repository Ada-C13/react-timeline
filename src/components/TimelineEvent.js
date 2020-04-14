import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className='timeline-event'>
      <img className='event-image' src='https://via.placeholder.com/100x125'></img>
      <h3 className='event-person'>{props.person}</h3>
      <h3 className='event-status'>{props.status}</h3>
      <h3 className='event-time'><Timestamp time={props.timeStamp} /></h3>
    </div>
  );
}

export default TimelineEvent;