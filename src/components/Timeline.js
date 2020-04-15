import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({events}) => {
  // const {events} = props; - destructuring
  const timelineComponents = events.map((event, i) => {
    return (
      // used spread operator for event instad of using .key for retrieving each. 
      // this is repacing lines 23-25
      <TimelineEvent { ...event } key={event.timeStamp} />
    );
  });
  
  return(
    <div className='timeline'>
      {timelineComponents}
    </div>
  ); 
}

{/* <TimelineEvent
        person={event.person}
        timeStamp={event.timeStamp}
        status={event.status}
        key={event.timeStamp}
      /> */}

export default Timeline;