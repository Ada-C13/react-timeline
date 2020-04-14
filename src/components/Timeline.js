import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  const TimelineComponents = props.events.map(event => {
    return (
      <TimelineEvent key={event.id}
        person={event.person} 
        status={event.status}
        timeStamp={event.timeStamp}
      />
    );
  });

  return (
    <section className="timeline">
      { TimelineComponents }
    </section>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      person: PropTypes.string.isRequired,
      status: PropTypes.string,
      timeStamp: PropTypes.string.isRequired
    })
  )
}

export default Timeline;