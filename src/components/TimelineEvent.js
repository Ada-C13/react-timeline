import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <section className="TimelineEvent">
      <h3>Person: {props.person}</h3>
      <p>Status: {props.status}</p>
      <span>Timestamp: <Timestamp /> </span>
    </section>

  );
};

export default TimelineEvent;




// For wave 1 implement the `TimelineEvent` component function.  It should take 3 props.
//   - `person` - the person making the post.
//   - `status` - the message being posted.
//   - `timestamp` - the date-time of the event.

// Test the component by rendering it with hardcoded data inside the `App` component.
//   `TimelineEvent` should use the existing `Timestamp` component to render the time 
//   & date of the event.