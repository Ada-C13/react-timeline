import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import './TimelineEvent.css';

const Timeline = (props) => {
  const events = props.events.map((event, i) => {
    return (
      <div key={i}>
        <TimelineEvent person={event.person} status={event.status} time={event.timeStamp}/>
      </div>
    );
  });

  return (
    <div className="timeline">{events}</div>
  );
};
export default Timeline;