import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  
  return (
    <section className="timeline-event">
      <h1 className="event-person">{ props.person }</h1>
      <time className="event-time">
        <Timestamp time={ props.timeStamp }/>
      </time>
      <p className="event-status">{ props.status}</p>
    </section>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  status: PropTypes.string
};

export default TimelineEvent;