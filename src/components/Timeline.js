import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  
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
