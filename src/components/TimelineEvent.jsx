import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import { render } from "@testing-library/react";

const TimelineEvent = (props) => {
  return (
    <div className="timeline-event">
      <h3 className="event-time">
        <Timestamp time={props.timeStamp} />
      </h3>
      <h3 className="event-person">{props.person}</h3>
      <p className="event-status">{props.status}</p>
    </div>
  );
};

export default TimelineEvent;
