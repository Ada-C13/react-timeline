import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
  console.log(props);

const eventList = props.times.map((event) => {
  return (
    <TimelineEvent
      person={event.person}
      status={event.status}
      timeStamp={event.timeStamp}
      key={event.person}
    />
  );

});

  return (
    <ul className="timeline">
     {eventList}
    </ul>

  );
  
}

export default Timeline;