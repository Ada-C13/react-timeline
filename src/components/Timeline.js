import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  //the render function will use the props (an array of event objects) to render a set of TimelineEvents
  
  const allEvents = props.events.map(event => {
      return(
        <TimelineEvent
          person={event.person}
          status={event.status}
          stamp={event.timeStamp}
          key={event.timeStamp}
        />
      );
    }
  );

  return (
    <div className="timeline">
      {allEvents}
    </div>
  );
}

export default Timeline;