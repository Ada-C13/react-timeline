import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';



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

//cd desktop/ada/projects/react-timeline/src
export default Timeline;


