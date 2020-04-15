import React from 'react';
import moment from 'moment';
import '../App.css';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <span className="Timeline-timestamp" title={absolute}>{relative}</span>
  );
};

export default Timestamp;