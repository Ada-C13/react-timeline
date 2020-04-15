import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const person = props.person
  const status = props.status
  const timestamp = props.timestamp

  return(
    <div> <li>{person}</li> 
    <li>{status}</li> 
  <Timestamp time={timestamp}/>
  </div>
  )
}

export default TimelineEvent;


