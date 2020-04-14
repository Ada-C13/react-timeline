import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  const postTimestamp = () => {
    return <Timestamp timeStamp={props}/>
  }

  return (
    <div>
      <h2>{props.person}</h2>
      <span>{postTimestamp(props.timeStamp)}</span>
      <p>{props.status}</p>
    </div>
  )
}

export default TimelineEvent;