import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineCollection = props.events.map((event) => {
    return [
      <TimelineEvent
      person = {event.person}
      status = {event.status}
      timeStamp = {event.timeStamp}
      key = {event.person}
      />
    ]
  })

  return(
  <div className="timeline">
    {timelineCollection}
  </div>
  )
}

export default Timeline;