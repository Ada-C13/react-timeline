import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


// For wave 1 implement the TimelineEvent component function. It should take 3 props.

// person - the person making the post.
// status - the message being posted.
// timestamp - the date-time of the event.
// Test the component by rendering it with hardcoded data inside the App component. TimelineEvent should use the existing Timestamp component to render the time & date of the event.

const TimelineEvent = (props) => {
  return (
    <div className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>
      <time className="event-time">
        <Timestamp time={props.Timestamp}/>
      </time>
    </div>
  );
}

export default TimelineEvent;