import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  let likes = "likes";
  if (props.likes === 1) likes = "like";

  return (
    <section className="timeline-event">
      <header className="event-person">{props.person}</header>
      <p className="event-time"><Timestamp time={props.timestamp} /></p>
      <p className="event-status">{props.status}</p>
      <p className="event-likes">{props.likes} {likes}</p>
    </section>
  )
}

export default TimelineEvent;