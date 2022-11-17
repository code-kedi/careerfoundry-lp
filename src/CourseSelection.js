import React, { useState } from "react";
import axios from "axios";

export default function CourseSelection() {
  const [choice, setChoice] = useState(null);

  function handleChange(event) {
    // console.log(event.target.value)
    setChoice(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let courseSlug = "";

    if (choice === "vui-design") {
      courseSlug = "voice-user-interface-design-with-amazon-alexa";
    } else if (choice === "full-stack") {
      courseSlug = "full-stack-immersion";
    }

    const apiUrl = `https://private-e05942-courses22.apiary-mock.com/courses/${courseSlug}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
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
  );
}
