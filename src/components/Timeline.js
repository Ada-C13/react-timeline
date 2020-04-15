import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
    
  const TimelineComps = props.posts.map( (post) => {
    return (
      <TimelineEvent 
        person={post.person}
        status={post.status}
        timeStamp={post.timeStamp}
        key={post.person}
      />
    );
  });

  return (
    <main className='Timeline'>
      {TimelineComps}
    </main>
  );
  
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      person: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired
    })
  )
};

export default Timeline;