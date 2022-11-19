import React from "react";
import "./css/Course.css"

export default function Course(props) {
  return (
    <div className="Course">
      <h3 className="mb-3">Next start dates:</h3>
      <div className="container course-wrapper d-flex justify-content-around">
      {props.data.map((course, index) => {
        return (
          <div key={index} className="rounded">
            <h2 className="mb-3">{course.title}</h2>
            <p className="mb-4">{course.next_start_formatted}</p>
            <a
              href={course.url}
              target="_blank"
              rel="noreferrer">
                More info
            </a>
          </div>
        );
      })}
      </div>
    </div>
  );

}
