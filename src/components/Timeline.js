import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const allEvents = props.events.map((event)=>{
    return(
      <TimelineEvent 
      person={event.person}
      status={event.status}
      timeStamp={event.timeStamp}
      key = {event.timeStamp}
      />
    );
  });

  return(
    <div className="Timeline timeline">
      {allEvents}
    </div>
  );
}

export default Timeline;