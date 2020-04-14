import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (events) => {

  const eventComponents = events.events.map((event) => {

    return(
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        key={event.status}
      />
    );

  });

  return (
    <section class="timeline">
      {eventComponents}
    </section>
  );
}

export default Timeline;