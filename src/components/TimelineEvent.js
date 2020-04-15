import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  
  return (
    <section className="timeline-event">
      <h1 className="event-person"> {props.person}</h1>
      <p className="event-status">{props.status}</p>
      <time className="event-time">
        <Timestamp time={props.timeStamp}/>
      </time>
    </section>
  );
  
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default TimelineEvent;