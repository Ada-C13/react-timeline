import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import { render } from '@testing-library/react';


const TimelineEvent = (props) => {
  return(
    <div>
      <h3>{props.person}</h3>
      <p><Timestamp time={props.timestamp}/></p>
      <p>{props.status}</p>
    </div>
  );  
}

export default TimelineEvent;
