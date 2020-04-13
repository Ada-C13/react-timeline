import React from 'react';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const date = time.format("MM-YYYY");
  const relative = time.fromNow();

  return (
    <span title={absolute}>{relative}  ({date})</span>
  );
};

export default Timestamp;