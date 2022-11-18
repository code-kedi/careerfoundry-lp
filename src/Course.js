import React from "react";

export default function Course(props) {
  return (
    <div className="Course">
      <h3>Next start dates</h3>
      {props.data.map((course, index) => {
        return (
          <div key={index}>
            <h2>{course.title}</h2>
            <p>{course.next_start_formatted}</p>
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
  );

}
