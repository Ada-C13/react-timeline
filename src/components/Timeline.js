import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  // what does this do?
  const timelineComponents = props.events.map((event, i) => {
    return (
    <li key={i}>
      <TimelineEvent person={ event.person } status={ event.status } timeStamp={ event.timeStamp } />
    </li>
  );
});

  return (
    <div className="timeline">
      <li> {timelineComponents} </li>
    </div>
  )
}

export default Timeline;