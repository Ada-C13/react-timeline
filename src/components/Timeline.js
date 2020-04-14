import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const timelineComponents = props.events.map( (event, index) => 
  {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        key={index}
      />
    );
  });

  return (
    <main className="Timeline timeline">
      {timelineComponents}
    </main>
  );
}

export default Timeline;