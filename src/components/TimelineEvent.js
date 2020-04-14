import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp.js';
import PropTypes from 'prop-types';
const TimelineEvent = (props) => {
  return(
    <div className = "timeline-event">
      <div className = "event-person"><strong>{props.person}</strong></div>
      <div className = "event-status">{props.status}</div>
      <div className = "event-time"><Timestamp time = {props.timeStamp}/></div> 
    </div>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default TimelineEvent;