import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  return (
    <div>
      {props.events.map((event) => {
        return (
          <TimelineEvent
            person={event.person}
            status={event.status}
            timestamp={event.timeStamp}
          />
        );
      })}
    </div>
  );
};

export default Timeline;

/* <TimelineEvent person="Sara" status="Hi there" timestamp="1 day ago" />
<TimelineEvent person="Ben" status="I'm ben" timestamp="1 day ago" />
<TimelineEvent person="Sara" status="Hi there" timestamp="1 day ago" /> */
