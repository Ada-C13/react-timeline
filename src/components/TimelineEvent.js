import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  const postTimestamp = () => {
    //why does changing timeStamp= to time= below make 21 hours show, vs. a few seconds ago?
    return <Timestamp time={props}/>
  }

  return (
    <div>
      <h2>{props.person}</h2>
    {/* why does changing props.time to props.timeStamp to just props below not seem to matter? */}
      <span>{postTimestamp(props.timeStamp)}</span>
      <p>{props.status}</p>
    </div>
  )
}

export default TimelineEvent;