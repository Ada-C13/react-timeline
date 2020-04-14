import React from 'react';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const date = time.format('MM-DD-YYYY');

  return (
    <span title={absolute}>{date}</span>
  );
};

export default Timestamp;