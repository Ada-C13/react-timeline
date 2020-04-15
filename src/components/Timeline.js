import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.posts.map( (post) =>
    <TimelineEvent
      person = {post.person}
      status = {post.status}
      timestamp = {post.timeStamp}
      key = {post.person}
    />
  )
    
  return(
    <ul className = "timeline">
      {timelineComponents}
    </ul>
  );
}

export default Timeline;