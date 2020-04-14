import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const TimelineComponents = props.events.map(event => {
    return (
      <TimelineEvent key={event.id}
        person={event.person} 
        status={event.status}
        timeStamp={event.timeStamp}
      />
    );
  });

  return (
    <section className="timeline">
      { TimelineComponents }
    </section>
  );
}

export default Timeline;