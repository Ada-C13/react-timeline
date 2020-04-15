import React from 'react';
import './Timeline.css';
import PropTypes from 'prop-types';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props);

  const events = props.data.map((event, index) => {
    return (
      <section key={index}>
        <TimelineEvent 
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </section>

    )
  });

  
  return(
    <div className='timeLine'> {events} </div>
  );
}
Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
};

export default Timeline;