import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  const postTimestamp = () => {
    return <Timestamp time={props}/>
  }

  return (
    <div>
      <h2>{props.person}</h2>
      <p>{postTimestamp(props.time)}</p>
      <p>{props.status}</p>
    </div>
  )
}

export default TimelineEvent;