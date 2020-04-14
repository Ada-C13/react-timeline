import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import Timestamp from './Timestamp.js';


const Timeline = (events) => {
  const allPosts = events.events.map((post) => {
    return (
      <TimelineEvent 
        person={post.person}
        status={post.status}
        timeStamp={post.timeStamp}
        key={post.timeStamp + post.person}
      />
    );
  });

  return(
  <ul className="PostCollection">
      {allPosts}
    </ul>
  );
}

export default Timeline;