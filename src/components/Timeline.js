import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
 
  const TimelineComponents = props.events.map((events, i) =>{
    return(
      <TimelineEvent
      name={events.person}
      status={events.status}
      timestamp={events.timeStamp}
      key={i}
      />
    );
  });


  return (
    <div>
      {TimelineComponents}
    </div>
  );
}

export default Timeline;