import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events.map((event, i) => {
    return(
      <div key={i}>
        <TimelineEvent 
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}/>
      </div>
    );
  });

  return(
    <div 
      className="timeline"> {events}
    </div>
  );
};

export default Timeline;