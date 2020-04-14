import React from 'react';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();


  return (
    <div>
    <span title={absolute}>{relative}</span>
    </div>
  );
};

export default Timestamp;