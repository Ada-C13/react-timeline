import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  const timeLineComponents = props.events.map((event, i)=>{
    return(
      <div key = {i}>
        <TimelineEvent
          person = {event.person}
          status = {event.status}
          timeStamp = {event.timeStamp}
        />
    </div>
    );
  });
  
  return(
    <div className = "TimeLine">
      {timeLineComponents}
    </div>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    person: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired
  }))
};
export default Timeline;