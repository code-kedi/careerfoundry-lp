import React from "react";
import "./LandingPage.css";
import CourseSelection from "./CourseSelection";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="info-container">
        <div className="info-container-details">
          <h2>Explore our courses</h2>
          <p>Take a look at our latest addition "Voice User Interface Design"
          or our popular "Full-Stack Immersion" course.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="coding-student" />
      </div>
      <div className="course-container mt-5">
        <h3 className="text-center">Which course are you interested in?</h3>
        <CourseSelection />
      </div>
      <div className="results-container">
        Results
      </div>
    </div>
  );
}
