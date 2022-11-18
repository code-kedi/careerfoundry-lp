import React from "react";

export default function CourseDetails(props) {

  if(props) {
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
  } else {
    return "Loading";
  }
}
