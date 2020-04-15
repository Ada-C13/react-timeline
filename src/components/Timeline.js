import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  return (
    <div>
      {props.events.map((event) => {
        return (
          <TimelineEvent
            className="timeline"
            person={event.person}
            status={event.status}
            timeStamp={event.timeStamp}
          />
        );
      })}
      ;
    </div>
  );
};

export default Timeline;
