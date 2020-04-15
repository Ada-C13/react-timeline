import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import Person from './Person';

const TimelineEvent = () => {
  return (
    <div>
      <Person />
      <Timestamp />
    </div>
  )
}

export default TimelineEvent;