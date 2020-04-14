import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const TimelineComponents = props.events.map(event => {
    return (
      <TimelineEvent key={event.timeStamp}
        person={event.person} 
        status={event.status}
        timestamp={event.timeStamp}
      />
    );
  });

  return (
    <div className="timeline">
      { TimelineComponents }
    </div>
  );
}

export default Timeline;

// const events = props.data.map((event, i) => {
//   return (
//     <li key={i}>
//       <TimelineEvent person={event.person} status={event.status} timeStamp={event.timeStamp}/> 
//     </li>
//   )

// });

// return (
//   <ul className='timeline'> {events} </ul>
// ); 