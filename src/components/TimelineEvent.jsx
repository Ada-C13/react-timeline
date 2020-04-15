import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import { render } from "@testing-library/react";

const TimelineEvent = (props) => {
  return (
    <div className="TimelineEvent">
      <h1>person</h1>
      <h1>status</h1>
      <h1>Timestamp</h1>
    </div>
  );
};

export default TimelineEvent;
