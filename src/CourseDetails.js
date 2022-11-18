import React from "react";
import axios from "axios";

export default function CourseDetails(props) {
  // const [loaded, setLoaded] = useState(false);

  return (
    <div className="CourseDetails">
      <p>{props.description}</p>
    </div>
  );
}
