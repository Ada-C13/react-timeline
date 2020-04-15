import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

/* This component will take a list of timeline events as a prop and render a list of TimelineEvent components. */

const Timeline = (props) => {
  
  const events = props.events.map((item) => {
    return (
      <TimelineEvent
        key = {item.timeStamp}
        person = {item.person}
        status = {item.status}
        time = {item.timeStamp} /> );
    },
  );

  return (
    <section className='timeline'>
      {events}
    </section>
  );
};

export default Timeline;