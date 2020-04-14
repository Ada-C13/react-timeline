import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  
  // what does this do?
  // this takes the properties passed into Timeline from App and maps them into an array
  // it returns an array of TimelineEvent list items
  const timelineComponents = props.events.map((event, i) => {
    return (
    <li key={i}>
      <TimelineEvent 
      person={ event.person } 
      status={ event.status } 
      timeStamp={ event.timeStamp } 
      image={ event.image } 
      alt={ event.alt }/>
    </li>
  );
});
  // this returns the TimelineEvent array from the function
  return (
    <ul className="timeline">
      <li> {timelineComponents} </li>
    </ul>
  )
}

Timeline.propTypes= {
  events: PropTypes.object,
} 

export default Timeline;