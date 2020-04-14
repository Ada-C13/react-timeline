import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return(
    <div className="TimelineEvent">
      <h1>{props.name}</h1>
      <article>{props.message}</article>
      <footer><Timestamp time={props.timestamp}/></footer>
    </div>
  );
}

export default TimelineEvent;