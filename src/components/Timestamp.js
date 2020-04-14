import React from 'react';
import './TimelineEvent.css';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <span title={absolute} className="event-time">{relative}</span>
  );
};

export default Timestamp;