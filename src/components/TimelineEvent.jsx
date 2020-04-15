import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";
import { render } from "@testing-library/react";

const TimelineEvent = (props) => {
  return (
    <div>
      person = {props.event - person}
      status = {props.event - status}
      timestamp ={props.event - time}
    </div>
  );
};

export default TimelineEvent;
