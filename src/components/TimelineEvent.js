import React from 'react';
import './TimelineEvent.css';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {


  
  return (
    <section className='timeline-event'>
      <h3 className='event-person'>{props.person}</h3>
      <h4 className='event-status'>{props.status}</h4>
      <h3 className='event-time'><Timestamp time={props.timeStamp}/></h3>
    </section>

  );
};


TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};




export default TimelineEvent;
