import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {
  const events = props.timelineEvents.map((item,index) => <TimelineEvent key={index} person={item.person} status={item.status} timeStamp={item.timeStamp}/>);
  return(
    <div>
      {events}
    </div>
  );
}

export default Timeline;
