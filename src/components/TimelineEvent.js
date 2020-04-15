import React from 'react';
import './TimelineEvent.css';
// import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const timelineComponents = props.events.map((event,) => {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        
      />
    );
  });
  return(
    <main className="Timeline timeline">
    {timelineComponents}
    </main>
  );
};

export default TimelineEvent;