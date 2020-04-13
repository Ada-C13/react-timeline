import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.data.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/> 
      </li>
    )

  });

  return (
    <ul className='timeline'> {events} </ul>
  ); 
}

export default Timeline;