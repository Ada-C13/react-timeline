import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
  
  // map over event props to return event components for each element
  const timelineEventComponents = props.events.map((event) => {
    return (
      <TimelineEvent
        key={event.timeStamp}
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
      />
    );
  });
  
  return (
    <ul className="timeline">
      {timelineEventComponents}
    </ul>
  )
}

export default Timeline;