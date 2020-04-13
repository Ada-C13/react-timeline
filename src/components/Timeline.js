import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  return (
    <TimelineEvent 
      person={props.person} 
      status={props.status}
      timestamp={props.timeStamp}
    />
  )
}

export default Timeline;