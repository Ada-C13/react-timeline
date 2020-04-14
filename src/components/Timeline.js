import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
// import timelineData from './data/timeline.json';

const Timeline = (props) => {
  const timeLineComponents = props.events.map((element, i)=>{
    return(
      <div key = {i}>
        <TimelineEvent
          person = {element.person}
          status = {element.status}
          timeStamp = {element.timeStamp}
        />
    </div>
    );
  });
  
  return(
    <div className = "TimeLine">
      {timeLineComponents}
    </div>
  );
}

export default Timeline;