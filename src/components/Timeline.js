import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event) => {

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
    <section className="timeline">
      {eventComponents}
    </section>
  );
}

export default Timeline;