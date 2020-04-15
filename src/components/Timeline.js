import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const Timelinecomponents = props.events.map((event) =>{
    return(
    <div>
 <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/>
    </div> 
    );
  });
  
  return(
    <ul className="event-collection">
    {Timelinecomponents}
  </ul>
  )
}

export default Timeline;