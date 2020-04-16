import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const Timelinecomponents = props.events.map((event) =>{
    return(
      <TimelineEvent 
      key={event.timeStamp}
      person={event.person} 
      status={event.status} 
      timeStamp={event.timeStamp}/>
    );
  });
  
  return(
    <ul className="event-collection timeline">
    {Timelinecomponents}
  </ul>
  )
}

export default Timeline;