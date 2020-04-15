import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventBrick = props.events.map((event) => {

    return(
      <TimelineEvent 
      key={event.id}
      person={event.person}
      timestamp={event.timestamp}
      status={event.status}
      />
    );
  });

    return (
    <div className= "timeline">
      {eventBrick}
    </div>
  );
}

export default Timeline;