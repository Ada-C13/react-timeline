import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  
  return (
    <section className="timelineEvent">
      <h1 className="person"> {props.person}</h1>
      <p className="eventStatus">{props.status}</p>
      <time className="timeStamp">
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