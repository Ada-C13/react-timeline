import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

/* This component will take an individual timeline event data and render it. Each TimelineEvent will contain a person who posted the event, a status message and a timestamp. You will need to use the Timestamp component inside this component. */


const TimelineEvent = (props) => {
  
  return(
    <article className='timeline-event'>
      <p className='event-person'>{props.person}</p>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'>
        <Timestamp time = {props.time} />
        </p>
    </article>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string,
  time: PropTypes.string,
};

export default TimelineEvent;