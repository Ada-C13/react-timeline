import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const TimelineData = props.events.map((event, i) => {
    return (
      <Timeline
        key={i}
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
      />
    );
  });
  return (
    <main className="timeline">
      {TimelineData}
    </main>
  );
};

export default TimelineEvent;


