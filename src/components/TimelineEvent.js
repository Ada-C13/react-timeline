import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = (props) => {
  return (
    <div className="card">
      <Timestamp time={props.timestamp} />
      <h3>{props.person}</h3>
      <p>{props.status}</p>
    </div>
  );
};

export default TimelineEvent;
