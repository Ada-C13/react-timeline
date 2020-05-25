import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {

  // Practice event handling
  const onStatusInputChange = (event) => {
    const status = event.target.value; 

    props.onUpdateEvent({
      person: props.person,
      timeStamp: props.timeStamp,
      status,
      id: props.id
    });
  };
  
  return (
    <section className="timeline-event">
      <h1 className="event-person">{ props.person }</h1>
      <time className="event-time">
        <Timestamp time={ props.timeStamp }/>
      </time>
      <p className="event-status">{ props.status }</p> 
      <textarea placeholder="edit your status" value={ props.status } onChange={onStatusInputChange} />
    </section>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  status: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default TimelineEvent;