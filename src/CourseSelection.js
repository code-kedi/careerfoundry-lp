import React, { useState } from "react";
import CourseDetails from "./CourseDetails";
import axios from "axios";

export default function CourseSelection() {
  const [choice, setChoice] = useState("");
  const [results, setResults] = useState("");

  function handleChange(event) {
    setChoice(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function getData() {
    let courseSlug = "";

    if (choice === "vui-design") {
      courseSlug = "voice-user-interface-design-with-amazon-alexa";
    } else if (choice === "full-stack") {
      courseSlug = "full-stack-immersion";
    }

    const apiUrl = `https://private-e05942-courses22.apiary-mock.com/courses/${courseSlug}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData();
  }

  return (
    <div className="CourseSelection">
      <h3 className="text-center">Which course are you interested in?</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="course" id="vui-design" value="vui-design" onChange={handleChange} />
              <label className="form-check-label" htmlFor="vui-design">
                Voice User Interface Design
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="course" id="full-stack" value="full-stack" onChange={handleChange} />
              <label className="form-check-label" htmlFor="full-stack">
                Full-Stack Immersion
              </label>
            </div>
          </div>
        </div>
        <div>
          <input className="w-100" type="submit" value="Select" />
        </div>
      </form>
    {results ? <CourseDetails results={results}/> : null}
  </div>
  );
}
