import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  const postComponents = props.posts.map((post) => {
    return (
      <Timestamp
      person={post.person}
      status={post.status}
      timestamp={post.timestamp}
      key={post.timestamp}
      />
    );
  });
  return (
    <ul className="TimelineEvent">
      {postComponents}

    </ul>
  );
}

export default TimelineEvent;