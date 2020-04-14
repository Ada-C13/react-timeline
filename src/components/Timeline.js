import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((event, i) => {
    return (
      <li key={i} className="timeline">
        <TimelineEvent person={ event.person } status={event.status} timestamp={event.timestamp}/>
      </li>
    );
  });

  return (timelineComponents);
}

export default Timeline;