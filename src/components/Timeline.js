import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const allEvents = props.events.map((event, index) => {
    return (
      <TimelineEvent key={index} person={event.person} status={event.status} timeStamp={event.timeStamp} />
    );
  });
  return allEvents;
}

export default Timeline;