import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import { render } from '@testing-library/react';
import '../data/timeline.json';

const Timeline = (props) => {
    const posts = props.events.map ((event) => {
      return (
        <TimelineEvent
          person = {event.person}
          status = {event.status}
          timeStamp = {event.timeStamp}
          />
      );
    });
  return (
    <ul>
      {posts}
    </ul>
  );
}

export default Timeline;