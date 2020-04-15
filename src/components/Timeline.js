import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.data.map((event, index) => {
    return (
      <section key={index}>
        <TimelineEvent 
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </section>

    )
  });

  
  return(
    <div className='timeLine'> {events} </div>
  );
}

export default Timeline;