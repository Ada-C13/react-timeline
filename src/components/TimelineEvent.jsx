import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import { render } from "@testing-library/react";

const TimelineEvent = (props) => {
  return (
    <div>
      <Timestamp time={props.timestamp} />
      <h3>person</h3>
      <p>status</p>
    </div>
  );
};

export default TimelineEvent;
