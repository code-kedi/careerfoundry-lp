import React from "react";
import "./css/CourseDetails.css";

export default function CourseDetails(props) {

  if(props) {
    return (
      <div className="CourseDetails">
        <div className="details-wrapper">
          <h4>{props.results.description}</h4>
          <h5>{props.results.prices[0].currency === "eur" ? "€" : "$"} {props.results.prices[0].amount}</h5>
          <div className="date-wrapper">
          <p className="mt-3">Also starts on</p>
            {props.results.start_dates.map((date, index) => {
              return (
                <ul key={index}>
                  <li>{date}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading";
  }
}
