import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    // <div className='timeline-event'>
    //   <h3 className='event-person'>{props.person}</h3>
    //   <p className='event-status'>{props.status}</p>
    //   <Timestamp className='even-time' time={props.oneEvent.timeStamp}/>
    // </div>

    <div className='timeline-event'>
      <h3 className='event-person'>{props.oneEvent.person}</h3>
      <p className='event-status'>{props.oneEvent.status}</p>
      <Timestamp className='even-time' time={props.oneEvent.timeStamp}/>
    </div>


    // <div className='timeline-event'>
    //   <h3 className='event-person'>Person Name that posted</h3>
    //   <p className='event-status'>Love that message. CS is like binding math and poetry.</p>
    //   <p className='even-time'> Timestamp here</p>
    // </div>
   
  );
}

export default TimelineEvent;