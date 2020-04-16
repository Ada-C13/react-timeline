import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timeline = props.events.map((event) => {
    return (
      <TimelineEvent
        person={event.person} 
        status={event.status} 
        timeStamp={event.timeStamp} 
      />
    );
  });
return (<ul>{timeline}</ul>);
}

export default Timeline;