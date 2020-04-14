import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
  
  // use map here to return event components for each element in event list
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
    <ul>
      {timelineEventComponents}
    </ul>
  )
}

export default Timeline;