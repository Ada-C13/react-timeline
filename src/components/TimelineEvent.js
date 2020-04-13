import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className='event'>
      <h2 className='person'>Leah Hughes</h2>
      <p className='status'>I'm learning how to do some React stuff here.</p>
      <p className='time'>Here is a timestamp: YOUR TIMESTAMP MAGICALLY APPEARS HERE SOMEHOW.</p>
    </div>
  );
}

export default TimelineEvent;