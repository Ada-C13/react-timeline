import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const TimelineComponents = props.events.map(event => {
    return (
      <TimelineEvent key={event.timeStamp}
        person={event.person} 
        status={event.status}
        time={event.timeStamp}
      />
    );
  });

  return (
    <div className="timeline">
      { TimelineComponents }
    </div>
  );
}

export default Timeline;
