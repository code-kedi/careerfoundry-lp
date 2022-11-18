import React from "react";
import axios from "axios";

export default function CourseDetails(props) {
  console.log(props.results);

  return (
    <div className="CourseDetails">
      <p>Your selection: {props.results.description}</p>
      <p>{props.results.prices[1].amount} {props.results.prices[1].currency}</p>
      <p><em>Also starts on</em></p>
      {props.results.start_dates.map((date, index) => {
        return (
          <div key={index}>
            <p>{date}</p>
          </div>
        );
      })}
    </div>
  );
}
