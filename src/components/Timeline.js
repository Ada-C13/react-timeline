import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  
  return(
    <TimelineEvent 
      person="Minnie Mouse" 
      status="I love you Mickey Mouse"
      timestamp="April 14, 2020"

    />
  );
};

export default Timeline;