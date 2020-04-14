import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.eventsData.map((event)=> {
    return(
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
      />
    );
  });
  return(
    <p className="timeline">
     {events}
    </p>
  );
}

export default Timeline;