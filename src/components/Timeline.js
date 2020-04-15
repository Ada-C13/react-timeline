import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineEvents = props.events.map(event => 
  <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp} />
  );
  
  return (
    <section className="timeline">
      {timelineEvents}
    </section>
  );
};

export default Timeline;