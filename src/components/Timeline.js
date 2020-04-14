import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = prop => {
  const postCollection = prop.posts.map((post) => {
    return (
      <TimelineEvent 
        person={post.person}
        status={post.status}
        timestamp={post.timeStamp}
        key={post.timeStamp}
      />
    );
  });

  return(
    <div className='timeline'>
      {postCollection}
    </div>
    );

}

export default Timeline;